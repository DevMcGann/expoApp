import React, {useState, useEffect} from 'react';
import clienteAxios from '../Axios';
import {Text, View,Button} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const BuscarScreen = () => {


    const [buscarDni, setBuscarDni] = useState("")
    const [invitado, setInvitado] = useState({})
    const [invitados, setInvitados] = useState([])
    


    //query a la api
    const consultarAPI = async () =>{
        const invitadosConsulta = await clienteAxios.get('/invitados')  
        setInvitados(invitadosConsulta.data);
    }
    useEffect( ()=>{
        consultarAPI();
    }, [invitados]);  //cuando invitados cambie, vuelve a ejecutar consultarAPI
    


    

    // cuando apreta Buscar
    const buscarInvitado = e => {
        e.preventDefault();
        let filtrado = invitados.filter(function (uninvitado){
            return uninvitado.dni === buscarDni
        })
        setInvitado(filtrado[0]) 
    }

    //eliminar o marcar presente
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
      await clienteAxios.delete(`/invitados/${idInvitado}`);
      await clienteAxios.post("/nuevo_invitado", seleccionado);
      
    };





    return ( 
        <View>
            <View>
                <Text>Buscar por DNI</Text>
            </View>

            <View>
                <TextInput placeholder="Ingresar DNI" value={buscarDni} onPress={e => setBuscarDni(e.target.value)}/>
                <TouchableOpacity>
                    <Text>Buscar</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>{invitado.nombre ? invitado.nombre : "nombre"} - {invitado.apellido ? invitado.apellido : "apellido"}</Text>
                <Text>{invitado ? invitado.dni : "Dni"}</Text>
                <View  style={{ backgroundColor: invitado.presente ? "green" : "red" }} >
                    <Button  onClick={() => eliminarInvitado(invitado._id)}>
                        Eliminar Invitado
                    </Button>


                    <Button onClick={() => editarPresente(invitado._id)} >
                        {invitado.presente ? "Presente" : "Ausente"}
                    </Button>
                </View>
            </View>

        </View>
     );
}
 
export default BuscarScreen;