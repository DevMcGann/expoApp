import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import clienteAxios from '../Axios';


const Invitadoo = ({ invitado }) => {
    const { _id, nombre, apellido, dni } = invitado;


    //eliminar cliente
  const eliminarInvitado = idInvitado => {
        clienteAxios.delete(`/invitados/${idInvitado}`)
  };

  const editarPresente = async idInvitado => {
    let seleccionado = {
      nombre: invitado.nombre,
      apellido: invitado.apellido,
      dni: invitado.dni,
      presente: true
    };

    alert(JSON.stringify(seleccionado));

    await clienteAxios.delete(`/invitados/${idInvitado}`);

    await clienteAxios.post("/nuevo_invitado", seleccionado);
  };

    return ( 
        <View style={{borderStyle:'solid', borderWidth:10, borderColor:'green', flex:1}}>
            <View>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:15}}>{nombre} {apellido}</Text>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:15}}>{dni}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => editarPresente(_id)}>
                    <Text style={{ backgroundColor:  invitado.presente ? "green" : "red", textAlign:'center', color:'white', fontSize:20 }}>
                      {Invitadoo.presente? "Presente" : "Ausente"}
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