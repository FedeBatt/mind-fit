import React from "react";
import { View } from "react-native";
import Text from "../../components/Text/Text";
import Container from "../../components/Container/Container";

const FamilyInfo = (data) => {
  const { name, lastName, role, info, image } = data.route.params;
  return (
    <Container>
      <View style={{ flex: 1 }}>
        <Text>{`${name} ${lastName}`}</Text>
        <Text>{role}</Text>
        <Text>{info}</Text>
      </View>
    </Container>
  );
};

export default FamilyInfo;
