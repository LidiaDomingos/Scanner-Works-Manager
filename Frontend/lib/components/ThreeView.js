// NÃO MODIFIQUE NEM SUBSTITUA ESTE ARQUIVO

import React, { useState } from 'react';

import { Platform } from 'react-native';

import { State, GestureHandlerRootView, PanGestureHandler, PinchGestureHandler } from 'react-native-gesture-handler';

import { GLView } from 'expo-gl';
import { Renderer, THREE } from 'expo-three';

import { useScope, useMount, useUpdate } from '../hooks';

class Camera extends THREE.PerspectiveCamera {
    constructor(target) {
        super();
        this.target = target;
    }
    lookAt(x, y, z) {
        super.lookAt(x, y, z);
        if (x.isVector3) {
            this.target.copy(x);
        } else {
            this.target.set(x, y, z);
        }
    }
}

class GestureHandler extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <GestureHandlerRootView
                style={this.props.style}
                onWheel={this.props.onWheel}
            >
                <PanGestureHandler
                    onGestureEvent={this.props.onPanGestureEvent}
                    onHandlerStateChange={this.props.onPanHandlerStateChange}
                >
                    <PinchGestureHandler
                        onGestureEvent={this.props.onPinchGestureEvent}
                    >
                        {this.props.children}
                    </PinchGestureHandler>
                </PanGestureHandler>
            </GestureHandlerRootView>
        );
    }
}

