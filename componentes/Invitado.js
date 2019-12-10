import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import clienteAxios from '../Axios';
import Swal from "sweetalert2";

const Invitadoo = ({ invitado }) => {
    const { _id, nombre, apellido, dni } = invitado;


    //eliminar cliente
  const eliminarInvitado = idInvitado => {
    Swal.fire({
      title: "Estas seguro que deseas eliminar?",
      text: "No podrás revertir esta acción",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        clienteAxios.delete(`/invitados/${idInvitado}`).then(res => {
          Swal.fire("Eliminado!", res.data.mensaje, "success");
        });
      }
    });
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
        <View style={{borderStyle:'solid', borderWidth:5, borderColor:'green', flex:1}}>
            <View>
                <Text>{nombre} {apellido}</Text>
                <Text>{dni}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => editarPresente(_id)}>
                    <Text style={{ backgroundColor:  invitado.presente ? "green" : "red" }}>{Invitadoo.presente? "Presente" : "Ausente"}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => eliminarInvitado(_id)}>
                    <Text>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
export default Invitadoo;