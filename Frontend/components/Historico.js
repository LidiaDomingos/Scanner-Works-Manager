import React , {useState} from 'react';

import { View , ScrollView } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Searchbar , ActivityIndicator, DataTable , Button , Text} from 'react-native-paper';

import styles from '../styles/Historico.json';

import { useSignal, useEmit, useEffect, useRequest, useGlobal, map } from '../lib';
import settings from '../settings.json';

function ProductRow(props){

    const [id,setId] = useGlobal('id');
    
    function onPress(){
        setId(produto.id);
        navigation.navigate('Informações');
    }
    
    const {navigation, produto} = props;

    let data = new Date(produto.dateScan);
    let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 

    var today = new Date(produto.timeScan);
    var time = today.getHours() + ":" + today.getMinutes();

    return (
        <DataTable.Row>
            <DataTable.Cell onPress = {onPress} >{produto.id}</DataTable.Cell>
            <DataTable.Cell numeric onPress = {onPress} >{dataFormatada}</DataTable.Cell>
            <DataTable.Cell numeric onPress = {onPress} >{time}</DataTable.Cell>
            <DataTable.Cell numeric onPress = {onPress}>{produto.usuario}</DataTable.Cell>
        </DataTable.Row>
    )
}

export default function Historico(props) {

    const { navigation } = props;
    const [getError, setGetError] = useState(false);

    const signal = useSignal('updated-product');
    const emit = useEmit('updated-product');

    const { get, response } = useRequest(settings.url);

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    useEffect(() => {
        setGetError(true);
        get('/produto/list');
    }, [signal]);

    return (
        <>
            {response.running ? (
                <View style={styles.center}>
                    <ActivityIndicator size="large" />
                </View>
            ) : (

                response.success ? (

                    response.body === null || response.body.length === 0 ? (
                        <View style={styles.center}>
                            <Text>
                                Nenhum produto cadastrado
                            </Text>
                        </View>
                    ): (
                        <ScrollView>
                            <SafeAreaView style={styles.container}>
                                <Searchbar style = {styles.filtro}
                                    placeholder="Search"
                                    onChangeText={onChangeSearch}
                                    value={searchQuery}
                                />

                                <DataTable style = {styles.tabela}>

                                    <DataTable.Header>
                                        <DataTable.Title>ID</DataTable.Title>
                                        <DataTable.Title numeric>Data</DataTable.Title>
                                        <DataTable.Title numeric>Hora</DataTable.Title>
                                        <DataTable.Title numeric>Usuário</DataTable.Title>
                                    </DataTable.Header>

                                    {map(response.body, (produto) => <ProductRow navigation={navigation} produto={produto} />)}

                                    <DataTable.Pagination
                                        page={1}
                                        numberOfPages={3}
                                        label="1-2 of 6"
                                        optionsLabel={'Rows per page'}
                                    />
                                    </DataTable>
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
