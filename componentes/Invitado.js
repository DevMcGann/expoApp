import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import clienteAxios from '../Axios';


const Invitadoo = ({ invitado }) => {
    const { _id, nombre, apellido, dni } = invitado;


    //eliminar cliente
  const eliminarInvitado = idInvitado => {
    try {
      clienteAxios.delete(`/invitados/${idInvitado}`)
      alert("Invitado Eliminado")
    } catch (error) {
      alert("Error eliminando Invitado")
    }
       
  };

  const editarPresente = async idInvitado => {
    try {
      let seleccionado = {
        nombre: invitado.nombre,
        apellido: invitado.apellido,
        dni: invitado.dni,
        presente: true
      };
      await clienteAxios.delete(`/invitados/${idInvitado}`);
      await clienteAxios.post("/nuevo_invitado", seleccionado);
      alert("Invitado marcado como Presente")  
    
    } catch (error) {
      alert("Hubo un error Marcando como presente al Invitado")
    }
    
  };

    return ( 
        <View style={{borderStyle:'solid', borderWidth:5, borderColor:'black',flex:1}}>
            <View>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:15}}>{apellido} {nombre}</Text>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:25}}>{dni}</Text>
            </View>
            <View style={{padding:20}}>
                <TouchableOpacity onPress={() => editarPresente(_id)}>
                    <Text style={{ backgroundColor:  invitado.presente ? "green" : "red", textAlign:'center', color:'white', fontSize:20 }}>
                      {invitado.presente? "Presente" : "Ausente"}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => eliminarInvitado(_id)}>
                    <Text  style={{textAlign:'center'}}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default Invitadoo;