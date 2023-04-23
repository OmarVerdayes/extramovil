import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UpdateBooks from '../components/account/UpdateBooks'

export default function UpdateBooksScreen({/*{item}*/}) {//se debe recibir al libro como props
  return (
    <View>
      <Text>UpdateBooksScreen</Text>
      <UpdateBooks/>{/*se debe embiar el libro por props */}
    </View>
  )
}

const styles = StyleSheet.create({})