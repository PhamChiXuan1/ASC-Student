import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";

const data = [

]
// console.log(user.hk);
function ManXemDiem_TongQuan({navigation, route}) {
  const user = route.params.user;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhChinh', {user})}}>
        <Image
          style={styles.img}
          source={require("../assets/img/mhnn/Frame 8.png")}
        ></Image>
         </TouchableOpacity>
        <Text style={styles.textNN}>Kết quả học tập</Text>

      </View>

      <View style={styles.topContent}>
          <TouchableOpacity style={styles.oTopContent1}>
              <Text style={styles.txtTopContent}>Tổng quan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.oTopContent2} onPress={()=>{navigation.navigate('ManXemDiem_TKHK', {user})}}>
              <Text style={styles.txtTopContent}>Tổng kết học kì</Text>
          </TouchableOpacity>
              
          <TouchableOpacity style={styles.oTopContent3} onPress={()=>{navigation.navigate('ManXemDiem_ChiTiet', {user})}}>
              <Text style={styles.txtTopContent}>Chi tiết</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.nhapThongTin}>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>Sinh Viên Năm: </Text>
                  <Text style={styles.noiDungTrangThai}>{user.sinhVienNam}</Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>Niên Khóa: </Text>
                  <Text style={styles.noiDungTrangThai}>{user.nienKhoa}</Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>Thời Gian Đào Tạo: </Text>
                  <Text style={styles.noiDungTrangThai}>{user.tgDaoTao}</Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>GVCN: </Text>
                  <Text style={styles.noiDungTrangThai}></Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>Liên hệ GVCN: </Text>
                  <Text style={styles.noiDungTrangThai}></Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>CVHT: </Text>
                  <Text style={styles.noiDungTrangThai}></Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>Liên hệ CVHT: </Text>
                  <Text style={styles.noiDungTrangThai}></Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>TBC Tích Lũy(4): </Text>
                  <Text style={styles.noiDungTrangThai}>{user.tbTichLy4}</Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>TBC Tích Lũy(10): </Text>
                  <Text style={styles.noiDungTrangThai}>{user.tbTichLy10}</Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>TC nợ(Điểm F-tỉ lệ %): </Text>
                  <Text style={styles.noiDungTrangThai}>-%</Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>TC đã đăng kí: </Text>
                  <Text style={styles.noiDungTrangThai}>{user.tcDaDK}</Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>TC tích lũy: </Text>
                  <Text style={styles.noiDungTrangThai}>{user.tcTichLuy}</Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>TC phải tích lũy: </Text>
                  <Text style={styles.noiDungTrangThai}>{user.tcPLT}</Text>
              </View>
              <View style={styles.oThongTin}>
                  <Text style={styles.text}>TC nợ: </Text>
                  <Text style={styles.noiDungTrangThai}></Text>
              </View>
          </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "800px",
    width: "360px"
  },

  header: {
    flex: 1,
    height: "100px",
    width: "360px",
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
  topContent:{
      flexDirection: 'row',
      height: '30px',
      width: '360px'

  },
  oTopContent1:{
      backgroundColor: "rgba(62, 150, 231, 1)",
      borderColor: "rgba(255, 255, 255, 1)",
      borderWidth: '1px',
      width: '120px',
      justifyContent: 'center',
      borderBottomColor: 'white',
  borderBottomWidth: '3px',
  },
  oTopContent2:{
    backgroundColor: "rgba(62, 150, 231, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: '1px',
    width: '120px',
    justifyContent: 'center',
},
oTopContent3:{
  backgroundColor: "rgba(62, 150, 231, 1)",
  borderColor: "rgba(255, 255, 255, 1)",
  borderWidth: '1px',
  width: '120px',
  justifyContent: 'center',
},
  txtTopContent:{
      color: "rgba(255, 255, 255, 1)",
      textAlign: 'center',
  },
  imgHK:{
      height: "15px",
      width: "15px",
      resizeMode: 'contain',
  },
  content: {
    flex: 8,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  text:{
    width: "160px",
    // fontFamily: "Poppins"
  },
  nhapThongTin: {
    flex: 7,
    flexDirection: "column",
    height: "44px",
    width: "330px",
    // backgroundColor: "rgba(196, 196, 196, 0.3)",
    // borderWidth: "1px",
    // borderColor: "rgba(217, 217, 217, 1)",
    marginBottom: "20px",
   
    borderRadius: "2px",

},

oThongTin: {
    flexDirection: "row",
    borderTopWidth:"1px",
    borderColor: "rgba(217, 217, 217, 1)",
    borderRadius: "2px",
    height: "25px",
    width: "330px",
    marginTop: "10px",
    alignItems: "center",
  justifyContent: "center"
},
noiDungTrangThai:{
  width: '140px',
  color: "blue",
},

});
export default ManXemDiem_TongQuan;
