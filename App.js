import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MainStack from "./src/navigation/MainStack";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <MainStack />
    </NavigationContainer>
  );
}
