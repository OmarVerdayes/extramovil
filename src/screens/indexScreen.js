//rnfs
import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginScreen from './LoginScreen';
import Loading from '../components/common/Loading';


export default function IndexScreen(props) {
  //console.log(props);
  const {navigation}=props;
  const[session,setSession]=useState(null)
  //detecta cuando la variable indicada sufre un cambio
 /* useEffect(()=>{const auth=getAuth(); onAuthStateChanged(auth,(user)=>{ 
   setSession(user ? true:false);
  })},[])
  if(session===null){
    return <Loading visible={true} text={"Validando sesión"}/>
  }*/
  

  return session?(
    <View>
      <Text>indexScreen</Text>
      <Button title='Ir a lista de estudiantes' onPress={()=>navigation.navigate("students",{screen:"students"})}/>
      <Button title='Ir alista de libros' onPress={()=>navigation.navigate("books",{screen:"books"})}/>
      <Button title='Ir alista de carreras' onPress={()=>navigation.navigate("career",{screen:"career"})}/>
      <Button title='Ir la ubicacion' onPress={()=>navigation.navigate("lacation",{screen:"lacation"})}/>
      <Button title='Perfil' onPress={()=>navigation.navigate("profile")} />
    </View>
  ):<LoginScreen/>
}

const styles = StyleSheet.create({})
/*
return session? (
    <View>
      <Text>indexScreen</Text>
      <Button title='Ir a lista de estudiantes' onPress={()=>navigation.navigate("students",{screen:"students"})}/>
      <Button title='Ir alista de libros' onPress={()=>navigation.navigate("books",{screen:"books"})}/>
      <Button title='Ir alista de carreras' onPress={()=>navigation.navigate("career",{screen:"career"})}/>
      <Button title='Ir la ubicacion' onPress={()=>navigation.navigate("lacation",{screen:"lacation"})}/>
      <Button title='Perfil' onPress={()=>navigation.navigate("profile")} />
    </View>
  ):<LoginScreen/>
*/