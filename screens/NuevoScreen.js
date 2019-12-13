import React,{useState} from 'react';
import clienteAxios from '../Axios';
import {Text, View, TouchableOpacity,TextInput } from 'react-native';

const NuevoScreen = () => {

    const[invitado,guardarInvitado] = useState({ });
    const [nombreI, setNombre] = useState("")
    const [apellidoI, setApellido] = useState("")
    const [dniI, setDni] = useState("")


      const agregarinvitado = e => {
        guardarInvitado({
            nombre: nombreI,
            apellido:apellidoI,
            dni:dniI,
            presente:false
        })
        
       //alert("Invitado agregado")
       alert("nombre "+JSON.stringify(nombreI))
       alert("apelli " + JSON.stringify(apellidoI))
       alert("dni " + JSON.stringify(dniI))
       alert("Objeto "+JSON.stringify(invitado))
       //clienteAxios.post('/nuevo_invitado', invitado)

    }

    return (
        <View style={{flex:.5}}>

            <View style={{flex:1}}>
                <Text style={{textAlign:'center', marginTop:25, fontSize:18}}>Nuevo Invitado</Text>
            </View>

            <View style={{flex:2}}>
                <TextInput placeholder="Nombre"   value={nombreI}
                 style={{textAlign:'center', marginBottom:25, fontSize:18}} onChangeText={(nombre)=> setNombre(nombre) }/>
                <TextInput placeholder="Apellido" value={apellidoI}
                style={{textAlign:'center', marginBottom:25, fontSize:18}} onChangeText={(apellido)=> setApellido(apellido) }/>
                <TextInput placeholder="DNI"   value={dniI}
                style={{textAlign:'center', marginBottom:25, fontSize:18}} onChangeText={(dni)=> setDni(dni) }/>
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