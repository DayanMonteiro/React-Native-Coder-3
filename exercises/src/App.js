import React from 'react';
import { View, StyleSheet } from 'react-native';

// import First from './components/First';
// import Comp, { Comp1, Comp2 } from './components/Multi';
// import MinMax from './components/MinMax';
import Aleatório from './components/Aleatório';

export default () => (
    <View style={style.App}>

        <Aleatório min={1} max={100} />
        <Aleatório min={1} max={100} />
        {/* <MinMax min={3} max={20} />
        <MinMax min={1} max={10} />
        <Comp />
        <Comp1 />
        <Comp2 />
        <First /> */}
    </View> 
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,

    }
})