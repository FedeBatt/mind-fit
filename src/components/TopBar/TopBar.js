import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Text from "../Text/Text";
import { TEXT_TYPE } from "../Text/Text.constants";
import { ROUTE_NAMES } from "../../constants/Routes";
import { Ionicons } from "@expo/vector-icons";
import Styles from "./TopBar.styles";
import theme from "../../theme";

const TopBar = ({ navigation, route }) => {
  const routeName = ROUTE_NAMES[route.name];
  return (
    <SafeAreaView>
      <View style={Styles.wrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            style={Styles.backButton}
            name="md-arrow-back"
            size={theme.sizes[6]}
            color={theme.colors.basic.black100}
          />
        </TouchableOpacity>
        <Text type={TEXT_TYPE.SUBTITLE}>{routeName}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TopBar;