export default function ThreeView(props) {
    const defaultTarget = new THREE.Vector3(0, 0, 0);

    const scope = useScope({
        renderer: null,
        scene: new THREE.Scene(),
        camera: new Camera(defaultTarget),
        target: defaultTarget,
        pan: null,
        shift: false,
        frame: 0,
    });

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [context, setContext] = useState();

    function render(camera) {
        if (scope.renderer) {
            const renderer = scope.renderer;
            renderer.render(scope.scene, camera);
            renderer.getContext().endFrameEXP();
        }
    }

    function startAnimation(update) {
        function renderFrame() {
            scope.frame = requestAnimationFrame(renderFrame);
            update();
            render(scope.camera);
        }
        renderFrame();
    }

    function stopAnimation() {
        if (scope.frame) {
            cancelAnimationFrame(scope.frame);
            scope.frame = 0;
        }
    }

    function translate(camera, pan, event) {
        const { absolute, target, baseX, baseY, scale } = pan;
        const { translationX, translationY } = event;
        const deltaX = baseX.clone().multiplyScalar(translationX * scale);
        const deltaY = baseY.clone().multiplyScalar(translationY * scale);
        camera.position.copy(absolute)
            .sub(deltaX)
            .add(deltaY);
        scope.target.copy(target)
            .sub(deltaX)
            .add(deltaY);
    }

    function rotate(camera, pan, event) {
        const { relative, angle, unrotation } = pan;
        const { translationX, translationY } = event;
        const spherical = relative.clone();
        spherical.theta -= translationX * angle;
        spherical.phi -= translationY * angle;
        spherical.makeSafe();
        camera.position.setFromSpherical(spherical)
            .applyQuaternion(unrotation)
            .add(scope.target);
        camera.lookAt(scope.target);
    }

    function zoom(forward) {
        const camera = scope.camera;
        const direction = scope.target.clone().sub(camera.position);
        if (forward) {
            const distance = direction.length() - camera.near;
            if (distance > 0) {
                direction.normalize();
                if (distance < 1) {
                    direction.multiplyScalar(distance);
                }
                camera.position.add(direction);
            }
        } else {
            camera.position.sub(direction.normalize());
        }
        render(camera);
    }

    function onPanHandlerStateChange({ nativeEvent }) {
        if (nativeEvent.state === State.BEGAN) {
            const camera = scope.camera;
            const vector = camera.position.clone().sub(scope.target);
            const rotation = new THREE.Quaternion();
            const pan = {
                modifier: null,
                absolute: camera.position.clone(),
                target: scope.target.clone(),
                baseX: new THREE.Vector3(1, 0, 0),
                baseY: new THREE.Vector3(0, 1, 0),
                relative: new THREE.Spherical(),
            };
            rotation.setFromUnitVectors(camera.up, pan.baseY);
            pan.baseX.applyQuaternion(camera.quaternion);
            pan.baseY.applyQuaternion(camera.quaternion);
            pan.relative.setFromVector3(vector.applyQuaternion(rotation));
            pan.scale = pan.relative.radius / height;
            pan.angle = Math.PI / height;
            pan.unrotation = rotation.invert();
            scope.pan = pan;
        }
    }

    function onPanGestureEvent({ nativeEvent }) {
        if (nativeEvent.state === State.ACTIVE) {
            const camera = scope.camera;
            const pan = scope.pan;
            if (pan.modifier === null) {
                pan.modifier = scope.shift || nativeEvent.numberOfPointers > 1;
            }
            if (pan.modifier) {
                translate(camera, pan, nativeEvent);
            } else {
                rotate(camera, pan, nativeEvent);
            }
            render(camera);
        }
    }

    function onPinchGestureEvent({ nativeEvent }) {
        zoom(nativeEvent.scale > 1);
    }

    function onWheel(event) {
        zoom(event.deltaY < 0);
    }

    function onLayout({ nativeEvent }) {
        setWidth(nativeEvent.layout.width);
        setHeight(nativeEvent.layout.height);
        if (props.onLayout) {
            props.onLayout({ nativeEvent });
        }
    }

    function onContextCreate(gl) {
        setContext(gl);
        if (props.onContextCreate) {
            props.onContextCreate(gl);
        }
    }

    useMount(() => {
        if (props.onMount) {
            const camera = scope.camera;
            props.onMount({
                scene: scope.scene,
                camera,
                render: () => render(camera),
                startAnimation,
                stopAnimation,
            });
        }
        if (Platform.OS === 'web') {
            const onKeydown = (event) => {
                if (event.key === 'Shift') {
                    scope.shift = true;
                }
            };
            const onKeyup = (event) => {
                if (event.key === 'Shift') {
                    scope.shift = false;
                }
            };
            addEventListener('keydown', onKeydown);
            addEventListener('keyup', onKeyup);
            return () => {
                removeEventListener('keyup', onKeyup);
                removeEventListener('keyup', onKeydown);
            };
        }
    });

    useUpdate(() => {
        if (width > 0 && height > 0 && context) {
            let renderer;
            if (scope.renderer && scope.renderer.getContext() === context) {
                renderer = scope.renderer;
            } else {
                renderer = new Renderer({ gl: context });
                scope.renderer = renderer;
                if (props.onRendererCreate) {
                    props.onRendererCreate(renderer);
                }
            }
            renderer.setSize(context.drawingBufferWidth, context.drawingBufferHeight);
            const camera = scope.camera;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            if (props.onResize) {
                props.onResize(width, height);
            }
        }
    }, [width, height, context]);

    const style = { ...props.style };

    return (
        <GestureHandler
            style={{
                ...style,
                flexDirection: 'column',
                flexWrap: 'nowrap',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                padding: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                overflow: 'visible',
            }}
            onPanHandlerStateChange={onPanHandlerStateChange}
            onPanGestureEvent={onPanGestureEvent}
            onWheel={onWheel}
            onPinchGestureEvent={onPinchGestureEvent}
        >
            <GLView
                {...props}
                style={{
                    flexGrow: 1,
                    flexDirection: style.flexDirection,
                    flexWrap: style.flexWrap,
                    justifyContent: style.justifyContent,
                    alignItems: style.alignItems,
                    margin: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                    padding: style.padding,
                    paddingTop: style.paddingTop,
                    paddingRight: style.paddingRight,
                    paddingBottom: style.paddingBottom,
                    paddingLeft: style.paddingLeft,
                    overflow: style.overflow,
                }}
                onLayout={onLayout}
                onContextCreate={onContextCreate}
            />
        </GestureHandler>
    );
}
