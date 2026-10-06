import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Corrida from './src_categorias/Corrida.js'
import Indie from './src_categorias/Indie.js'
import Terror from './src_categorias/Terror.js'
import Visualnovel from './src_categorias/Visualnovel.js'
import Categorias from './src_pages/Categorias'

const Stack = createStackNavigator();

export default function RotasButtom(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Categorias" component={Categorias} options={{headerShown:false}}/>
      <Stack.Screen name="Corrida" component={Corrida} options ={{title:"Corrida"}}/>
      <Stack.Screen name="Indie" component={Indie} options ={{title:"Indie"}}/>
      <Stack.Screen name="Terror" component={Terror} options ={{title:"Terror"}}/>
      <Stack.Screen name="Visualnovel" component={Visualnovel} options ={{title:"Visualnovel"}}/>
    </Stack.Navigator>
  );
}

