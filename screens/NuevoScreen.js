import React,{useState} from 'react';
import clienteAxios from '../Axios';
import Swal from 'sweetalert2';
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
        .then(res => {
           if(res.data.code === 11000){
               Swal.fire({
                   type:'error',
                   title:"Hubo un error!",
                   text:"Ese DNI ya está registrado"
               }) //<--Mail ya existe 11000
           }else{
              Swal.fire(
                  'Se Agregó el nuevo invitado',
                  res.data.mensaje,
                  'success'
              );
           }
           //redirect
           history.push('/');

        });
    }

    return (
        <View style={{flex:.5}}>

            <View style={{flex:1}}>
                <Text style={{textAlign:'center', marginTop:25, fontSize:18}}>Nuevo Invitado</Text>
            </View>

            <View style={{flex:2}}>
                <TextInput placeholder="Nombre" value="nombre" name="nombre" style={{textAlign:'center', marginBottom:25, fontSize:18}} onPress={actualizarState}/>
                <TextInput placeholder="Apellido"  value="apellido" name="apellido" style={{textAlign:'center', marginBottom:25, fontSize:18}} onPress={actualizarState}/>
                <TextInput placeholder="DNI" value="dni" name="dni" style={{textAlign:'center', marginBottom:25, fontSize:18}} onPress={actualizarState}/>
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