// NÃO MODIFIQUE NEM SUBSTITUA ESTE ARQUIVO

// OBSOLETO: prefira useUpdate em vez deste.

import { useEffect as useEffectCore } from 'react';

export default function useEffect(create, deps) {
    return useEffectCore(() => {
        let mounted = true;
        let inst;
        if (mounted) {
            inst = create();
        }
        return () => {
            if (inst) {
                inst();
            }
            mounted = false;
        };
    }, deps);
}
