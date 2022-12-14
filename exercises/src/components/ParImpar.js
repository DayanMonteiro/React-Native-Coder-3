import React from 'react'
import { View, Text } from 'react-native'
import Style from './style'

export default ({ num = 0 }) => {

    return (
        <View>
            <Text style={Style.bigText}>O resultado é:</Text>
            {num % 2 === 0
                ? <Text style={Style.bigText}>Par</Text>
                : <Text style={Style.bigText}>Ímpar</Text>
            }
        </View>
    )
}