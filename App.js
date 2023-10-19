import ManHinhNhacNho from "./screens/ManHinhNhacNho";
import ManHinhChinh from "./screens/ManHinhChinh";
import ManHinhLHLThi from "./screens/ManHinhLHLThi";
import ManHinhLichThi from "./screens/ManHinhLichThi";
import ManHinhLichHoc from "./screens/ManHinhLichHoc";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ManHinhChinh"
        screenOptions={{ headerShown: false }}
      >
      <Stack.Screen name="ManHinhLichThi" component={ManHinhLichThi} />
        <Stack.Screen name="ManHinhLichHoc" component={ManHinhLichHoc} />
        <Stack.Screen name="ManHinhLHLThi" component={ManHinhLHLThi} />
        <Stack.Screen name="ManHinhChinh" component={ManHinhChinh} />
        <Stack.Screen name="ManHinhNhacNho" component={ManHinhNhacNho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
