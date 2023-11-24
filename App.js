import ManHinhNhacNho from "./screens/ManHinhNhacNho";
import ManHinhChinh from "./screens/ManHinhChinh";
import ManHinhLHLThi from "./screens/ManHinhLHLThi";
import ManHinhLichThi from "./screens/ManHinhLichThi";
import ManHinhLichHoc from "./screens/ManHinhLichHoc";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManDangnhap from "./screens/ManDangnhap";
import ManTaikhoan from "./screens/ManTaikhoan";
import ManHinhDoiMatKhau from "./screens/ManHinhDoiMatKhau";
import ManHinhGopY from "./screens/ManHinhGopYPhanHoi";
import MannHinhCongNo from "./screens/ManHinhCongNo";
import ManChuongtrinhkhung from "./screens/ManChuongtrinhkhung";
import ManXemDiem_ChiTiet from "./screens/ManXemdiem_chitiet";
import ManXemDiem_TongQuan from "./screens/ManXemDiem_TongQuan";
import ManXemDiem_TKHK from "./screens/ManXemDiem_TKHK";
import ManPhieuThuTongHop from "./screens/ManPhieuthutonghop";
import ManDiemRenLuyen from "./screens/ManDiemrenluyen";
import ManThongKeDiemDanh from "./screens/ManThongKeDiemDanh";
import ManTinTuc from "./screens/ManTinTuc";
import ManNoiDungTinTuc from "./screens/ManNoiDungTinTuc";
import ManThanhtich_BieuDo from "./screens/ManThanhTich_BieuDo";
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ManDangnhap"
        screenOptions={{ headerShown: false }}
      >
        {/* <Stack.Screen name='Home' component={TabButton}/> */}
      <Stack.Screen name="ManHinhLichThi" component={ManHinhLichThi} />
        <Stack.Screen name="ManHinhLichHoc" component={ManHinhLichHoc} />
        <Stack.Screen name="ManHinhLHLThi" component={ManHinhLHLThi} />
        <Stack.Screen name="ManHinhChinh" component={ManHinhChinh} />
        <Stack.Screen name="ManDangnhap" component={ManDangnhap}/>
        <Stack.Screen name="ManHinhDoiMatKhau" component={ManHinhDoiMatKhau}/>
        <Stack.Screen name="ManHinhGopY" component={ManHinhGopY}/>
        <Stack.Screen name="ManHinhCongNo" component={MannHinhCongNo}/>
        <Stack.Screen name="ManXemDiem_ChiTiet" component={ManXemDiem_ChiTiet}/>
        <Stack.Screen name="ManXemDiem_TongQuan" component={ManXemDiem_TongQuan}/>
        <Stack.Screen name="ManXemDiem_TKHK" component={ManXemDiem_TKHK}/>
        <Stack.Screen name="ManChuongTrinhKhung" component={ManChuongtrinhkhung}/>
        <Stack.Screen name="ManPhieuThuTongHop" component={ManPhieuThuTongHop}/>
        <Stack.Screen name="ManDiemRenLuyen" component={ManDiemRenLuyen}/>
        <Stack.Screen name="ManThongKeDiemDanh" component={ManThongKeDiemDanh}/>
        <Stack.Screen name="ManHinhNhacNho" component={ManHinhNhacNho}/>
        <Stack.Screen name="ManTaiKhoan" component={ManTaikhoan}/>
        <Stack.Screen name="ManTinTuc" component={ManTinTuc}/>
        <Stack.Screen name="ManNoiDungTinTuc" component={ManNoiDungTinTuc}/>
        <Stack.Screen name="ManThanhTich_BieuDo" component={ManThanhtich_BieuDo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
