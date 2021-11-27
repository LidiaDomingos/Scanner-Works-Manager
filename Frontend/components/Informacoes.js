import React , { useState } from 'react';

import { View , ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { TextInput ,  Button , Caption , Snackbar} from 'react-native-paper';

import { DropDown, DateTimePicker, useRequest , useGlobal} from '../lib';

import styles from '../styles/Informacoes.json';
import settings from '../settings.json';

export default function Informacoes(props) {

    const [dateScan, setDate] = useState(new Date());
    const [timeScan, setNowTime] = useState(new Date());
    const [lastDate, setLastDate] = useState(new Date());
    const [lastTime, setLastTime] = useState(new Date());
    const [movimentacao, setMovimentacao] = useState('NAO');
    const [status, setStatus] = useState('USO');
    const [tipo, setTipo] = useState('MATERIAL');
    // const [id, setId] = useState('');
    const [id, setId] = useGlobal('id');
    const [local, setLocal] = useState('');
    const [obra, setObra] = useState('');
    const [usuario, setUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [quantidadeE, setQuantidadeE] = useState('');
    const [quantidadeM, setQuantidadeM] = useState('');
    const [destino, setDestino] = useState('');
    const [observacao, setObservacao] = useState('');

    const [registerError, setRegisterError] = useState(false);  // Erro ao tentar atualizar ou postar algo

    const movimentacaoOpcoes = [
        { label: 'Não', value: 'NAO' },
        { label: 'Sim', value: 'SIM' },
    ];

    const statusOpcoes = [
        { label: 'Em uso', value: 'USO' },
        { label: 'Em manutencao', value: 'MANUTENCAO' },
        { label: 'Danificado', value: 'DANIFICADO' },
    ];

    const tipoOpcoes = [
        {label: 'Material', value : 'MATERIAL'},
        {label: 'Ferramenta' , value: 'FERRAMENTA'}
    ]

    const { navigation, route } = props;
    const {post ,  put , response: registerResponse} = useRequest(settings.url);

    function atualiza() {
        
        setRegisterError(true);
        
        const body = {
            id:id,
            local:local,
            usuario:usuario,
            dateScan:dateScan,
            timeScan:timeScan,
            lastDate:lastDate,
            lastTime:lastTime,
            nome:nome,
            quantidadeE:quantidadeE,
            quantidadeM:quantidadeM,
            destino:destino,
            status:status,
            movimentacao:movimentacao,
            observacao:observacao
        }
        
        post('/produto', body);
    }

    return (
        <ScrollView>
            <SafeAreaView  style={styles.container}>
                <View>
                    <View style = {styles.sub}>
                        <Caption  style = {styles.geral}>Geral</Caption >
                    </View>    

                    <TextInput style={styles.input} label="ID" value={id} onChangeText={setId}/>
                    <TextInput style={styles.input} label="Usuario" value={usuario} onChangeText={setUsuario}/>

                    <View style={styles.tempo}>
                        <DateTimePicker type="date" style={styles.inputDate} label="Data" value={dateScan} setValue={setDate} />
                        <DateTimePicker type="time" style={styles.inputTime} label="Hora" value={timeScan} setValue={setNowTime} />
                    </View>

                </View>

                <View>
                    <View style = {styles.sub}>
                        <Caption  style = {styles.title} >Útlimo Registro</Caption >
                    </View>
    
                    <View style={styles.tempo}>
                        <DateTimePicker type="date" style={styles.inputDate} label="Data" value={lastDate} setValue={setLastDate} />
                        <DateTimePicker type="time" style={styles.inputTime} label="Hora" value={lastTime} setValue={setLastTime} />
                    </View>

                </View>

                <View>

                    <View style = {styles.sub}>
                        <Caption  style = {styles.title} >Informacoes sobre o item</Caption >
                    </View>

                    <TextInput style={styles.input} label="Nome" value={nome} onChangeText={setNome}/>
                    <DropDown style={styles.input} label="Tipo" list={tipoOpcoes} value={tipo} setValue={setTipo} />
                    <TextInput style={styles.input} label="Quantidade em Estoque" value={quantidadeE} onChangeText={setQuantidadeE}/>
                    <DropDown style={styles.input} label="Status" list={statusOpcoes} value={status} setValue={setStatus} />

                    <View style = {styles.sub}>
                        <Caption  style = {styles.title} >Localizaçao</Caption >
                    </View>

                    <TextInput style={styles.input} label="Localizaçao atual" value={local} onChangeText={setLocal}/>
                    <DropDown style={styles.input} label="Movimentação" list={movimentacaoOpcoes} value={movimentacao} setValue={setMovimentacao} />

                    {movimentacao == "SIM" ? (
                        <>
                            <TextInput style={styles.input} label="Destino" value={destino} onChangeText={setDestino}/>
                            <TextInput style={styles.input} label="Quantidade Movimentada" value={quantidadeM} onChangeText={setQuantidadeM}/>
                        </>
                    ) : (
                        <></>
                    )}
                    
                </View>

                <TextInput style={styles.input} label="Observações" value={observacao} onChangeText={setObservacao}/>

                <View style = {styles.buttons}>
                    <Button mode="contained" onPress={atualiza}  loading={registerResponse.running}> Salvar </Button>
                    <Button mode="outlined" onPress={() => navigation.navigate('Histórico', route)}> Historico </Button>
                </View>


                {!registerResponse.running && !registerResponse.success && (
                <Snackbar visible={registerError} action={{ label: 'Ok', onPress: () => setRegisterError(false) }} onDismiss={() => { }}>
                    {registerResponse.body.status === 0 ? 'Não foi possível conectar ao servidor' : `ERROR ${registerResponse.body.status}: ${registerResponse.body.message}`}
                </Snackbar>
                )}

            </SafeAreaView>
        </ScrollView>
    );
}
