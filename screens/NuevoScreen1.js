import React from 'react';
import {Text, View, TouchableOpacity,TextInput } from 'react-native';
import clienteAxios from '../Axios';

class NuevoScreen2 extends React.Component {
    state = {
        nombre:"",
        apellido:"",
        dni:""
        
     }


     setearNombre = (nombre) => {
         this.setState({nombre:nombre})
     }
     setearApellido= (apellido) => {
         this.setState({apellido : apellido})
     }
     setearDni=(dni)=>{
         this.setState({dni:dni})
     }



     agregarinvitado = e => {
      
        let objetoInvitado = {
            nombre:this.state.nombre,
            apellido:this.state.apellido,
            dni:this.state.dni,
            presente:false
        }
        alert(JSON.stringify(objetoInvitado))
       alert("Invitado agregado")
       clienteAxios.post('/nuevo_invitado', objetoInvitado)

    }

    render() { 
        return ( 
            <View style={{flex:.5}}>

            <View style={{flex:1}}>
                <Text style={{textAlign:'center', marginTop:25, fontSize:18}}>Nuevo Invitado</Text>
            </View>

            <View style={{flex:2}}>
                <TextInput placeholder="Nombre" name="nombre"  value={this.state.nombre}
                 style={{textAlign:'center', marginBottom:25, fontSize:18}} onChangeText={(nombre)=> {this.setearNombre(nombre)}}/>
                
                <TextInput placeholder="Apellido" name="apellido" value={this.state.apellido}
                style={{textAlign:'center', marginBottom:25, fontSize:18}} onChangeText={(apellido)=>{this.setearApellido(apellido)}}/>
                
                <TextInput placeholder="DNI" name="dni"  value={this.state.dni}
                style={{textAlign:'center', marginBottom:25, fontSize:18}} onChangeText={(dni)=>{this.setearDni(dni)}}/>
            </View>

            <View style={{flex:.2}}>
                <TouchableOpacity>
                    <Text style={{textAlign:'center', marginBottom:25, fontSize:20, backgroundColor:'green', color:'white'}} 
                    onPress={this.agregarinvitado}>
                    Agregar Invitado</Text>
                </TouchableOpacity>
            </View>
   
        </View>
         );
    }
}
 
export default NuevoScreen2;