import { StyleSheet, Text, View } from 'react-native'
import React  from 'react'
import { Input,Button } from 'react-native-elements'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Toast  from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'


export default function RegisterStudenForm() {


    const navigation=useNavigation();
    const formik = useFormik({
      initialValues:{
        name:"",
        lastname:"",
        years:0,
        carrer:"",
        domicilio:""
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
           console.log("registrat estudiante------")
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
          <Input placeholder='Lasname' containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("lastname",text)} errorMessage={formik.errors.lastname}/>
          <Input placeholder='Edad' containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("years",text)} errorMessage={formik.errors.years}/>
          <Input placeholder='Carrer' containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("carrer",text)} errorMessage={formik.errors.carrer}/>
          <Input placeholder='Domicilio' containerStyle={styles.input} onChangeText={text=>formik.setFieldValue("domicilio",text)} errorMessage={formik.errors.domicilio}/>
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