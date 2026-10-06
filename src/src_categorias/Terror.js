import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Terror() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Terror</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/categorias/terror.png')}
              />
              <Text style={estilo.rotulo}> Jogos de Terror chamado fnaf </Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
           Os jogos eletrônicos de terror são focados em gerar medo, tensão e adrenalina através da interatividade, onde o jogador precisa explorar ambientes obscuros, resolver mistérios e sobreviver a ameaças biológicas ou psicológicas.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101e37',
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
    color: '#ffc400',
    fontWeight: 700,
    marginTop: 50,
    marginBottom: 30,
  },
  rotulo: {
    marginTop: 20,
    textAlign: 'center',
     backgroundColor: '#ffffff',
    fontSize: 20,
  },
  resumo: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#447099',
    borderRadius: 7,
    padding: 8,
  },
  textoResumo: {
    fontSize: 19,
  },
});
