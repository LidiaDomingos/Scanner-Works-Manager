// NÃO MODIFIQUE NEM SUBSTITUA ESTE ARQUIVO

import 'react-native-get-random-values';

import { nanoid } from 'nanoid';

import { useState } from 'react';

import { Image, Platform } from 'react-native';

import * as FileSystem from 'expo-file-system';
import { manipulateAsync } from 'expo-image-manipulator';
import * as DocumentPicker from 'expo-document-picker';

const MAX_SIZE = 512;

function getImageSizeAsync(uri) {
    return new Promise((resolve, reject) => {
        Image.getSize(uri,
            (resultWidth, resultHeight) => resolve({ resultWidth, resultHeight }),
            (error) => reject(error));
    });
}

export default function useStorage(uri) {
    const [file, setFile] = useState({
        loading: false,
        valid: true,
        uri: uri,
        error: null,
    });

    function encodeMobile(uri, mimeType) {
        FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 })
            .then((data) => {
                if (mimeType.includes('*')) {
                    mimeType = '';
                }
                setFile({
                    loading: false,
                    valid: true,
                    uri: `data:${mimeType};base64,${data}`,
                    error: file.error,
                });
            });
    }

    function encode(result, mimeType) {
        if (Platform.OS === 'web') {
            setFile({
                loading: false,
                valid: true,
                uri: result.uri,
                error: file.error,
            });
        } else {
            if (Platform.OS === 'android') {
                const tempUri = `${FileSystem.cacheDirectory}${nanoid()}`;
                FileSystem.copyAsync({ from: result.uri, to: tempUri })
                    .then(() => {
                        encodeMobile(tempUri, mimeType);
                    });
            } else {
                encodeMobile(result.uri, mimeType);
            }
        }
    }

    function resize(result, resultWidth, resultHeight) {
        let width;
        let height;
        if (resultWidth < resultHeight) {
            height = MAX_SIZE;
            width = resultWidth * (height / resultHeight);
        } else {
            width = MAX_SIZE;
            height = resultHeight * (width / resultWidth);
        }
        manipulateAsync(result.uri, [{ resize: { width, height } }])
            .then((resized) => {
                if (Platform.OS === 'web') {
                    setFile({
                        loading: false,
                        valid: true,
                        uri: resized.uri,
                        error: file.error,
                    });
                } else {
                    encodeMobile(resized.uri, 'image/jpeg');
                }
            });
    }

    function pick(type) {
        setFile({
            loading: true,
            valid: file.valid,
            uri: file.uri,
            error: file.error,
        });
        const options = {};
        if (type) {
            options.type = type;
        }
        if (Platform.OS === 'android') {
            options.copyToCacheDirectory = false;
        }
        DocumentPicker.getDocumentAsync(options)
            .then((result) => {
                if (result.type === 'cancel') {
                    setFile({
                        loading: false,
                        valid: true,
                        uri: file.uri,
                        error: file.error,
                    });
                } else {
                    const mimeType = result.mimeType || (result.file && result.file.type) || type || '';
                    if (mimeType.startsWith('image/')) {
                        getImageSizeAsync(result.uri)
                            .then(({ resultWidth, resultHeight }) => {
                                if (resultWidth <= MAX_SIZE && resultHeight <= MAX_SIZE) {
                                    encode(result, mimeType);
                                } else {
                                    resize(result, resultWidth, resultHeight);
                                }
                            });
                    } else {
                        encode(result, mimeType);
                    }
                }
            })
            .catch((error) => {
                setFile({
                    loading: false,
                    valid: false,
                    uri: file.uri,
                    error: error,
                });
            });
    }

    function skip(uri) {
        setFile({
            loading: false,
            valid: true,
            uri: uri,
        });
    }

    return { pick, skip, file };
}
