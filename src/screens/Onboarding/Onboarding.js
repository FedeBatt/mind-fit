import React from "react";
import { SafeAreaView, View } from "react-native";

import Button from "../../components/Button/";
import Text from "../../components/Text/Text";

import Styles from "./Onboarding.styles";
import { TEXT_TYPE } from "../../components/Text/Text.constants";

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.wrapper}>
      <View style={Styles.container}>
        <Text type={TEXT_TYPE.TITLE}>Bienvenido a Mind Fit</Text>
        <Text type={TEXT_TYPE.BODY} style={{textAlign: 'center', marginBottom: 10}}>
          Desbloqueando recuerdos, fortaleciendo mentes.
        </Text>
        <Button
          onPress={() => navigation.navigate("Index", { screen: "Main" })}
        >
          Empecemos
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
