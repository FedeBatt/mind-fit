import { StyleSheet } from "react-native";
import theme from "../../theme";

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: theme.sizes[8],
  },
  backButton: { marginRight: 4 }
});
