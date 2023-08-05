import { StyleSheet } from "react-native";
import theme from "../../theme";

const base = {
  height: theme.sizes[11],
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme.sizes[6],
  width: "100%",
};

export default StyleSheet.create({
  primary: {
    backgroundColor: theme.colors.primary[40],
    ...base,
  },
  secondary: {
    backgroundColor: theme.colors.secondary[40],
    ...base,
  },
  ghost: {
    borderWidth: 0.5,
    backgroundColor: "transparent",
    ...base,
  },
  link: {
    ...base,
  },
  appButton: {
    alignItems: "center",
    backgroundColor: theme.colors.primary[40],
    bottom: 0,
    borderRadius: theme.sizes[6],
    height: theme.sizes[11],
    justifyContent: "center",
    position: "absolute",
    width: "100%",
  },
});
