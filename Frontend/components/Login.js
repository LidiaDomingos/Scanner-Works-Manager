import React, {useState,useEffect} from 'react';
import { Keyboard, Image, KeyboardAvoidingView, TouchableOpacity, Text, StyleSheet, View , Animated } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useGlobal } from '../lib';

export default function Login(props) {
    
    const { navigation, route } = props;
    const [email, setEmail] = useGlobal('email');
    
    function entrar(){
        navigation.navigate('Consulta', route);
    }

    return (
        <KeyboardAvoidingView style = {{background: "linear-gradient(to right, #2D2A98, #18EEAB)", flexGrow: 1, justifyContent:'center', alignItems:'center'}}> 
            
            <View style={styles.containerLogo}>
                <Image style={{width:200,height:80}} source={require('../assets/loginTela.png')}/>
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={setEmail}
                />
        
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={()=> {}}
                />
            

            <TouchableOpacity style={styles.btnSubmit}>
                <Text style={styles.submitText} onPress={entrar}>
                    Acessar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegistro}>
                <Text style={styles.registroText}>
                    Criar login
                </Text>
            </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create(
    {
       containerLogo:{
           flexGrow:0.45,
           justifyContent:'center',
           alignItems:'center',
       },
       container:{
           flex:1,
           alignItems:'center',
           justifyContent:'center',
           width:'90%',
           paddingBottom: 50
       },
       input:{
            backgroundColor: '#FFF',
            width:'90%',
            marginBottom:15,
            color:'#222',
            fontSize:17,
            borderRadius:7,
            padding:3
       },
       btnSubmit:{
           backgroundColor:'#009c58',
           width:'90%',
           height:45,
           alignItems:'center',
           justifyContent:'center',
           borderRadius:7
       },
       submitText:{
           color:'#FFF',
           fontSize:18
       },
       btnRegistro:{
            marginTop:10
       },
       registroText:{
           color:'#FFF'
       }
    }
);