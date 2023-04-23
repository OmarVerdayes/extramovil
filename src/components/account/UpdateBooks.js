import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input,Button} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import * as yup from "yup";

export default function UpdateBooks({item}) {
 
    const navigation=useNavigation();
    const formik = useFormik({
      initialValues:{
        name:item.name,
        author:item.author,
        editorial:item.editorial,
        pages:item.pages,
        year:item.year
      },
      validationSchema:yup.object({
        name:yup.string().required("Nombre obligatorio"),
        author:yup.string().required("Autor obligatorio"),
        editorial:yup.string().required("Editorial obligatoria"),
        pages:yup.number().required("Numero de paginas obligatorio"),
        year:yup.number().required("Año de publicaion obligatorio")

      }),
      validateOnChange:false,
      onSubmit: /*async*/(formValue)=>{
        try {
          console.log("actualizar libro ----------")
       // await db.collection('books').doc(item.id).update(formValue);
          Toast.show({
            type:'success',
            position:'bottom',
            text1:"Exito!",
            text2:"Libro actualizado correctmente"
        })
          navigation.navigate("index");
        } catch (error) {
          Toast.show({
            type:"error",
            position:"bottom",
            text1:"Error al actualizar el libro"
          })                
        }
      }
    })
    return (
      <View style={styles.viewForm}>
        <Text></Text>
          <Input placeholder='Titulo' defaultValue={/*item.name*/"name"} containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("name",text)} errorMessage={formik.errors.name}/>
          <Input placeholder='Autor'  defaultValue={/*item.author*/"author"} containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("author",text)} errorMessage={formik.errors.author}/>
          <Input placeholder='Editorial'  defaultValue={/*item.editorial*/"editorial"} containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("editorial",text)} errorMessage={formik.errors.editorial}/>
          <Input placeholder='Paginas'  defaultValue={/*item.pages*/"5"} containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("pages",text)} errorMessage={formik.errors.pages}/>
          <Input placeholder='Año'  defaultValue={/*item.year*/"1990"} containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("year",text)} errorMessage={formik.errors.year}/>
          <Button title="Registrar" containerStyle={styles.containerBtn} buttonStyle={styles.btn} onPress={formik.handleSubmit} loading={formik.isSubmitting}/>
          <Button title="Cancelar" containerStyle={styles.containerBtn} buttonStyle={styles.btnC} onPress={navigation.navigate("index")}/>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    viewForm:{
      marginTop:30
    },
    input:{
      width:"100%",
      margginTop:20
    },
    icon:{
      color:"#C1C1C1"
    },
    containerBtn:{
      width:"95%",
      marginTop:20,
      alignSelf:"center"
  
    },
    btn:{
      backgroundColor:"blue"
    },
    btnC:{
        backgroundColor:"red"
      }
  })