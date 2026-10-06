import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Jogos(crocs) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Jogos do Século!</Text>

      <FlatList
        data={jogos}
        renderItem={({ item }) => (
          <View style={estilo.jogos}>
            <TouchableOpacity
              onPress={() => {
                crocs.navigation.navigate(item.buttom);
              }}>
              <View style={estilo.txtjogos}></View>
              <Text style={estilo.txtjogos}> {item.nome}</Text>
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

const jogos = [
  {
    uid: 1,
    nome: 'Amor Doce',
    like: 4756,
    seguidores: 88923,
    buttom: 'Amordoce',
  },
  {
    uid: 2,
    nome: 'Doki Doki Literature Club',
    like: 7237,
    seguidores: 854945,
    buttom: 'Ddlc',
  },
  {
    uid: 3,
    nome: 'Omori',
    like: 96958,
    seguidores: 959858659,
    buttom: 'Omori',
  },
  {
    uid: 4,
    nome: 'OneShot',
    like: 457546785,
    seguidores: 2342367,
    buttom: 'Oneshot',
  },
];

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D395B',
  },
  jogos: {
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
  txtjogos: {
    fontSize: 20,
    color: '#ffffff',
  },
});
