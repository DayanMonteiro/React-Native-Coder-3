import React from 'react'
import { View, Button, StyleSheet } from 'react-native'


export default props => {
    return (
        <View style={style.Buttons}>
            <Button title="+" onPress={props.inc} />
            <Button title="-" onPress={props.dec} />
        </View>
    )
}

const style = StyleSheet.create({
    Buttons: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: 50
    }
})