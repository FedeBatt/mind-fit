import { StyleSheet } from "react-native";
import theme from "../../theme";

export default StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "500",
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
  },
  caption: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: 'uppercase',
    color: theme.colors.basic.white100
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
  },
});
