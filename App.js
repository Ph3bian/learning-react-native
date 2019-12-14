import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DisplayName = ({ name }) => {
    return (
        <View style={styles.container}>
            <Text>Hello {name}</Text>
        </View>
    )
}
export default function App() {
    return (
        <View style={styles.container}>
            <DisplayName name='Ph3bian' />
            <DisplayName name='Jesus' />
            <DisplayName name='Samantha' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
