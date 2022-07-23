import React  from 'react'
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import Providers from './src/navigation';
/*import HomeScreen from './src/screens/client/HomeScreen';*/
import HomeScreen from './src/screens/doctor/HomeScreen';
/*import HomeScreen from './Tabs/HomeScreen';*/


export default function App(){
   
    return( 
        <PaperProvider>
           <HomeScreen/>
        </PaperProvider>
        
    );
}




