import React,{useState} from 'react';
import clienteAxios from '../Axios';
import {Text, View, TouchableOpacity,TextInput } from 'react-native';

const NuevoScreen = () => {

    const[invitado,guardarInvitado] = useState({
        nombre:"",
        apellido:"",
        dni:"",
        presente:false,
    

    });

     //handler de los imputs
     const actualizarState = e => {
        guardarInvitado({
            ...invitado,
            [e.target.name] : e.target.value
        }); 
     }

     const agregarinvitado = e => {
        e.preventDefault();

        clienteAxios.post('/nuevo_invitado', invitado)
        alert("Invitado agregado")
    }

    return (
        <View style={{flex:.5}}>

            <View style={{flex:1}}>
                <Text style={{textAlign:'center', marginTop:25, fontSize:18}}>Nuevo Invitado</Text>
            </View>

            <View style={{flex:2}}>
                <TextInput placeholder="Nombre"  name="nombre"
                 style={{textAlign:'center', marginBottom:25, fontSize:18}} onChange={actualizarState}/>
                <TextInput placeholder="Apellido"  name="apellido" 
                style={{textAlign:'center', marginBottom:25, fontSize:18}} onChangeText={actualizarState}/>
                <TextInput placeholder="DNI"  name="dni" 
                style={{textAlign:'center', marginBottom:25, fontSize:18}} onChangeText={actualizarState}/>
            </View>

            <View style={{flex:.2}}>
                <TouchableOpacity>
                    <Text style={{textAlign:'center', marginBottom:25, fontSize:20, backgroundColor:'green', color:'white'}} onPress={agregarinvitado}>
                    Agregar Invitado</Text>
                </TouchableOpacity>
            </View>
   
        </View>
     );
}
 
export default NuevoScreen;