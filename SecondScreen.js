import React, { useLayoutEffect, useEffect } from "react";
import { StyleSheet, Text, View, BackHandler } from 'react-native';

export default function SecondScreen({ navigation, route }) {
    useEffect(() => {
        if (route.params?.message) {
            alert(route.params.message)
        }
        BackHandler.addEventListener('hardwareBackPress', close);
        return() => {
            BackHandler.removeEventListener('hardwareBackPress', close);
        }
    }, [])

    function close() {
        navigation.goBack(null);
        return true;
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#5DA7AE'
            },
        })
    }, [])
    
    return (
        <View style={styles.container}>
            <Text>Second Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});

