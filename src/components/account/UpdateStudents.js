import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input,Button} from 'react-native-elements'

import { useNavigation } from '@react-navigation/native';
import { useFormik } from 'formik';
import * as yup from "yup";

export default function UpdateStudents({/*{item}*/}) {

      const navigation=useNavigation();

      const formik = useFormik({
        initialValues:{
          name:/*item.content.name*/"",
          lastname:/*item.lastname*/"",
          years:/*item.years*/"",
          carrer:/*item.carrer*/"",
          domicilio:/*item.domicilio*/""
        },
        validationSchema:yup.object({
          name:yup.string().required("Nombre(s) obligatorio"),
          lastname:yup.string().required("Apellido(s) obligatorio"),
          years:yup.number().required("Edad obligatoria"),
          carrer:yup.string().required("Carrera obligatiria"),
          domicilio:yup.string().required("Domicilio obligatirio")
  
        }),
        validateOnChange:false,
        onSubmit: /*async*/(formValue)=>{
          try {
            console.log("actualizar estudiante ----------")
            //await db.collection('students').doc(item.id).update(formValue);
            Toast.show({
              type:'success',
              position:'bottom',
              text1:"Exito!",
              text2:"Estudiante actalizado correctmente"
          })
            navigation.navigate("index");
          } catch (error) {
            //console.log(error);
            Toast.show({
              type:"error",
              position:"bottom",
              text1:"Error al actualizar al estudiante"
            })                
          }
        }
      })
      return (
        <View style={styles.viewForm}>
          <Text></Text>
            <Input placeholder='Nombre' defaultValue={/*item.name*/"name"}  containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("name",text)} errorMessage={formik.errors.name}/>
            <Input placeholder='Lasname' defaultValue={/*item.lastname*/"lastname"}  containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("lastname",text)} errorMessage={formik.errors.lastname}/>
            <Input placeholder='Edad'defaultValue={/*item.years*/"edad"}  containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("years",text)} errorMessage={formik.errors.years}/>
            <Input placeholder='Carrer' defaultValue={/*item.carrer*/"carrer"}  containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("carrer",text)} errorMessage={formik.errors.carrer}/>
            <Input placeholder='Domicilio' defaultValue={/*item.domicilio*/"domicilio"}  containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("domicilio",text)} errorMessage={formik.errors.domicilio}/>
            <Button title="Registrar" containerStyle={styles.containerBtn} buttonStyle={styles.btn} onPress={formik.handleSubmit} loading={formik.isSubmitting}/>
            <Button title="Cancelar" containerStyle={styles.containerBtn} buttonStyle={styles.btnC} onPress={navigation.navigate("students")}/>
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