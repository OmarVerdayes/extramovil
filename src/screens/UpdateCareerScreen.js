import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UpdateCareerForm from "../components/account/UpdateCareerForm"

export default function UpdateCareerScreen() {
  return (
    <View>
      <Text>UpdateCareerScreen</Text>
      <UpdateCareerForm/>{/*enviar carrera por props */}
    </View>
  )
}

const styles = StyleSheet.create({})