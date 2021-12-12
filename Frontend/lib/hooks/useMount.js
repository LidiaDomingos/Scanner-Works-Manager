// NÃO MODIFIQUE NEM SUBSTITUA ESTE ARQUIVO

import { useEffect } from 'react';

export default function useMount(create) {
    function didMount() {
        return create();
    }

    return useEffect(didMount, []);
}
