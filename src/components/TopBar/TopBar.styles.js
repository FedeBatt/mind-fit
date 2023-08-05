import { StyleSheet } from "react-native";
import theme from "../../theme";

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginLeft: theme.sizes[8],
  },
  text:(canGoBack) => ( {
    marginLeft: canGoBack ? theme.sizes[8] : 0,
    textTransform: 'capitalize'
  })
});
