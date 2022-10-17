import React from 'react'
import { Text } from 'react-native'
import Style from '../style'

import Produtos from './Produtos'

export default props => {
    function obterLista() {
        return Produtos.map(p => {
            return (
                <Text key={p.id}>
                    {p.id}) {p.nome} preço R$ {p.preco}
                </Text>
            )
        })
    }

    return (
        <>
            <Text style={Style.bigText}>
                Lista de Produtos
            </Text>
            {obterLista()}
        </>
    )
}