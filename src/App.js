import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/foto.png';
import Card from './components/Card';

const App = () => {
  function handleRedeSocial(redes_social) {
    switch (redes_social) {
      case 'linkedin':
        Alert.alert('Meu Linkedin','https://linkedin.com/in/julianoleonardosoares')  
      break;
      case 'github':
        Alert.alert('Meu Github','https://github.com/juliano-soares')  
      break;
      case 'facebook':
        Alert.alert('Meu Facebook','https://facebook.com/julianoleonardosoares')  
      break;
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}> 
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>JULIANO LEONARDO SOARES</Text>
          <Text style={style.funcao}>Desenvolvedor Mobile</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Formação Academica">
          <Text style={style.card_content_text}>
            Programador de jogos e Simuladores - SISASTROS
          </Text>
          <Text style={style.card_content_text}>
            Programador FullStack - META
          </Text>
        </Card>
        <Card titulo="Experiencias Profissionais">
          <Text style={style.card_content_text}>
            Programador de jogos e Simuladores - SISASTROS
          </Text>
          <Text style={style.card_content_text}>
            Programador FullStack - META
          </Text>
        </Card>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    alignItems: 'center',
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 125
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
})

export default App;