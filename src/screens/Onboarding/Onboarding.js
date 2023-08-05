import React from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";

import Button from "../../components/Button";
import Text from "../../components/Text/Text";

import Styles from "./Onboarding.styles";
import { TEXT_TYPE } from "../../components/Text/Text.constants";
import { ROUTE_NAMES } from "../../constants/routes";
import { BUTTON_TYPE } from "../../components/Button/Button.constants";

const Onboarding = ({ navigation }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../images/onboard-bg.jpeg")}
      style={Styles.wrapper}
    >
      <SafeAreaView>
        <View style={Styles.container}>
          <Text type={TEXT_TYPE.TITLE} style={Styles.title}>
            Bienvenido a Mind Fit
          </Text>
          <Text type={TEXT_TYPE.BODY} style={Styles.subtitle}>
            Desbloqueando recuerdos, fortaleciendo mentes.
          </Text>
          <Button
            type={BUTTON_TYPE.APP_BUTTON}
            onPress={() => navigation.navigate(ROUTE_NAMES.MAIN_TAB )}
          >
            comencemos
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Onboarding;
