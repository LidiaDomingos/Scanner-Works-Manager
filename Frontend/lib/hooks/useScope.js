// NÃO MODIFIQUE NEM SUBSTITUA ESTE ARQUIVO

import { useRef } from 'react';

export default function useScope(object) {
    if (typeof object !== 'object') {
        throw new TypeError('Parameter of useScope must be an object');
    }

    if (object === null) {
        throw new Error('Parameter of useScope cannot be null');
    }

    const scope = {};

    for (const [name, value] of Object.entries(object)) {
        scope[name] = useRef(value);
    }

    return new Proxy(scope, {
        get: (target, property) => {
            if (property in target) {
                return target[property].current;
            }
        },
        set: (target, property, value) => {
            if (property in target) {
                target[property].current = value;
                return true;
            } else {
                return false;
            }
        },
    });
}
