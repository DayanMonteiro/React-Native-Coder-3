import React from 'react';
import { Text } from 'react-native';
import Style from './style';

export default (props) => (
        <Text style={Style.bigText} >
            O Valor {props.max } é maior que o valor {props.min}!
        </Text>
    )
