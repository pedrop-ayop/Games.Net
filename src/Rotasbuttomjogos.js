import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Amordoce from './src_jogos/Amordoce';
import Ddlc from './src_jogos/Ddlc';
import Omori from './src_jogos/Omori';
import Oneshot from './src_jogos/Oneshot';
import Jogos from './src_pages/Jogos';

const Stack = createStackNavigator();


export default function Rotasbuttomjogos(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Jogos" component={Jogos} options={{headerShown:false}}/>
      <Stack.Screen name="Amordoce" component={Amordoce} options ={{title:"Amor Doce"}}/>
      <Stack.Screen name="Ddlc" component={Ddlc} options ={{title:"Doki Doki Literature Club"}}/>
      <Stack.Screen name="Omori" component={Omori} options ={{title:"Omori"}}/>
      <Stack.Screen name="Oneshot" component={Oneshot} options ={{title:"OneShot"}}/>
    </Stack.Navigator>
  );
}