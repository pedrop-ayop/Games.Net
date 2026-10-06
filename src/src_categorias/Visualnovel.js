import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Visualnovel() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Visualnovel </Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/categorias/visualnovel.jpg')}
              />
              <Text style={estilo.rotulo}> Jogos de Visualnovel chamado Danga rompa </Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
           Os jogos eletrônicos de visual novel (ou romances visuais) são focados na leitura de uma história interativa, combinando textos, ilustrações estáticas no estilo anime, trilha sonora e dublagem.  Exemplos: Doki Doki Literature Club!, Phoenix Wright: Ace Attorney, Steins;Gate e Slay the Princess.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f182af',
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
    fontSize: 20,
  },
  resumo: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    padding: 8,
  },
  textoResumo: {
    fontSize: 19,
  },
});
