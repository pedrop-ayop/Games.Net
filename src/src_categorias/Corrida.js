import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Corrida() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Corrida</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/categorias/corrida.png')}
              />
              <Text style={estilo.rotulo}> Jogo de corrida da série Gran Turismo </Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            Corrida Jogos eletrônicos de corrida são jogos em que o jogador controla veículos para competir em pistas ou percursos.\
 O objetivo geralmente é chegar primeiro, superar adversários ou bater recordes de tempo. Jogos eletrônicos de corrida são jogos em que o jogador controla veículos para competir em pistas ou percursos.Exemplos: **Mario Kart**, **Need for Speed**, **Forza Horizon** e **Gran Turismo**.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0115e6',
  },
  img: {
    width: 330,
    height: 400,
    marginHorizontal: 25,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 700,
    marginTop: 50,
    marginBottom: 30,
  },
  rotulo: {
    marginTop: 20,
    textAlign: 'center',
     color: '#ffffff',
    fontSize: 20,
  },
  resumo: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#c00c05',
    borderRadius: 7,
    padding: 8,
  },
  textoResumo: {
    fontSize: 19,
  },
});
