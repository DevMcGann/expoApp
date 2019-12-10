import React from 'react';
import {NavigationEvents} from 'react-navigation';
import {Text, View, TouchableOpacity,TextInput } from 'react-native';

const NuevoScreen = () => {
    return (
        <View style={{flex:.5}}>

            <View style={{flex:1}}>
                <Text style={{textAlign:'center', marginTop:25, fontSize:18}}>Nuevo Invitado</Text>
            </View>

            <View style={{flex:2}}>
                <TextInput placeholder="Nombre" style={{textAlign:'center', marginBottom:25, fontSize:18}}/>
                <TextInput placeholder="Apellido" style={{textAlign:'center', marginBottom:25, fontSize:18}}/>
                <TextInput placeholder="DNI" style={{textAlign:'center', marginBottom:25, fontSize:18}}/>
            </View>

            <View style={{flex:.2}}>
                <TouchableOpacity>
                    <Text style={{textAlign:'center', marginBottom:25, fontSize:20, backgroundColor:'green', color:'white'}}>
                    Agregar Invitado</Text>
                </TouchableOpacity>
            </View>
   
        </View>
     );
}
 
export default NuevoScreen;