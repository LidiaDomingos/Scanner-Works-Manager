import React from 'react';

import { View , Image , Text ,TouchableOpacity} from 'react-native';
import {useTheme , Title, IconButton} from 'react-native-paper';

import styles from '../styles/Main.json';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

import Consulta from './Consulta'
import Historico from './Historico'
import Informacoes from './Informacoes'
import { SafeAreaView } from 'react-native-safe-area-context';

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
   
  const theme = useTheme();

  // Essas atribuições abaixo não são estritamente
  // necessárias. Eu as incluí para usar as cores do
  // tema, mas nada impede de fazer tudo hardcoded.
  const headerStyle = {
      ...theme.screenOptions.headerStyle,
      ...styles.header,
  };

  const headerTintColor = theme.screenOptions.headerTintColor;
  const headerTitleStyle = theme.screenOptions.headerTitleStyle;

  // Esta é a atribuição que realmente interessa.
  // A variável screenOptions deve ser passada como
  // prop do Navigator, independente de qual seja.
  const screenOptions = {

      // Esta linha não é estritamente necessária.
      // Eu a incluí para usar os estilos do tema,
      // mas nada impede de fazer tudo hardcoded.
      // ...theme.screenOptions,

      // Esta é a parte que realmente interessa. O return
      // pode ter o código que você quiser. Esse código
      // será usado como header de todas as telas. Note
      // que os parâmetros navigation e route posseum
      // informações como o nome da tela e ações como
      // abrir a gaveta (neste caso específico do drawer).
      header: ({ navigation, route }) => {
          return (
            <SafeAreaView>
              <View style={headerStyle}>
                  <IconButton icon="menu" color={headerTintColor} onPress={navigation.openDrawer} />
                  
                  <View style={{flexDirection:'row' ,flexGrow:1, justifyContent:'space-between' , alignItems:'center'}}>
                    <Title style={headerTitleStyle}>{route.name}</Title>
                      <Image
                          source={require('../assets/logo_branco.png')}
                          style={{ width: 30, height: 40, flexDirection: 'row', marginRight:15}}
                      />
                  </View>  
              </View>
              </SafeAreaView>
          );
      },

      // Se você quiser fazer um botão de voltar, pode
      // usar "arrow-left" como nome do ícone e usar
      // navigation.goBack como a função do onPress.

  };
    
    return (
       
          <Drawer.Navigator initialRouteName="Consulta"  
            drawerContent={props => <CustomDrawer {...props}/>}
            screenOptions={screenOptions}>

              <Drawer.Screen name="Informações" component= {Informacoes} options={{drawerItemStyle: { display: 'none' }}}/>
              <Drawer.Screen name="Consulta" component= {Consulta} />
              <Drawer.Screen name="Histórico" component= {Historico} />

          </Drawer.Navigator>
       
    );
}