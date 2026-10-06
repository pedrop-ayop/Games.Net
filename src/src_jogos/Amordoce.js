import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Amordoce() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Amor Doce</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/jogos/amor1.png')}
              />
              <Text style={estilo.rotulo}> Sua decisão poderá influenciar a sua rota, portanto escolha com sabedoria </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/jogos/amor2.png')}
              />
              <Text style={estilo.rotulo}> Protagonistas e Antagonistas </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/jogos/amor3.png')}
              />
              <Text style={estilo.rotulo}> Quem vocÊ escolhe? </Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            Amor Doce (originalmente Amour Sucré) é um popular otome game e
            simulador de namoro virtual desenvolvido pela Beemoov. No jogo, você
            controla uma protagonista personalizada (conhecida carinhosamente
            pela comunidade como Docete) e molda a história por meio de escolhas
            que influenciam seus relacionamentos amorosos e amizades.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B97C8C',
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
    color: '#FAF6F3',
    fontWeight: 700,
    marginTop: 50,
    marginBottom: 30,
  },
  rotulo: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#FAF6F3'
  },
  resumo: {
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#E6B9C8',
    borderRadius: 7,
    padding: 8,
  },
  textoResumo: {
    fontSize: 19,
    color: '	#7c3f3f'
  },
});
