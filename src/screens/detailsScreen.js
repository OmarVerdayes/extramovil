import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function detailsScreen(props) {
  const{navigation}=props;
  return (
    <View>
      <Text>detailsScreen</Text>
      <Button title='Ir a inicio' onPress={()=>navigation.navigate("index")}/>
    </View>
  )
}

const styles = StyleSheet.create({})