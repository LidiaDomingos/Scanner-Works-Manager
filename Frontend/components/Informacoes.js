import React , { useState } from 'react';

import { View , ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, TextInput ,  Button , Caption , Snackbar, ActivityIndicator} from 'react-native-paper';

import { DropDown, DateTimePicker, useRequest , useEmit, useGlobal , useEffect} from '../lib';

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
    const [id, setId] = useGlobal('id');
    const [local, setLocal] = useState('');
    const [obra, setObra] = useState('');
    const [usuario, setUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [quantidadeE, setQuantidadeE] = useState('');
    const [quantidadeM, setQuantidadeM] = useState('');
    const [destino, setDestino] = useState('');
    const [observacao, setObservacao] = useState('');

    const [getError, setGetError] = useState(false);
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

    const emit = useEmit('get-id');

    const { navigation, route } = props;
    const { get ,  put , response: registerResponse , skip} = useRequest(settings.url);

    function atualiza() {
        
        setRegisterError(true);
        
        const body = {
            id:id,
            local:registerResponse.body.local,
            usuario:registerResponse.body.usuario,
            dateScan:dateScan,
            timeScan:timeScan,
            lastDate:lastDate,
            lastTime:lastTime,
            nome:nome,
            tipo:tipo,
            quantidadeE:quantidadeE,
            quantidadeM:quantidadeM,
            destino:destino,
            status:status,
            movimentacao:movimentacao,
            observacao:observacao
        }

        body.key = route.key;
        put('/produto',body);

        navigation.navigate('Histórico', route)
        
    }

    useEffect(()=>{
        setRegisterError(true);
        get('/produto?id='+id);
    }, [id])                                  

    return (
        
        <>
        {registerResponse.running ? (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        ) : (
            registerResponse.success ? (
                registerResponse.body === null || registerResponse.body.length === 0 ? (
                    <View style={styles.center}>
                        <Text>
                            Nenhum produto cadastrado
                        </Text>
                    </View>
        ):(    
        
            <ScrollView>
                <SafeAreaView  style={styles.container}>
                    <View>
                        <View style = {styles.sub}>
                            <Caption  style = {styles.geral}>Geral</Caption >
                        </View>    

                        <TextInput style={styles.input} label="ID" value={id} onChangeText={setId}/>
                        <TextInput style={styles.input} label="Usuario" value={registerResponse.body.usuario} onChangeText={(novoUsuario) => {skip({ ...registerResponse.body, usuario: novoUsuario})}}/>

                        <View style={styles.tempo}>
                            <DateTimePicker type="date" style={styles.inputDate} label="Data" value={dateScan} setValue={setDate} disabled={true}/>
                            <DateTimePicker type="time" style={styles.inputTime} label="Hora" value={timeScan} setValue={setNowTime} disabled={true}/>
                        </View>

                    </View>

                    <View>
                        <View style = {styles.sub}>
                            <Caption  style = {styles.title}>Último Registro</Caption >
                        </View>
        
                        <View style={styles.tempo}>
                            <DateTimePicker type="date" style={styles.inputDate} label="Data" value={new Date(registerResponse.body.lastDate)} setValue={setLastDate} disabled={true}/>
                            <DateTimePicker type="time" style={styles.inputTime} label="Hora" value={new Date(registerResponse.body.lastTime)} setValue={setLastTime} disabled={true}/>
                        </View>

                    </View>

                    <View>

                        <View style = {styles.sub}>
                            <Caption  style = {styles.title} >Informacoes sobre o item</Caption >
                        </View>

                        <TextInput style={styles.input} label="Nome" value={registerResponse.body.nome} onChangeText={setNome}/>
                        <DropDown style={styles.input} label="Tipo" list={tipoOpcoes} value={registerResponse.body.tipo} setValue={setTipo} />
                        <TextInput style={styles.input} label="Quantidade em Estoque" value={registerResponse.body.quantidadeE} onChangeText={(novaQuantidadeE) => {skip({ ...registerResponse.body, quantidadeE: novaQuantidadeE})}}/>
                        <DropDown style={styles.input} label="Status" list={statusOpcoes} value={registerResponse.body.status} setValue={(novoStatus) => {skip({ ...registerResponse.body, status: novoStatus})}} />

                        <View style = {styles.sub}>
                            <Caption  style = {styles.title} >Localizaçao</Caption >
                        </View>

                        <TextInput style={styles.input} label="Localizaçao atual" value={registerResponse.body.local} onChangeText={setLocal}/>
                        <DropDown style={styles.input} label="Movimentação" list={movimentacaoOpcoes} value={registerResponse.body.movimentacao} setValue={setMovimentacao} />

                        {movimentacao == "SIM" ? (
                            <>
                                <TextInput style={styles.input} label="Destino" value={registerResponse.body.destino} onChangeText={setDestino}/>
                                <TextInput style={styles.input} label="Quantidade Movimentada" value={registerResponse.body.quantidadeM} onChangeText={setQuantidadeM}/>
                            </>
                        ) : (
                            <></>
                        )}
                        
                    </View>

                    <TextInput style={styles.input} label="Observações" value={registerResponse.body.observacao} onChangeText={setObservacao}/>

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
            )
        ):(
            <View style={styles.center}>
                <Button mode="contained" onPress={emit}>
                    Tentar novamente
                </Button>
            </View>
           )
        
        )
      }
    </>
    );
}
