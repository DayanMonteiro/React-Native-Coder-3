import React from 'react';
import { Button, View } from 'react-native';

export default props => {
    function executar() {
        console.warn("Executou #01!")
    }

    return (
        <View  >
            <Button 
                title='Executar #01'
                onPress={executar}
            />

             <Button
                title='Executar #02'
                onPress={function(){
                    console.warn("Executou #02!")
                }}
            />

            <Button
                title='Executar #03'
                onPress={() => console.warn("Executou #03!")}
            />
        </View>
    )
}
