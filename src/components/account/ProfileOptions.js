import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Icon, ListItem } from "react-native-elements";
import { map } from "lodash";
import Modal from "../common/Modal";

export default function ProfileOptions() {
  const [contained, setContained] = useState(null);

  const openClose = () => {
    setShowModal((prevState) => !prevState);
  };

  const selectComponent = (key) => {
    if (key === "displayName") {
      setContained(<Text>Componente para nombre</Text>);
    } else if (key === "password") {
      setContained(<Text>Componente para contraseña</Text>);
    }
    openClose();
  };
  const optionsMenu = getOptionsMenu(selectComponent);
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      {map(optionsMenu, (option, index) => (
        <ListItem key={index} onPress={option.onPress}>
          <Icon
            type={option.typeIcon}
            name={option.nameIconLeft}
            color={option.colorIcon}
          />
          <ListItem.Content>
            <ListItem.Title>{option.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type={option.typeIcon}
            name={option.nameIconRight}
            color={option.colorIcon}
          />
        </ListItem>
      ))}
      <Modal visible={showModal} close={openClose}>
        {contained}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});

function getOptionsMenu(selectComponent) {
  return [
    {
      title: "Cambiar nombre",
      typeIcon: "material-comunity",
      nameIconLeft: "account-circle",
      colorIcon: "#ccc",
      nameIconRight: "chevron-right",
      onPress: () => {
        selectComponent("displayName");
      },
    },
    {
      title: "Cambiar contraseña",
      typeIcon: "material-comunity",
      nameIconLeft: "lock-reset",
      colorIcon: "#ccc",
      nameIconRight: "chevron-right",
      onPress: () => {
        selectComponent("password");
      },
    },
  ];
}
