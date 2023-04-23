import { StyleSheet, Text, View } from 'react-native'
import React  from 'react'
import { Input,Button } from 'react-native-elements'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Toast  from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'

export default function RegisterBooksForm() {
  
    const navigation=useNavigation();
    const formik = useFormik({
      initialValues:{
        name:"",
        author:"",
        editorial:"",
        pages:0,
        year:0
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
           console.log("registrar libro----------")
          //await addDoc(db,collection('books'), formValue)
          Toast.show({
            type:'success',
            position:'bottom',
            text1:"Exito!",
            text2:"Libro añadido correctmente"
        })
          navigation.navigate("index");
        } catch (error) {
          Toast.show({
            type:"error",
            position:"bottom",
            text1:"Error al registrar el libro"
          })                
        }
      }
    })
    return (
      <View style={styles.viewForm}>
          <Input placeholder='Titulo' containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("name",text)} errorMessage={formik.errors.name}/>
          <Input placeholder='Autor' containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("author",text)} errorMessage={formik.errors.author}/>
          <Input placeholder='Editorial' containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("editorial",text)} errorMessage={formik.errors.editorial}/>
          <Input placeholder='Paginas' containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("pages",text)} errorMessage={formik.errors.pages}/>
          <Input placeholder='Año' containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("year",text)} errorMessage={formik.errors.year}/>
          <Button title="Registrar" containerStyle={styles.containerBtn} buttonStyle={styles.btn} onPress={formik.handleSubmit} loading={formik.isSubmitting}/>
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