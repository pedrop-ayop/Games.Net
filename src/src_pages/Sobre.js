import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

export default function Sobre() {
  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.titulo}> Sobre o 🎮 Games.Net</Text>

        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            O Games.Net é um aplicativo desenvolvido para reunir e
            apresentar jogos indie da comunidade, centralizando diferentes
            categorias e títulos em um só lugar.</Text>

             <Text style={estilo.textoResumo}> 
             
             </Text>

            <Text style={estilo.textoResumo}> 
            O projeto foi desenvolvido por
            Pedro Paulo e Nataly Silva, utilizando JavaScript e React Native. 🛠️
            Tecnologias Utilizamos recursos como: View • Text • StyleSheet •
            Image • ScrollView • ImageBackground • FlatList • TouchableOpacity •
            MaterialCommunityIcons • NavigationContainer •
            createBottomTabNavigator.
            </Text>

            <Text style={estilo.textoResumo}> 
             
             </Text>

            <Text style={estilo.textoResumo}> 
            Nosso Objetivo é Facilitar a descoberta de jogos
            independentes, oferecendo uma plataforma simples e organizada para
            explorar diferentes títulos e categorias. 🎮 Games.Net — jogos indie
            em um só lugar!
          </Text>

        </View>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D395B',
  },
  resumo: {
    marginTop: 40,
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    padding: 8,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 700,
    marginVertical: 30,
    marginTop: 100,
  },
  textoResumo: {
    fontSize: 19,
  },
});
