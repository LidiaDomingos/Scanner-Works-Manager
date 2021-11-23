import React , { useState} from 'react';

import { View , ScrollView } from 'react-native';

import { TextInput , Caption , Divider , Button } from 'react-native-paper';

import { DropDown, DateTimePicker} from '../lib';

import styles from '../styles/Informacoes.json';

export default function Informacoes(props) {

    const [date, setDate] = useState(new Date());
    const [nowTime, setNowTime] = useState(new Date());

    const [lastDate, setLastDate] = useState(new Date());
    const [lastTime, setLastTime] = useState(new Date());

    const movimentacaoOpcoes = [
        { label: 'Não', value: 'NAO' },
        { label: 'Sim', value: 'SIM' },
    ];

    const [movimentacao, setMovimentacao] = useState('NAO');

    const statusOpcoes = [
        { label: 'Em uso', value: 'USO' },
        { label: 'Em manutencao', value: 'MANUTENCAO' },
        { label: 'Danificado', value: 'DANIFICADO' },
    ];

    const tipoOpcoes = [
        {label: 'Material', value : 'MATERIAL'},
        {label: 'Ferramenta' , value: 'FERRAMENTA'}
    ]

    const [status, setStatus] = useState('USO');
    const [tipo, setTipo] = useState('MATERIAL');

    return (
        <ScrollView style={styles.container}>

            <View>

                <Caption style = {styles.title}>Geral</Caption>

                <TextInput style={styles.input} label="ID"/>
                <TextInput style={styles.input} label="Local"/>
                <TextInput style={styles.input} label="Usuario"/>

                <View style={styles.tempo}>
                    <DateTimePicker type="date" style={styles.inputDate} label="Data" value={date} setValue={setDate} />
                    <DateTimePicker type="time" style={styles.inputTime} label="Hora" value={nowTime} setValue={setNowTime} />
                </View>

            </View>

            <View>

                <Caption style = {styles.title} >Útlimo Registro</Caption>
 
                <View style={styles.tempo}>
                    <DateTimePicker type="date" style={styles.inputDate} label="Data" value={lastDate} setValue={setLastDate} />
                    <DateTimePicker type="time" style={styles.inputTime} label="Hora" value={lastTime} setValue={setLastTime} />
                </View>

            </View>

            <View>

                 <Caption style = {styles.title} >Informacoes sobre o item</Caption>
                 
                 <TextInput style={styles.input} label="Nome"/>
                 <DropDown style={styles.input} label="Tipo" list={tipoOpcoes} value={tipo} setValue={setTipo} />
                 <TextInput style={styles.input} label="Quantidade em Estoque"/>
                 <DropDown style={styles.input} label="Status" list={statusOpcoes} value={status} setValue={setStatus} />
                 <DropDown style={styles.input} label="Movimentação" list={movimentacaoOpcoes} value={movimentacao} setValue={setMovimentacao} />

                {/*Ajustar para caso seja marcado a opção SIM : Habilitar destino*/}
                 <TextInput style={styles.input} label="Destino" disabled={true}/>

            </View>

            <TextInput style={styles.input} label="Observações"/>

            <View style = {styles.buttons}>
                <Button mode="outlined" > Fechar </Button>
                <Button mode="contained" > Salvar Alteração </Button>
            </View>

        </ScrollView>
    );
}
