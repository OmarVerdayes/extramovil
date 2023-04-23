import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Toast from "react-native-toast-message";
import { map } from 'lodash';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function ListCareer() {
    const [LBooks, setLBooks] = useState([]);
 

    const getBooks = /*async*/ () => {
      try {
       console.log("Listar libros----------")
  
       
        return students;
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al obtener los libros",
        });
      }
    };
  
  
    getBooks();
    //------------------------
  
    const deleteBooks = /*async*/ (bookId) => {
      try {
        //await db.collection('books').doc(bookId).delete();
        console.log('Eliminar carrera----------")');
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
          <View>
            <Text onPress={navigation.navigate("updateBooks")} >{/*`${item.author} : ${item.name}`*/"Arthur:Sherlok"}</Text>{/*al presionar el testo se manda item={item} */}
            <Button containerStyle={styles.containerBtn} buttonStyle={styles.btn} onPress={deleteBooks(10)/*al presionar se manda item.id */} />
          </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    containerBtn: {
      width: "15%",
      marginTop: 20,
      alignSelf: 'flex-end',
    },
    btn: {
      backgroundColor: "blue"
    },
  })