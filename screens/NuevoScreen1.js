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
        alert("Invitado agregado")
        clienteAxios.post('/nuevo_invitado', objetoInvitado)
        this.setState({nombre:"",
        apellido:"",
        dni:""}
        )


    }

    render() { 
        return ( 
            <View style={{flex:1}}>

            <View style={{flex:.6}}>
                <Text style={{textAlign:'center', marginTop:35, fontSize:30, fontWeight:'bold', marginBottom:55,textDecorationLine: 'underline'}}>Nuevo Invitado</Text>
            </View>

            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <TextInput placeholder="Nombre" name="nombre"  value={this.state.nombre}
                 style={{textAlign:'center', marginBottom:35, fontSize:20,textDecorationLine: 'underline'}} onChangeText={(nombre)=> {this.setearNombre(nombre)}}/>
                
                <TextInput placeholder="Apellido" name="apellido" value={this.state.apellido}
                style={{textAlign:'center', marginBottom:35, fontSize:20,textDecorationLine: 'underline'}} onChangeText={(apellido)=>{this.setearApellido(apellido)}}/>
                
                <TextInput placeholder="DNI (Sin puntos)" name="dni"  value={this.state.dni} 
                style={{textAlign:'center', marginBottom:25, fontSize:20,textDecorationLine: 'underline'}} onChangeText={(dni)=>{this.setearDni(dni)}}/>
            </View>

            <View style={{flex:.6, padding:45, marginTop:10}}>
                <TouchableOpacity  onPress={this.agregarinvitado}>
                    <Text style={{textAlign:'center', fontSize:20, backgroundColor:'green', alignSelf:'center',
                    color:'white', height:'auto', width:'50%', borderRadius:50,fontWeight:'bold'}}>
                    AGREGAR INVITADO</Text>
                </TouchableOpacity>
            </View>
   
        </View>
         );
    }
}
 
export default NuevoScreen2;