import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Mega from './components/mega/Mega';


// import FlexboxV4 from './components/layout/FlexboxV4';
// import FlexboxV3 from './components/layout/FlexboxV3';
// import FlexboxV2 from './components/layout/FlexboxV2';
// import FlexboxV1 from './components/layout/FlexboxV1';
// import Quadrado from './components/layout/Quadrado';
// import InsertName from './components/InsertName';
//import ListaProdutosV2 from './components/Product/ListaProdutosV2';
// import ListaProdutos from './components/Product/ListaProdutos';
//import LoggedInUser from './components/LoggedInUser';
// import Family from './components/Relationship/Family';
// import Member from './components/Relationship/Member';
//import ParImpar from './components/ParImpar';
//import Differentiate from './components/Differentiate';
//import CounterV2 from './components/Counter/CounterV2';
// import Dad from './components/indirectCommunication/Dad';
//import Dad from './components/directCommunication/Dad';
//import Counter from './components/Counter';
//import Button from './components/Button';
// import Frag from './components/Frag';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import Comp, { Comp1, Comp2 } from './components/Multi';
// import First from './components/First';


export default () => (
    <SafeAreaView style={style.App}>

    <Mega qtdeNumeros={7} />
  {/*
    <FlexboxV4 />
    <FlexboxV3 />
    <FlexboxV2 />
    <FlexboxV1 />
    <Quadrado />
    <InsertName />
    <ListaProdutosV2 />
    <ListaProdutos />
    <LoggedInUser usuario={ {nome: "Dayan", email: "dayan@gmail.com"}} />
        <Family>
            <Member nome="Gabriel" sobrenome="Viana" />
            <Member nome="Laryssa" sobrenome="Viana" />
        </Family>
        <Family>
            <Member nome="Dayan" sobrenome="Monteiro" />
            <Member nome="Danilo" sobrenome="Monteiro" />
        </Family>
      
        <ParImpar num={5} />

        <Differentiate />

        <CounterV2 />
        <Dad />

        <Counter inicial={10} passo={10} />

        <Counter />

        <Button />    

        <Frag principal="Cadastro de Prodto" secundario="Tela de Cadastro" />

        <Aleatorio min={1} max={100} /> 

        <MinMax min={3} max={20} />
        <MinMax min={1} max={10} />

        <Comp />
        <Comp1 />
        <Comp2 />
        <First /> 
        */}
    </SafeAreaView> 
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})