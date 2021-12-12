// NÃO MODIFIQUE NEM SUBSTITUA ESTE ARQUIVO

import { useEffect } from 'react';

export default function useUpdate(create, deps) {
    let mounted = true;
    let inst;

    function willUnmount() {
        if (inst) {
            inst();
        }
        mounted = false;
    }

    function didUpdate() {
        if (mounted) {
            inst = create();
        }
        return willUnmount;
    }

    return useEffect(didUpdate, deps);
}
