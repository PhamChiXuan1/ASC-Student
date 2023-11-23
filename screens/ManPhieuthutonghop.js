import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { useState, useEffect } from "react";
const data=[
  {
    sophieu:'724002',
    thoiGian: '19/07/2023 14:50',
    nganHang: 'Ngân hàng Agribank',
    soTien: '8.370.000'
  },
  {
    sophieu:'724002',
    thoiGian: '19/07/2023 14:50',
    nganHang: 'Ngân hàng Agribank',
    soTien: '8.370.000'
  },
  {
    sophieu:'724002',
    thoiGian: '19/07/2023 14:50',
    nganHang: 'Ngân hàng Agribank',
    soTien: '8.370.000'
  },
  {
    sophieu:'724002',
    thoiGian: '19/07/2023 14:50',
    nganHang: 'Ngân hàng Agribank',
    soTien: '8.370.000'
  },
  {
    sophieu:'724002',
    thoiGian: '19/07/2023 14:50',
    nganHang: 'Ngân hàng Agribank',
    soTien: '8.370.000'
  },
  {
    sophieu:'724002',
    thoiGian: '19/07/2023 14:50',
    nganHang: 'Ngân hàng Agribank',
    soTien: '8.370.000'
  },
  {
    sophieu:'724002',
    thoiGian: '19/07/2023 14:50',
    nganHang: 'Ngân hàng Agribank',
    soTien: '8.370.000'
  },
  {
    sophieu:'724002',
    thoiGian: '19/07/2023 14:50',
    nganHang: 'Ngân hàng Agribank',
    soTien: '8.370.000'
  },
  {
    sophieu:'724002',
    thoiGian: '19/07/2023 14:50',
    nganHang: 'Ngân hàng Agribank',
    soTien: '8.370.000'
  },
  {
    sophieu:'724002',
    thoiGian: '19/07/2023 14:50',
    nganHang: 'Ngân hàng Agribank',
    soTien: '8.370.000'
  },
]

function ManPhieuThuTongHop({navigation, route}) {
  const user = route.params.user
  var [data1, setData] = useState([]);
  useEffect(() => {
    setData(route.params.user.phieuThu);
}, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhChinh', {user})}}>
        <Image
          style={styles.img}
          source={require("../assets/img/mhnn/Frame 8.png")}
        ></Image>
         </TouchableOpacity>
        <Text style={styles.textNN}>Phiếu thu tổng hợp</Text>
       
      </View>

      <View style={styles.content}>
        <FlatList
          data={data1}
          renderItem={({item})=>{
            return (
              <View style={{borderRadius:'10px', borderWidth:'1px', color: 'gray', margin: '10px', height: '150px',shadowOffset:{width:'-2px',height:'4px'},shadowColor:'gray'}}>
                <View style={{margin: '10px'}}>
                  <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Text>{item.sophieu}</Text>
                    <Text>{item.thoiGian}</Text>
                  </View>
                  <Text>{item.nganHang}</Text>
                </View>
                <View style={{borderBottomWidth: '1px', borderBottomColor:'gray', width:'320px', left:'10px'}}></View>
                <View style={{flexDirection:'row', justifyContent: 'space-between', margin: '10px'}}>
                  <Text>Số tiền:</Text>
                  <Text style={{color:'goldenrod'}}>{item.soTien}</Text>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={{color:'blue', textAlign: 'center', fontWeight: 'bold', fontSize: '16px', bottom:'-20px'}}>Xem hóa đơn điện tử</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        />
      </View>

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },

  header: {
    flex: 1,
    height: "100px",
 
    // backgroundColor: "rgba(62, 150, 231, 1)",
    backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
    flexDirection: "row",
  },

  img: {
    height: "46px",
    width: "40px",
    top: "15px",
  },

  textNN: {
    fontFamily: "Poppins",
    fontSize: "16px",
    color: "rgba(255, 255, 255, 1)",
    top: "33px",
    textAlign: "center",
  },
  content: {
    flex: 8,
  },

  imgContent: {
    height: "100px",
    width: "100px",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: "180px",
  },

  textContent: {
    fontFamily: "Poppins",
    fontSize: "16px",
    textAlign: "center",
    top: "200px",
  },
  footer: {
    flex: 2,
    height: "109px",
 
    flexDirection: "row",
  },

  imgfooter: {
    height: "19.44px",
    width: "25px",
    left: "20px",
    resizeMode: "contain",
    top:'50px'
  },

  textFooter: {
    fontFamily: "Poppins",
    fontSize: "12px",
    textAlign: "center",
    top:'60px'
  },

  trangChu: {
    flex: 1,
  },

  thongBao: {
    flex: 1,
  },

  maQR: {
    flex: 1,
  },

  imgQR: {
    height: "19.44px",
    width: "25px",
    left: "20px",
    resizeMode: "contain",
    position:'absolute',
    left:'14px'
  },
  bgMaQR: {
    height: "39px",
    width: "52px",
    backgroundColor: "rgba(62, 150, 231, 1)",
    borderRadius: "15px",
    justifyContent: "center",
    alignSelf: "center",
    top: '48px'
  },

  gopY: {
    flex: 1,
  },

  taiKhoan: {
    flex: 1,
  },
});
export default ManPhieuThuTongHop;
