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
import ManHinhGopY from "./screens/ManHinhGopYPhanHoi";
import MannHinhCongNo from "./screens/ManHinhCongNo";
import ManChuongtrinhkhung from "./screens/ManChuongtrinhkhung";
import ManXemDiem from "./screens/ManXemdiem";
import TabButton from "./tabButton/TabButton";
import ManPhieuThuTongHop from "./screens/ManPhieuthutonghop";
import ManDiemRenLuyen from "./screens/ManDiemrenluyen";
import ManThongKeDiemDanh from "./screens/ManThongKeDiemDanh";
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName=""
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={TabButton}/>
      <Stack.Screen name="ManHinhLichThi" component={ManHinhLichThi} />
        <Stack.Screen name="ManHinhLichHoc" component={ManHinhLichHoc} />
        <Stack.Screen name="ManHinhLHLThi" component={ManHinhLHLThi} />
        <Stack.Screen name="ManHinhChinh" component={ManHinhChinh} />
        <Stack.Screen name="ManHinhNhacNho" component={ManHinhNhacNho} />
        <Stack.Screen name="ManKhaosat" component={ManKhaosat}/>
        <Stack.Screen name="ManThanhtich" component={ManThanhtich}/>
        <Stack.Screen name="ManDangnhap" component={ManDangnhap}/>
        {/* <Stack.Screen name="ManTaiKhoan" component={ManTaikhoan}/> */}
        <Stack.Screen name="ManHinhDoiMatKhau" component={ManHinhDoiMatKhau}/>
        <Stack.Screen name="ManHinhGopY" component={ManHinhGopY}/>
        <Stack.Screen name="ManHinhCongNo" component={MannHinhCongNo}/>
        <Stack.Screen name="ManXemDiem" component={ManXemDiem}/>
        <Stack.Screen name="ManChuongTrinhKhung" component={ManChuongtrinhkhung}/>
        <Stack.Screen name="ManPhieuThuTongHop" component={ManPhieuThuTongHop}/>
        <Stack.Screen name="ManDiemRenLuyen" component={ManDiemRenLuyen}/>
        <Stack.Screen name="ManThongKeDiemDanh" component={ManThongKeDiemDanh}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
