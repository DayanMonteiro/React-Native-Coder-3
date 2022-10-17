import React from 'react'
import { Text } from 'react-native'
import Style from '../style'

export default props => {
    return (
        <>
            <Text style={Style.bigText}>{props.a}</Text>
            <Text style={Style.bigText}>{props.b}</Text>
        </>
    )
}