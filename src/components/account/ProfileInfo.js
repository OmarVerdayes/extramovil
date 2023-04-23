import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Avatar, text } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";

export default function ProfileInfo(props) {


  const { setTextLoading, setVisiblLoading } = props;
  
  const [photo, setPhoto] = useState("");
  const changePhoto = async() => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
    });
    console.log("Actualizar foto----------")
    //if (!result.canceled) uploadPhoto(result.uri);
  };
  const uploadPhoto = /*async*/ (uri) => {
    console.log("actualizar usuario----------");
    setTextLoading("Cargando foto");
    setVisiblLoading(true);
    
    //const response = await fetch(uri);
    //const blob = await response.blob();
    //const refStorage = ref(storage, `imgProfile/${uid}`);
  };

  const updatePhoto = /*async */(imgPath) => {
    setTextLoading("Actualizando foto");
    //const urlImg = await getDownloadURL(refImg);
    //setPhoto(urlImg);
    setVisiblLoading(false);
  };
  return (
    <View style={styles.viewPhoto}>
      <Avatar
        size="large"
        rounded={true}
        icon={{ type: "material", name: "person" }}
        containerStyle={styles.avatar}
        source={{ /*uri: photo */}/*poner la url de la foto */}
      >
        <Avatar.Accessory size={25} onPress={changePhoto} />
      </Avatar>
      <View>
        <Text style={styles.nameUser}>{"poner nombre de usuario" || "USUARIO"}</Text>
        <Text>{"imprimer imail de usuario"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPhoto: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#1bb0ce",
    borderRadius: 10,
    margin: 10,
  },
  avatar: {
    marginRight: 20,
    backgroundColor: "#0D5BD7",
  },
  nameUser: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
