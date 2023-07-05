import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Navigator from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Navigator />
    </NavigationContainer>
  );
}
