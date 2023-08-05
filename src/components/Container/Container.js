import React from "react";
import { View } from "react-native";
import Styles from "./Container.styles"

const Container = ({ children }) => {
  return <View style={Styles.wrapper}>{children}</View>;
};

export default Container;
