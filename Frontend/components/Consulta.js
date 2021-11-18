import React from 'react';

import { View } from 'react-native';
import { Card , Paragraph , Button } from 'react-native-paper';

import styles from '../styles/Consulta.json';

export default function Consulta(props) {
    return (
        <View style={styles.container}>

            <Card style = {styles.card}>
                <Card.Cover style = {styles.qrCode} source={{ uri: 'https://tecnoblog.net/meiobit/wp-content/uploads_legacy/qrcodedomal.jpg' }} />

                <Card.Content style = {styles.card}>
                    <Paragraph>Centralize o QRCode</Paragraph>
                </Card.Content>

            </Card>

            <View style = {styles.buttons}>
                <Button mode="outlined" > Cancelar </Button>
                <Button mode="contained" > Visuzalizar </Button>
            </View>

        </View>
    );
}
