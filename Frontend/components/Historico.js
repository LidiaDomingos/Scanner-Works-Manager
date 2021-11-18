import React from 'react';

import { View , ScrollView } from 'react-native';

import { Searchbar , DataTable } from 'react-native-paper';

import styles from '../styles/Historico.json';

export default function Historico(props) {

    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <ScrollView style={styles.container}>

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

                <DataTable.Row>
                    <DataTable.Cell>Madeira</DataTable.Cell>
                    <DataTable.Cell numeric>15/10/2021</DataTable.Cell>
                    <DataTable.Cell numeric>14:30</DataTable.Cell>
                    <DataTable.Cell numeric>user1</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Martelo</DataTable.Cell>
                    <DataTable.Cell numeric>22/03/2021</DataTable.Cell>
                    <DataTable.Cell numeric>4:30</DataTable.Cell>
                    <DataTable.Cell numeric>user2</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Cano</DataTable.Cell>
                    <DataTable.Cell numeric>07/10/2021</DataTable.Cell>
                    <DataTable.Cell numeric>19:15</DataTable.Cell>
                    <DataTable.Cell numeric>user3</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Madeira</DataTable.Cell>
                    <DataTable.Cell numeric>04/09/2021</DataTable.Cell>
                    <DataTable.Cell numeric>15:50</DataTable.Cell>
                    <DataTable.Cell numeric>user4</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Ferro</DataTable.Cell>
                    <DataTable.Cell numeric>25/11/2020</DataTable.Cell>
                    <DataTable.Cell numeric>7:30</DataTable.Cell>
                    <DataTable.Cell numeric>user5</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>Cimento</DataTable.Cell>
                    <DataTable.Cell numeric>13/11/2021</DataTable.Cell>
                    <DataTable.Cell numeric>12:30</DataTable.Cell>
                    <DataTable.Cell numeric>user6</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                    page={1}
                    numberOfPages={3}
                    label="1-2 of 6"
                    optionsLabel={'Rows per page'}
                />
                </DataTable>
        </ScrollView>
    );
}
