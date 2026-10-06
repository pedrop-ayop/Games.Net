import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Oneshot() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Oneshot</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/jogos/oneshot1.png')}
              />
              <Text style={estilo.rotulo}>
                {' '}
                Arte Principal do protagonista Niko!{' '}
              </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/jogos/oneshot2.png')}
              />
              <Text style={estilo.rotulo}>
                {' '}
                Print da versão World Machine Edition!{' '}
              </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/jogos/oneshot3.png')}
              />
              <Text style={estilo.rotulo}>
                {' '}
                Foto de um dos protagonistas do jogo!{' '}
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            OneShot é um aclamado jogo indie de aventura e quebra-cabeças
            desenvolvido pela Future Cat LLC. O game ganhou enorme destaque na
            comunidade de jogadores por suas mecânicas únicas de metaficação,
            onde a jogabilidade ultrapassa os limites da janela do software e
            interage diretamente com o sistema operacional do computador do
            usuário.
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
