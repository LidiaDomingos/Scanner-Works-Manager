 import React from 'react';

import { View } from 'react-native';

import { Text } from 'react-native-paper';

import { StatusBar } from 'expo-status-bar';

import styles from '../styles/Main.json';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Consulta from './Consulta'
import Historico from './Historico'
import Informacoes from './Informacoes'

const Drawer = createDrawerNavigator();

export default function Main(props) {
    return (
        <Drawer.Navigator initialRouteName="Informacoes">
            <Drawer.Screen name="Informações" component= {Informacoes} />
            <Drawer.Screen name="Consulta" component= {Historico} />
            <Drawer.Screen name="Histórico" component= {Consulta} />
        </Drawer.Navigator>
    );
}
