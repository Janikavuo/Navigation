import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function HomeScreen({navigation}) {
    const [message, setMessage] = useState('Testing');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#5DA7AE'
            },
            headerRight: () => (

                <AntDesign
                style={styles.navButton}
                name="arrowright"
                size={24}
                onPress={() => navigation.navigate('Second', {message: message})} 
                />
            )
        })
    }, [message])

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <TextInput onChangeText={text => setMessage(text)} value={message} placeholder="Type message here"></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    navButton: {
        marginRight: 5,
        padding: 4,
    }
});