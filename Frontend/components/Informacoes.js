import React , { useState } from 'react';

import { View , ScrollView } from 'react-native';

import { TextInput , Caption , Divider , Button } from 'react-native-paper';

import { DropDown, DateTimePicker, useRequest} from '../lib';

import styles from '../styles/Informacoes.json';

export default function Informacoes(props) {

    const [dateScan, setDate] = useState(new Date());
    const [timeScan, setNowTime] = useState(new Date());

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
    const [id, setId] = useState('');
    const [local, setLocal] = useState('');
    const [usuario, setUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [observacoes, setObservacoes] = useState('');

    const {post, response} = useRequest('http://172.30.80.1:8080');

    function atualiza() {
        post('/historico',{
                id:id,
                local:local,
                usuario:usuario,
                dateScan:dateScan,
                timeScan:timeScan,
                lastDate:lastDate,
                lastTime:lastTime,
                nome:nome,
                quantidade:quantidade,
                status:status,
                movimentacao:movimentacao,
                observacoes:observacoes
            }
        );
    }

    return (
        <ScrollView style={styles.container}>

            <View>

                <Caption style = {styles.title}>Geral</Caption>

                <TextInput style={styles.input} label="ID" value={id} onChangeText={setId}/>
                <TextInput style={styles.input} label="Local" value={local} onChangeText={setLocal}/>
                <TextInput style={styles.input} label="Usuario" value={usuario} onChangeText={setUsuario}/>

                <View style={styles.tempo}>
                    <DateTimePicker type="date" style={styles.inputDate} label="Data" value={dateScan} setValue={setDate} />
                    <DateTimePicker type="time" style={styles.inputTime} label="Hora" value={timeScan} setValue={setNowTime} />
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
                 
                 <TextInput style={styles.input} label="Nome" value={nome} onChangeText={setNome}/>
                 <DropDown style={styles.input} label="Tipo" list={tipoOpcoes} value={tipo} setValue={setTipo} />
                 <TextInput style={styles.input} label="Quantidade em Estoque" value={quantidade} onChangeText={setQuantidade}/>
                 <DropDown style={styles.input} label="Status" list={statusOpcoes} value={status} setValue={setStatus} />
                 <DropDown style={styles.input} label="Movimentação" list={movimentacaoOpcoes} value={movimentacao} setValue={setMovimentacao} />
                 <TextInput style={styles.input} label="Destino" disabled={true}/>

            </View>

            <TextInput style={styles.input} label="Observações" value={observacoes} onChangeText={setObservacoes}/>

            <View style = {styles.buttons}>
                <Button mode="outlined" > Fechar </Button>
                <Button mode="contained" onPress={atualiza}> Salvar Alteração </Button>
            </View>

        </ScrollView>
    );
}
