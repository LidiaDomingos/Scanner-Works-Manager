 import React from 'react';

import { View , Image , Text ,TouchableOpacity, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from '../styles/Main.json';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

import Consulta from './Consulta'
import Historico from './Historico'
import Informacoes from './Informacoes'

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>

      <DrawerContentScrollView {...props}>
        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 20,
              marginBottom: 20,
            }}
        >
          <Image
              source={require('../assets/marca.png')}
              style={{ width: 100, height: 30, flexDirection: 'row'}}
          />
        </View>
      <DrawerItemList {...props} />

      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          padding: 20,
          backgroundColor: '#f6f6f6',
          flexDirection: 'row',
          justifyContent: 'center'
        }}> 
       <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function Main(props) {
    return (
        <Drawer.Navigator initialRouteName="Historico"  
          drawerContent={props => <CustomDrawer {...props} />}>

            <Drawer.Screen name="Informações" component= {Informacoes} 
              options={{
                headerRight: () => (
                  <View>
                    <Button
                      icon="bell-ring-outline"
                      onPress={() => alert('This is a button!')}
                      title="Info"
                    />
                    <Image source={require('../assets/logo.png')}/>
                  </View>
                ),
              }}
            />
            <Drawer.Screen name="Consulta" component= {Consulta} />
            <Drawer.Screen name="Histórico" component= {Historico} />

        </Drawer.Navigator>
    );
}
