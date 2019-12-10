import React,{useEffect,useState} from 'react';
import {Text, View } from 'react-native';
import clienteAxios from '../Axios';
import Invitado from '../componentes/Invitado';

const Listado = () => {

     //State
     const [invitados,guardarInvitados] = useState([]);

     //query a la api
     const consultarAPI = async () =>{
         const invitadosConsulta = await clienteAxios.get('/invitados')  
         guardarInvitados(invitadosConsulta.data);
     }
 
     useEffect( ()=>{
         consultarAPI();
     }, [invitados]);  //cuando invitados cambie, vuelve a ejecutar consultarAPI

     

    return ( 
        <View style={{flex:1}}>
            {invitados.map(invitado => ( 
                    <Invitado
                        key ={invitado._id}
                        invitado={invitado}
                    />
            ))}
        </View>
     );
}
 
export default Listado;