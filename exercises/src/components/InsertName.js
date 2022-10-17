import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import Style from './style'

export default props => {
    const [nome, setNome] = useState('Teste')
    return (
        <View>
             <Text style={Style.bigText} >{nome}</Text> 
            <TextInput
                placeholder="Digite seu Nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}