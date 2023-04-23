import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CareerScreen() {
    return (
        <View>
            <Text>CareerScreen</Text>
            <Button title="Registrar" containerStyle={styles.containerBtn} buttonStyle={styles.btn} onPress={navigation.navigate("registerCareer")} />
        </View>
    )
}

const styles = StyleSheet.create({})