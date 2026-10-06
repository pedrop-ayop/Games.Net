import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Omori() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Omori</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/jogos/omori1.png')}
              />
              <Text style={estilo.rotulo}>
                {' '}
                Foto de toda a turma do Sunny! (Protagonistas){' '}
              </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/jogos/omori2.png')}
              />
              <Text style={estilo.rotulo}>
                {' '}
                Adaptação recentemente lançada para mangá!{' '}
              </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/jogos/omori3.png')}
              />
              <Text style={estilo.rotulo}>
                {' '}
                Foto de alguns do personagens no outro mundo!{' '}
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            OMORI é um aclamado jogo indie de RPG e terror psicológico surreal
            lançado em dezembro de 2020 pela desenvolvedora e artista OMOCAT. O
            jogo aborda temas profundos e sensíveis como depressão, ansiedade,
            isolamento social (hikikomori) e traumas do passado.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#996BFE',
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
    color: '#6A1BA3',
    fontWeight: 700,
    marginTop: 50,
    marginBottom: 30,
  },
  rotulo: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#9BCFD4',
  },
  resumo: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#9BCFD4',
    borderRadius: 7,
    padding: 8,
  },
  textoResumo: {
    fontSize: 19,
    color: '#6A1BA3',
  },
});
