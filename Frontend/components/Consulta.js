import React, { useState } from 'react';

import { View } from 'react-native';
import { Card , Paragraph, Caption, Portal, Text, Button, Snackbar, TextInput, IconButton} from 'react-native-paper';

import { useScanner } from '../lib';

import { useSignal, useRequest, useEmit,useGlobal, useEffect } from '../lib';
import settings from '../settings.json';

import styles from '../styles/Consulta.json';

export default function Consulta(props) {
    
    const { navigation, route } = props;

    const [id, setId] = useGlobal('id');

    const [inputId, setInputId] = useState('');

    const [data, setData] = useGlobal('data');
    const [error, setError] = useState(false);

    const { scanner, Preview } = useScanner();

    function onBarCodeScanned(result) {
        setData(setId(result.data));
        scanner.deactivate();
    }

    function onPress() {
        setError(true);
        scanner.activate();
    }

    function visualizar(){
        
        setId(inputId);
        navigation.navigate('Informações', route);
    }

    return (

        <View style={styles.container}>
            <>
            {scanner.active ? (
                <Portal>
                    <Preview style={styles.preview} onBarCodeScanned={onBarCodeScanned} />
                </Portal>
            ) : (
                <View style={styles.scan}>
                    {!!data && (
                        <Text style={styles.buttonScan}>
                            {data}
                        </Text>
                    )}
                    <Button style={styles.buttonScan} onPress={onPress} >
                        <IconButton icon="camera" color={'#2D2A9B'}  />
                        Escanear
                    </Button>
                </View>
            )}
            {scanner.broken && (
                <Snackbar visible={error} action={{ label: 'Ok', onPress: () => setError(false) }} onDismiss={() => { }}>
                    Não foi possível acessar a câmera.
                </Snackbar>
            )}
        </>
            <Card style = {styles.card}>
                <TextInput  style={styles.input} label = "Digite ID" value={inputId} onChangeText={setInputId}></TextInput>
            </Card>

            <View style = {styles.buttons}>
                <Button mode="outlined" > Cancelar </Button>
                <Button mode="contained" onPress={visualizar}> Visualizar </Button>
            </View>

        </View>
    );
}
