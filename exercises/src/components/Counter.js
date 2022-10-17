import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import Style from './style';

export default ({inicial = 0, passo = 1 }) => {
    const [numero, setNumero] = useState(inicial)

    const inc = () => {
        //prevNumber substitui o number do state 
        //garantindo sempre que estaremos com o state mais atual
        // por essa razão essa função é chamada de Previus Value ou Previus State
       setNumero((prevNumber) => prevNumber + passo)
    }

    const dec = () => {
        // seria o mesmo que setNumero(numero - passo)
        setNumero((prevNumber) => prevNumber - passo )
    }


    return (
        <>
            <Text style={Style.bigText} >{numero}</Text>
            <Button title="+" onPress={inc}  />
            <Button title="-" onPress={dec}  />
         
        </>
    )
}