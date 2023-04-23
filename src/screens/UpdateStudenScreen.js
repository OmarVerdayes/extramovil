import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UpdateStudent from "../components/account/UpdateStudents"

export default function UpdateStudenScreen({/*{item}*/}) {//se recibe al estudiante por props
  return (
    <View>
      <Text>UpdateStudenScreen</Text>
      <UpdateStudent/>{/*enviamos al estudiante por props */}
    </View>
  )
}

const styles = StyleSheet.create({})