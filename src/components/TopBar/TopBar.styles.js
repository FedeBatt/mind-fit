import { StyleSheet } from "react-native";
import theme from "../../theme";

export default StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.white99,
  },
  topWrapper: (top) => ({
    height: top,
  }),
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: theme.sizes[2],
  },
  text: ({ canGoBack }) => ({
    marginLeft: canGoBack() ? theme.sizes[1] : theme.sizes[8],
    textTransform: "capitalize",
  }),
  backButton: {
    marginLeft: theme.sizes[8],
  },
});
