import React from "react";
import { TouchableOpacity, View } from "react-native";

import Styles from "./Card.styles";
import Text from "../../../../components/Text/Text";
import { TEXT_TYPE } from "../../../../components/Text/Text.constants";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../../constants/routes";

const Card = ({ data }) => {
  const { id, name, lastName, role, info } = data?.item;
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate(ROUTES.FAMILY_INFO, data.item)
  }

  return (
    <TouchableOpacity onPress={onNavigate}>
      <View style={Styles.container}>
        <View style={Styles.imgWrapper}></View>
        <View style={Styles.infoWrapper}>
          <Text type={TEXT_TYPE.BODY}>{`${name} ${lastName}`}</Text>
          <Text type={TEXT_TYPE.BODY}>{role}</Text>
          <Text type={TEXT_TYPE.BODY}>{info}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
