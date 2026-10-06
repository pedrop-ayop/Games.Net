import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Indie() {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Indie</Text>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                resizeMode={'stretch'}
                style={estilo.img}
                source={require('../../assets/categorias/indie.png')}
              />
              <Text style={estilo.rotulo}> Jogos de indie chamado cuphead </Text>
            </View>
          </ScrollView>
        </View>
        <View style={estilo.resumo}>
          <Text style={estilo.textoResumo}>
            Jogos eletrônicos indie são desenvolvidos por pequenos estúdios ou criadores independentes, geralmente sem o apoio de grandes empresas.\
 Eles costumam ter propostas criativas e estilos diferentes dos jogos tradicionais.\
 Exemplos: **Minecraft**, **Stardew Valley**, **Hollow Knight** e **Celeste**.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffcd',
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
    color: '#fffff',
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
    backgroundColor: '#ffff80',
    borderRadius: 7,
    padding: 8,
  },
  textoResumo: {
    fontSize: 19,
  },
});
