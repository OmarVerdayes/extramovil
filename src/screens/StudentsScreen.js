import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListStudents from "../components/account/ListStudents"
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

export default function StudentsScreen() {
  const navigation=useNavigation();

  return (
    <View>
      <Text>Studentg</Text>
       <Button title="Registrar" containerStyle={styles.containerBtn} buttonStyle={styles.btn} onPress={navigation.navigate("registartEstudiante")}/>
        <ListStudents/> 
    </View>
  )
}

const styles = StyleSheet.create({
  containerBtn:{
    width:"40%",
    marginTop:20,
    alignSelf:"center"
  },
  btn:{
    backgroundColor:"blue"
  },
  btnN:{
    backgroundColor:"blue"
  },
})