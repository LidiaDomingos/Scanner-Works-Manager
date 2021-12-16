import React from 'react';

import { View, StyleSheet , Image } from 'react-native';

import {Avatar,Title,Caption,Drawer, Divider} from 'react-native-paper';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useGlobal } from '../lib';

export function DrawerCustomizado(props) {
    const [email, setEmail] = useGlobal('email');

    return( 
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Icon icon="account-circle-outline" size={50}/>
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>{email.includes("@") ? email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)  : "Não válido"}</Title>
                            <Caption style={styles.caption}>{email}</Caption>
                        </View>
                    </View>
                </View>
                <Divider/>
                <DrawerItem  icon={({color, size}) => (<Icon name="barcode-scan" color={color} size={size}/>)} label="Consulta" onPress={() => {props.navigation.navigate('Consulta')}}/>
                <DrawerItem icon={({color, size}) => (<Icon name="chart-areaspline" color={color} size={size}/>)} label="Hitorico de Produtos" onPress={() => {props.navigation.navigate('Histórico')}}/>
            </View>
        </DrawerContentScrollView>

        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem onPress={() => {props.navigation.navigate('Login')}} icon={({color, size}) => (<Icon name="exit-to-app" color={color} size={size}/>)} label="Log Out"/>
        </Drawer.Section>

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


    </View>
);
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'1.5rem'
    },
    icon:{
    marginTop:'1.5rem',
    },
    list: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
      },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
