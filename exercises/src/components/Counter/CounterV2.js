import React, { useState } from 'react'
import { Text } from 'react-native'
import Style from '../style'

import CounterDisplay from './CounterDisplay'
import CounterButton from './CounterButton'

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text style={Style.bigText}>Contador</Text>
            <CounterDisplay num={num} />
            <CounterButton inc={inc} dec={dec} />
        </>
    )
}