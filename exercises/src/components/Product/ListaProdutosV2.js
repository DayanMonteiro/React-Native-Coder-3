import React from 'react'
import { Text, FlatList } from 'react-native'
import Style from '../style'

import Produtos from './Produtos'

export default props => {
    const produtoRender = ({ item: p }) => {
        return <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
    }

    return (
        <>
            <Text style={Style.bigText}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={Produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}