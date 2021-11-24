import React from 'react';

import { View } from 'react-native';
import { Card , Paragraph , Button ,TextInput} from 'react-native-paper';


import { useGlobal } from '../lib';

import styles from '../styles/Consulta.json';

export default function Consulta(props) {
    
    const { navigation, route } = props;

    const [id, setId] = useGlobal('id');

    return (
        <View style={styles.container}>

            <Card style = {styles.card}>
                <Card.Cover style = {styles.qrCode} source={{ uri: 'https://tecnoblog.net/meiobit/wp-content/uploads_legacy/qrcodedomal.jpg' }} />

                <Card.Content style = {styles.card}>
                    <Paragraph>Centralize o QRCode</Paragraph>
                </Card.Content>

                <TextInput  style={styles.input} label = "Digite ID" value={id} onChangeText={setId}></TextInput>

            </Card>

            <View style = {styles.buttons}>
                <Button mode="outlined" > Cancelar </Button>
                <Button mode="contained" onPress={() => navigation.navigate('Informações', route)}> Visuzalizar </Button>
            </View>

        </View>
    );
}
