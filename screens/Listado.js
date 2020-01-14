import React,{useEffect,useState} from 'react';
import {Text, View, ScrollView } from 'react-native';
import clienteAxios from '../Axios';
import Invitado from '../componentes/Invitado';

const Listado = () => {

     //State
     const [invitados,guardarInvitados] = useState([]);

     

    useEffect(() => {
        let cancelado = false;

        //query a la api
        const consultarAPI = async () => {
            try {
                const invitadosConsulta = await clienteAxios.get('/invitados')
                if (!cancelado) {
                guardarInvitados(invitadosConsulta.data);
                }
            } catch (error) {
                if (!cancelado){
                alert("Hubo algún error consultando la API")
                }
            }

        };//consultarapi

        consultarAPI();

        return() => {
            cancelado=true;
        }
        
    }, [invitados]);  //cuando invitados cambie, vuelve a ejecutar consultarAPI



    return ( 
        <ScrollView style={{flex:1}}>
        <View style={{flex:1, padding:30}}>
            {invitados.map(invitado => ( 
                    <Invitado
                        key ={invitado._id}
                        invitado={invitado}
                    />
            ))}
        </View>
        </ScrollView>
     );
}
 
export default Listado;