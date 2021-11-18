import React , { useState} from 'react';

import { View , ScrollView } from 'react-native';

import { TextInput , List} from 'react-native-paper';

import { DropDown, DateTimePicker} from '../lib';

import styles from '../styles/Informacoes.json';

export default function Informacoes(props) {

    const [date, setDate] = useState(new Date());
    const [nowTime, setNowTime] = useState(new Date());

    return (
        <ScrollView style={styles.container}>

            <List.Section style={styles.Geral}>

                 <List.Subheader>Geral</List.Subheader>

                <TextInput style={styles.input} label="ID"/>
                <TextInput style={styles.input} label="Local"/>
                <TextInput style={styles.input} label="Usuario"/>
                <View style={styles.now}>
                    <DateTimePicker type="date" style={styles.inputDate} label="Data" value={date} setValue={setDate} />
                    <DateTimePicker type="time" style={styles.inputTime} label="Hora" value={nowTime} setValue={setNowTime} />
                </View>

            </List.Section>

        </ScrollView>
    );
}
