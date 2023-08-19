import React from "react";
import { FlatList, View } from "react-native";
import Text from "../../components/Text/Text";
import Container from "../../components/Container/Container";
import { TEXT_TYPE } from "../../components/Text/Text.constants";
import Card from "./components/Card/Card";

const FamilyMemo = ({ navigation }) => {
  const DATA = [
    {
      id: 1,
      name: "Hernan",
      lastName: "Benitez",
      imageUrl: "",
      role: "Hijo",
      info: "Es el hijo mayor, trabaja de plomero y le gusta tocar la bateria.",
    },
    {
      id: 2,
      name: "Fernando",
      lastName: "Benitez",
      imageUrl: "",
      role: "Hijo",
      info: "Es el hijo mayor, trabaja de plomero y le gusta tocar la bateria.",
    },
    {
      id: 3,
      name: "Martina",
      lastName: "Benitez",
      imageUrl: "",
      role: "Hija",
      info: "Es la hija del medio, trabaja de contadora y le gusta tejer.",
    },
    {
      id: 4,
      name: "Juan",
      lastName: "Benitez",
      imageUrl: "",
      role: "Hijo",
      info: "Es el hijo mayor, trabaja de plomero y le gusta tocar la bateria.",
    },
    {
      id: 5,
      name: "Juan",
      lastName: "Benitez",
      imageUrl: "",
      role: "Hijo",
      info: "Es el hijo mayor, trabaja de plomero y le gusta tocar la bateria.",
    },
    {
      id: 6,
      name: "Juan",
      lastName: "Benitez",
      imageUrl: "",
      role: "Hijo",
      info: "Es el hijo mayor, trabaja de plomero y le gusta tocar la bateria.",
    },
  ];
  return (
    <Container>
      <Text type={TEXT_TYPE.TITLE}>Ésta es tu familia</Text>
      <View>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <Card data={item} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View
              style={{
                marginVertical: 8,
                height: 0.5,
                backgroundColor: "grey",
              }}
            />
          )}
        />
      </View>
    </Container>
  );
};

export default FamilyMemo;
