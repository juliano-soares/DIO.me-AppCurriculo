import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

const Card = ({titulo, children}) => {
  return (
    <View style={style.card_container}>
      <View style={style.card}>
        <View style={style.cerd_header}>
          <Text>{titulo}</Text>
        </View>
        <View style={style.card_content}>
          {children}
        </View>
      </View>
    </View>
  );
}

export default Card;