import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './screens/Main';
import NuevoScreen from './screens/NuevoScreen';
import BuscarScreen from './screens/BuscarScreen';
//import Desarrollador from './screens/desarrollador';



const NavStack = createStackNavigator({
    Main: { 
        screen: Main,
    },
    NuevoScreen: { 
        screen: NuevoScreen,
    },
    BuscarScreen: {
        screen: BuscarScreen,
        
    }
});

const Navegador = createAppContainer(NavStack);

export default Navegador;