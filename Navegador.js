import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './screens/Main';
import BuscarScreen from './screens/BuscarScreen';
import Listado from './screens/Listado';
import NuevoScreen2 from './screens/NuevoScreen1';
//import Desarrollador from './screens/desarrollador';



const NavStack = createStackNavigator({
    Main: { 
        screen: Main,
    },
    NuevoScreen2: {
        screen:NuevoScreen2
    },
    BuscarScreen: {
        screen: BuscarScreen,  
    },
    Listado: {
        screen: Listado,  
    },

});

const Navegador = createAppContainer(NavStack);

export default Navegador;