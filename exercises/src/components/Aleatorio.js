import React from 'react';
import { Text } from 'react-native';
import Style from './style';

export default ({min, max}) => {
    const delta = max - min + 1
    const aleatorio = parseInt( Math.random() * delta ) + min

    return (
        <Text style={Style.bigText}>O valor aleatório é {aleatorio}</Text>
    )
}