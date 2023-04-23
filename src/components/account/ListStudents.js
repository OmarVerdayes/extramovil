import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Toast from "react-native-toast-message";
import { map } from 'lodash';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function ListStudents() {
  const navigation=useNavigation();

  const [LStudents, setLStudents] = useState([]);


  const getStudents = /*async */() => {
    try {
      console.log("Listar estudiantes----------")
      return null;
    } catch (error) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Error al obtener los studiantes",
      });
    }
  };


  //getStudents();


  const deleteStudent = /*async*/ (studentId) => {
    try {
      //await db.app.collection('students').doc(studentId).delete();
      console.log('Eliminar estudiante ----------');
    } catch (error) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Error al eliminar",
      });
    }
  };

  return (
    <View>
      <Text>Lista de estudia</Text>
        <View>
          <Text onPress={navigation.navigate("updateS")} >{/*`${item.lastname} ${item.name}`*/"Omar Verdayes"}</Text>{/*al presionar el texto debe,os pasar el item */}
          {/* <Button containerStyle={styles.containerBtn} buttonStyle={styles.btn} onPress={deleteStudent(10)/*debemos madar el item.id al delete }/> */}

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerBtn:{
    width:"15%",
    marginTop:20,
    alignSelf: 'flex-end',
  },
  btn:{
    backgroundColor:"blue"
  },
})