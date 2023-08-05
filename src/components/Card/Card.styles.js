import { StyleSheet } from "react-native";
import theme from "../../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.white99,
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgWrapper: {
    backgroundColor: "red",
    width: "32%",
    height: 100,
  },
  infoWrapper: {
    width: "65%",
  },
});
