import React  from 'react'
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import Providers from './src/navigation';


export default function App(){
   
    return( 
        <PaperProvider>
           <Providers/>
        </PaperProvider>
        
    );
}




