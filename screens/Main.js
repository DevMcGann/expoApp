import React from 'react';

import {Text, View,Dimensions,ImageBackground,TouchableOpacity, StatusBar } from 'react-native';

const Main = ({navigation}) => {

    const anchoDispositivo = Math.round(Dimensions.get('window').width);
    <StatusBar hidden />

    
    return ( 
    
        <View style={{flex:1,backgroundColor:"black"}}>
            <View>
                <ImageBackground
                resizeMode={'stretch'}
                style={{ height: 320, width: anchoDispositivo }}
                source={require('../fiesta.jpg')}
                />
            </View>
            
            <View style={{padding: 20}}>
                <TouchableOpacity  onPress={()=> navigation.navigate('NuevoScreen2')} style={{marginBottom:25, marginTop:25, backgroundColor:'green', borderRadius:50}}>
                    <Text style={{textAlign:'center', color:'white', fontSize:35}}>Nuevo Invitado</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={()=> navigation.navigate('BuscarScreen')} style={{ backgroundColor:'green', borderRadius:50}}>
                    <Text style={{textAlign:'center', color:'white', fontSize:35}}>Buscar DNI</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={()=> navigation.navigate('Listado')} style={{marginTop:25, backgroundColor:'green', borderRadius:50}}>
                    <Text style={{textAlign:'center', color:'white', fontSize:35}}>Ver Listado</Text>
                </TouchableOpacity>
            </View>
        </View>
       
     );
}
 
export default Main;