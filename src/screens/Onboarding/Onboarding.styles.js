import { StyleSheet } from "react-native";
import theme from "../../theme";

export default StyleSheet.create({
  wrapper: {
    backgroundColor: "#ffff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    width: "100%",
    height: "100%",
  },
  title: {
    marginBottom: 12,
    color: theme.colors.basic.white100
  },
  subtitle: {
    textAlign: "center",
    color: theme.colors.basic.white100
  },
});
