import ManHinhNhacNho from "./screens/ManHinhNhacNho";
import ManHinhChinh from "./screens/ManHinhChinh";
import ManHinhLHLThi from "./screens/ManHinhLHLThi";
import ManHinhLichThi from "./screens/ManHinhLichThi";
import ManHinhLichHoc from "./screens/ManHinhLichHoc";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManDangnhap from "./screens/ManDangnhap";
import ManKhaosat from "./screens/ManKhaosat";
import ManThanhtich from "./screens/ManThanhtich";
import ManTaikhoan from "./screens/ManTaikhoan";
import ManHinhDoiMatKhau from "./screens/ManHinhDoiMatKhau";
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
        <Stack.Screen name="ManKhaosat" component={ManKhaosat}/>
        <Stack.Screen name="ManThanhtich" component={ManThanhtich}/>
        <Stack.Screen name="ManDangnhap" component={ManDangnhap}/>
        <Stack.Screen name="ManTaiKhoan" component={ManTaikhoan}/>
        <Stack.Screen name="ManHinhDoiMatKhau" component={ManHinhDoiMatKhau}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
