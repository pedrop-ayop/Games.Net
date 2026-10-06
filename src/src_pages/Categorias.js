import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Categorias(crocs) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Categorias de Jogos!</Text>

      <FlatList
        data={categorias}
        renderItem={({ item }) => (
          <View style={estilo.categorias}>
            <TouchableOpacity
              onPress={() => {
                crocs.navigation.navigate(item.buttom);
              }}>
              <View style={estilo.txtcategorias}></View>
              <Text style={estilo.txtcategorias}> {item.nome}</Text>
            </TouchableOpacity>
            <View style={estilo.rede}>
              <Text style={estilo.curtidas}>
                <MaterialCommunityIcons
                  name="thumb-up"
                  size={20}
                  color={'#F00'}
                />
                {item.like} Curtidas
              </Text>
              <Text style={estilo.seguidores}>
                <MaterialCommunityIcons
                  name="account-heart"
                  size={20}
                  color={'blue'}
                />
                {item.seguidores} Seguidores
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const categorias = [
  {
    uid: 1,
    nome: 'Corrida',
    like: 3345,
    seguidores: 18245,
    buttom: 'Corrida'
  },
  {
    uid: 2,
    nome: 'Indie',
    like: 30465,
    seguidores: 883596,
    buttom: 'Indie'
  },
  {
    uid: 3,
    nome: 'Terror',
    like: 4756,
    seguidores: 88923,
    buttom: 'Terror'
  },
  {
    uid: 4,
    nome: 'Visualovel',
    like: 8375,
    seguidores: 2384209,
    buttom: 'Visualnovel'
  },
];

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D395B',
  },
  categorias: {
    backgroundColor: '#6991B9',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 15,
    padding: 5,
    
    alignContent: 'center',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 700,
    marginVertical: 30,
    marginTop: 100
  },
  rede: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtcategorias: {
    fontSize: 20,
    color: '#ffffff',
  },
});
