import { View } from "react-native";
import Styles from "./Home.styles";
import Container from "../../components/Container/Container";
import Text from "../../components/Text/Text";
import { TEXT_TYPE } from "../../components/Text/Text.constants";

const Home = ({ navigation }) => {
  return (
    <Container>
      <View style={Styles.container}>
        <Text style={{ marginBottom: 24 }} type={TEXT_TYPE.TITLE}>
          Hola Victor !
        </Text>
        <Text type={TEXT_TYPE.SUBTITLE}>
          Momentos
        </Text>
        <Text type={TEXT_TYPE.SUBTITLE}>Juegos</Text>
      </View>
    </Container>
  );
};

export default Home;
