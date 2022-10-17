import React from 'react';
import { Text } from 'react-native';
import Style from './style';

export default props => (
    <>
        <Text style={Style.bigText} >{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </>

)