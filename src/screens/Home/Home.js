import { FlatList, TouchableOpacity, View } from "react-native";
import Styles from "./Home.styles";
import Container from "../../components/Container/Container";
import Text from "../../components/Text/Text";
import { TEXT_TYPE } from "../../components/Text/Text.constants";
import Button from "../../components/Button";
import { ROUTE_NAMES } from "../../constants/routes";
import { BUTTON_TYPE } from "../../components/Button/Button.constants";
import Card from "../../components/Card/Card";

const Home = ({ navigation }) => {
  const DATA = [
    {
      id: 1,
      name: "Hernan",
      lastName: "Benitez",
      imageUrl: "",
      role: "Hijo",
      info: "Es el hijo mayor, trabaja de plomero y le gusta tocar la bateria.",
    },
    {
      id: 2,
      name: "Fernando",
      lastName: "Benitez",
      imageUrl: "",
      role: "Hijo",
      info: "Es el hijo mayor, trabaja de plomero y le gusta tocar la bateria.",
    },
    {
      id: 3,
      name: "Martina",
      lastName: "Benitez",
      imageUrl: "",
      role: "Hija",
      info: "Es la hija del medio, trabaja de contadora y le gusta tejer.",
    },
    {
      id: 4,
      name: "Juan",
      lastName: "Benitez",
      imageUrl: "",
      role: "Hijo",
      info: "Es el hijo mayor, trabaja de plomero y le gusta tocar la bateria.",
    },
  ];

  return (
    <Container>
      <View style={Styles.container}>
        <Text style={{ marginBottom: 24 }} type={TEXT_TYPE.TITLE}>
          Hola Victor !
        </Text>
        <Text style={{ marginBottom: 16 }} type={TEXT_TYPE.SUBTITLE}>
          Mi familia
        </Text>
        <View>
          <FlatList
            data={DATA.slice(0, 3)}
            keyExtractor={(item) => item.id}
            horizontal={true}
            renderItem={(item) => <Card data={item} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Button
          type={BUTTON_TYPE.APP_BUTTON}
          onPress={() => navigation.navigate(ROUTE_NAMES.FAMILY_MEMO)}
        >
          arbol familiar
        </Button>
      </View>
    </Container>
  );
};

export default Home;
