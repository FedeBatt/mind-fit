import React from "react";
import { View } from "react-native";
import Text from "../../components/Text/Text";
import Container from "../../components/Container/Container";
import { TEXT_TYPE } from "../../components/Text/Text.constants";

const FamilyMemo = () => {
  return (
    <Container>
      <View>
        <Text type={TEXT_TYPE.TITLE} >Ésta es tu familia</Text>
      </View>
    </Container>
  );
};

export default FamilyMemo;
