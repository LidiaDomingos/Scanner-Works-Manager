// NÃO MODIFIQUE NEM SUBSTITUA ESTE ARQUIVO

import React from 'react';

import { Platform, Text } from 'react-native';

import PDFReaderCore from 'rn-pdf-reader-js';

export default function PDFReader(props) {
    if (Platform.OS === 'web') {
        return (
            <object
                {...props}
                type="application/pdf"
                data={props.uri}
            >
                <Text>PDFReader Component not supported on device mode</Text>
            </object>
        );
    } else {
        const source = { headers: props.headers };
        if (props.uri.startsWith('data:application/pdf;base64,')) {
            source.base64 = props.uri;
        } else {
            source.uri = props.uri;
        }
        return (
            <PDFReaderCore
                {...props}
                source={source}
            />
        );
    }
}
