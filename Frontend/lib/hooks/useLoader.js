// NÃO MODIFIQUE NEM SUBSTITUA ESTE ARQUIVO

import { useState } from 'react';

function loadAsync(loader, uri, onProgress) {
    return new Promise((resolve, reject) => {
        loader.load(uri,
            (model) => resolve(model),
            onProgress,
            (error) => reject(error));
    });
}

export default function useLoader(Loader) {
    const loader = new Loader();

    const [result, setResult] = useState({
        loading: false,
        valid: true,
        model: null,
        error: null,
    });

    function load(uri, onProgress) {
        setResult({
            loading: true,
            valid: result.valid,
            model: result.model,
            error: result.error,
        });
        loadAsync(loader, uri, onProgress)
            .then((model) => {
                setResult({
                    loading: false,
                    valid: true,
                    model: model,
                    error: result.error,
                });
            })
            .catch((error) => {
                setResult({
                    loading: false,
                    valid: false,
                    model: result.model,
                    error: error,
                });
            });
    }

    return {
        loader: {
            loading: result.loading,
            valid: result.valid,
            model: result.model,
            error: result.error,
            load,
        },
    };
}
