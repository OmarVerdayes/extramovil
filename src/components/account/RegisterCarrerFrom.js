import { StyleSheet, Text, View } from 'react-native'
import React  from 'react'
import { Input,Button } from 'react-native-elements'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Toast  from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'

export default function RegisterCarrerFrom() {
 

    const navigation=useNavigation();
    const formik = useFormik({
      initialValues:{
        name:"",
        acronim:""
      },
      validationSchema:yup.object({
        name:yup.string().required("Nombre obligatorio"),
        acronim:yup.string().required("Acronimo ")

      }),
      validateOnChange:false,
      onSubmit: /*async*/(formValue)=>{
        try {
           console.log("registrat carrera------")
          //await addDoc(collection(db,'students'),formValue);
          Toast.show({
            type:'success',
            position:'bottom',
            text1:"Exito!",
            text2:"Estudiante añadido correctmente"
        })
          //navigation.navigate("index");
        } catch (error) {
          //console.log(error);
          Toast.show({
            type:"error",
            position:"bottom",
            text1:"Error al registrar al estudiante"
          })                
        }
      }
    })
    return (
      <View style={styles.viewForm}>
        <Text></Text>
          <Input placeholder='Nombre' containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("name",text)} errorMessage={formik.errors.name}/>
          <Input placeholder='Acfronimo' containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("acronim",text)} errorMessage={formik.errors.lastname}/>
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