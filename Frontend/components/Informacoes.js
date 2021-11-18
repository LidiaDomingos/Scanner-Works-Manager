import React , { useState} from 'react';

import { View , ScrollView } from 'react-native';

import { TextInput , List , Divider} from 'react-native-paper';

import { DropDown, DateTimePicker} from '../lib';

import styles from '../styles/Informacoes.json';

export default function Informacoes(props) {

    const [date, setDate] = useState(new Date());
    const [nowTime, setNowTime] = useState(new Date());

    const [lastDate, setLastDate] = useState(new Date());
    const [lastTime, setLastTime] = useState(new Date());

    return (
        <ScrollView style={styles.container}>

            <List.Section style={styles.geral}>

                 <List.Subheader>Geral</List.Subheader>

                <TextInput style={styles.input} label="ID"/>
                <TextInput style={styles.input} label="Local"/>
                <TextInput style={styles.input} label="Usuario"/>

                <View style={styles.tempo}>
                    <DateTimePicker type="date" style={styles.inputDate} label="Data" value={date} setValue={setDate} />
                    <DateTimePicker type="time" style={styles.inputTime} label="Hora" value={nowTime} setValue={setNowTime} />
                </View>

            </List.Section>

            <Divider />

            <List.Section style={styles.ultimoRegistro}>

                 <List.Subheader>Último registro</List.Subheader>
 
                <View style={styles.tempo}>
                    <DateTimePicker type="date" style={styles.inputDate} label="Data" value={lastDate} setValue={setLastDate} />
                    <DateTimePicker type="time" style={styles.inputTime} label="Hora" value={lastTime} setValue={setLastTime} />
                </View>

            </List.Section>

            <Divider />


        </ScrollView>
    );
}
