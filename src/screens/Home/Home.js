import { View } from "react-native";
import Styles from "./Home.styles";
import Container from "../../components/Container/Container";
import Text from "../../components/Text/Text";
import { TEXT_TYPE } from "../../components/Text/Text.constants";
import Button from "../../components/Button";
import { ROUTES } from "../../constants/routes";
import { BUTTON_TYPE } from "../../components/Button/Button.constants";

const Home = ({ navigation }) => {
  return (
    <Container>
      <View style={Styles.container}>
        <Text style={{ marginBottom: 24 }} type={TEXT_TYPE.TITLE}>
          Hola Victor !
        </Text>
        <Button
          type={BUTTON_TYPE.APP_BUTTON}
          onPress={() => navigation.navigate(ROUTES.FAMILY_MEMO)}
        >
          arbol familiar
        </Button>
      </View>
    </Container>
  );
};

export default Home;
