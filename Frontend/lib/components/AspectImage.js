// NÃO MODIFIQUE NEM SUBSTITUA ESTE ARQUIVO

import React, { useState, useEffect } from 'react';

import { Platform, Image } from 'react-native';

export default function AspectImage(props) {
    const [basis, setBasis] = useState(0);
    const [ratio, setRatio] = useState(0);

    function onLayout({ nativeEvent }) {
        if (props.basis === 'height') {
            setBasis(nativeEvent.layout.height);
        } else {
            setBasis(nativeEvent.layout.width);
        }
        if (props.onLayout) {
            props.onLayout({ nativeEvent });
        }
    }

    function onSuccess(width, height) {
        if (width > 0 && height > 0) {
            setRatio(width / height);
        } else {
            setRatio(0);
        }
    }

    function onFailure(error) {
        throw error;
    }

    useEffect(() => {
        if (Platform.OS === 'web') {
            let uri;
            if (typeof props.source === 'string') {
                uri = props.source;
            } else {
                uri = props.source.uri;
            }
            Image.getSize(uri, onSuccess, onFailure);
        } else {
            if (typeof props.source === 'number') {
                const { width, height } = Image.resolveAssetSource(props.source);
                onSuccess(width, height);
            } else {
                Image.getSize(props.source.uri, onSuccess, onFailure);
            }
        }
    }, [props.source]);

    const style = { ...props.style };
    if (ratio > 0) {
        if (props.basis === 'height') {
            style.width = basis * ratio;
        } else {
            style.height = basis / ratio;
        }
    }

    return (
        <Image
            {...props}
            style={style}
            onLayout={onLayout}
        />
    );
}
