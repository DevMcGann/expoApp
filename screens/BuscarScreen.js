import React, {useState, useEffect} from 'react';
import clienteAxios from '../Axios';
import {Text, View,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const BuscarScreen = () => {


    const [buscarDni, setBuscarDni] = useState("")
    const [invitado, setInvitado] = useState({})
    const [hayResultado, setHayResultado] = useState(false)
    const [invitados, setInvitados] = useState([])
    


    //query a la api
    const consultarAPI = async () =>{
        try {
            const invitadosConsulta = await clienteAxios.get('/invitados')  
            setInvitados(invitadosConsulta.data);    
        } catch (error) {
            alert("Hubo un error al Consultar la lista de Invitados de la API")
        }
        
    }
    useEffect( ()=>{
        consultarAPI();
    }, []);  //cuando invitados cambie, vuelve a ejecutar consultarAPI
    


    const handleInputDni = dni => {
        setBuscarDni(dni)
    }

    // cuando apreta Buscar
    const buscarInvitado = e => {
        try {
            e.preventDefault();
            setHayResultado(false)
            let filtrado = invitados.filter(function (uninvitado){
                return uninvitado.dni === buscarDni
            })
            if (filtrado[0]) {
            setInvitado(filtrado[0])
            //alert(JSON.stringify(filtrado[0].dni))
            //alert("indice 0 "+ JSON.stringify(filtrado[0]))
            setHayResultado(true)
            setBuscarDni("")
            }else{
                setHayResultado(false)
                alert("No se encontró ese Dni")
                setBuscarDni("")
                   
            }    
        } catch (error) {
            alert("error")
        }
        
    }

    //eliminar o marcar presente
    const eliminarInvitado = idInvitado => {
        try {
            clienteAxios.delete(`/invitados/${idInvitado}`)
            alert("invitado Eliminado")    
        } catch (error) {
            alert("Error al eliminar")
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
              alert("Invitado marcado como Presente!")    
        } catch (error) {
            alert("Error al marcar Invitado como Presente")
        }
        
    };





    return ( 
        <View style={{flex:1}}>
            <View>
                <Text style={{textAlign:'center', fontSize:30, fontWeight:'bold', marginBottom:25}}>Buscar por DNI</Text>
            </View>

            <View>
                <TextInput placeholder="Ingresar DNI" value={buscarDni} name="dni" onChangeText={(dni) => handleInputDni(dni)}
                style={{textAlign:'center', fontSize:20, color:'purple', marginBottom:20}}/>
                {buscarDni ?  <Button title="Buscar DNI" onPress={buscarInvitado}/> : null}
            </View>

           {hayResultado ? 
           <View style={{flex:1}}>
                <Text style={{textAlign:'center', fontSize:25, marginBottom:20}}>
                    {hayResultado==true ? invitado.nombre : "nombre"} - {hayResultado==true ? invitado.apellido : "apellido"}
                </Text>

                <Text style={{textAlign:'center', fontSize:25, marginBottom:20, color:'purple', fontWeight:'bold'}}>
                    {hayResultado ? invitado.dni : "Dni"}
                </Text>
               
               <View  style={{ backgroundColor: invitado.presente ? "green" : "red", flex:.3,  justifyContent:'space-between', padding:20 }} >
                    <Button  onPress={() => eliminarInvitado(invitado._id)} title="Eliminar Invitado" style={{marginBottom:15}}/>
                    <Button onPress={() => editarPresente(invitado._id)} title={invitado.presente ? "Presente" : "Ausente"} />
                </View>
            </View>
            : 
            null} 
           
            
        </View>
     );
}
 
export default BuscarScreen;