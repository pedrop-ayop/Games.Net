import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';

export default function Ddlc() {

  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Doki Doki Literature Club!</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/jogos/ddlc1.png')}
              />
              <Text style={estilo.rotulo}>
                {' '}
                Arte Principal da versão paga do Jogo!{' '}
              </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/jogos/ddlc2.png')}
              />
              <Text style={estilo.rotulo}> Print de uma gameplay! </Text>
            </View>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/jogos/ddlc3.png')}
              />
              <Text style={estilo.rotulo}>
                {' '}
                Versão física do jogo para Switch!{' '}
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            O Doki Doki Literature Club! (DDLC), lançado em 2017 pela Team
            Salvato, é um aclamado jogo de romance visual que subverte o gênero
            ao se transformar em um perturbador terror psicológico. A trama
            começa de forma inocente com o protagonista participando de um clube
            escolar com Sayori, Natsuki, Yuri e a líder Monika, mas rapidamente
            evolui para uma experiência de horror que quebra a quarta parede. À
            medida que o enredo avança por eventos trágicos e falhas sistêmicas
            simuladas, o jogo exige interações metalinguísticas diretas com os
            arquivos do próprio computador para alcançar sua conclusão.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDCF1',
    
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
    color: '#C98EF2',
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
    backgroundColor: '#FFBEE1',
    borderRadius: 7,
    padding: 8,
  },
  textoResumo: {
    fontSize: 19,
  },
});
