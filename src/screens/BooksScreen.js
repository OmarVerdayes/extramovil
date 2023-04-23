import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListBooks from '../components/account/ListBooks'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

export default function BooksScreen() {
  const navigation=useNavigation();

  return (
    <View>
      <Text>BooksScreen</Text>
      <Button title='Registart Libro' onPress={()=>navigation.navigate("registerBooks",{screen:"registerBooks"})}/>
      <ListBooks/>
    </View>
  )
}

const styles = StyleSheet.create({})