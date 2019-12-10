import React from 'react';

import {Text, View,Dimensions,ImageBackground,TouchableOpacity, StatusBar } from 'react-native';

const Main = ({navigation}) => {

    const anchoDispositivo = Math.round(Dimensions.get('window').width);
    <StatusBar hidden />

    
    return ( 
    
        <View style={{backgroundColor:'black', flex:1}}>
            <View >
                <ImageBackground
                resizeMode={'stretch'}
                style={{ flex: 1, height: 320, width: anchoDispositivo }}
                source={require('../fiesta.jpg')}
                />
            </View>
            
            <View>
                <TouchableOpacity  onPress={()=> navigation.navigate('NuevoScreen')} style={{marginBottom:220, backgroundColor:'green'}}>
                    <Text style={{textAlign:'center', color:'white', fontSize:35}}>Nuevo Invitado</Text>
                </TouchableOpacity>

                <TouchableOpacity  onPress={()=> navigation.navigate('BuscarScreen')} style={{marginBottom:1, backgroundColor:'green'}}>
                    <Text style={{textAlign:'center', color:'white', fontSize:35}}>Buscar DNI</Text>
                </TouchableOpacity>
            </View>

        </View>
     );
}
 
export default Main;