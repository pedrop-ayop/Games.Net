import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Categorias from './Rotasbuttomcat.js';
import Home from './src_pages/Home';
import Jogos from './Rotasbuttomjogos.js';
import Sobre from './src_pages/Sobre.js';

const Tab = createBottomTabNavigator();

export default function RotasTab(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Tab.Screen
        name="Categorias"
        component={Categorias}
        options = {{
          tabBarIcon:({color, size})=><MaterialCommunityIcons name="apps" color={color} size={size}/>}}
          />

        <Tab.Screen
        name="Home"
        component={Home}
        options = {{
          tabBarIcon:({color, size})=><MaterialCommunityIcons name="home" color={color} size={size}
        />}}/>

        <Tab.Screen
        name="Jogos"
        component={Jogos}
        options = {{
          tabBarIcon:({color, size})=><MaterialCommunityIcons name="gamepad" color={color} size={size}
        />}}/>

        <Tab.Screen
        name="Sobre Nós"
        component={Sobre}
        options = {{
          tabBarIcon:({color, size})=><MaterialCommunityIcons name="information" color={color} size={size}
        />}}/>
    </Tab.Navigator>
  );
}