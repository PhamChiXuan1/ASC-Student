import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
function ManHinhNhacNho({navigation, route}) {
  const user = route.params.user;
  var [color, setColor]=useState(2);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {navigation.navigate("ManHinhChinh", {user})}}>
        <Image
          style={styles.img}
          source={require("../assets/img/mhnn/Frame 8.png")}
        ></Image>
         </TouchableOpacity>
        <Text style={styles.textNN}>Nhắc nhở</Text>
       
      </View>

      <View style={styles.content}>
        <Image
          style={styles.imgContent}
          source={require("../assets/img/mhnn/envelope-open.png")}
        ></Image>
        <Text style={styles.textContent}>Chưa có thông báo</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.trangChu}>
          <TouchableOpacity onPress={()=>navigation.navigate("ManHinhChinh", {user})}>
            {/* <Image
              source={require("../assets/img/mhnn/icon trang chủ.png")}
              style={styles.imgfooter}
            ></Image> */}
             <AntDesign name="home" size={23} style={styles.iFooter}></AntDesign>
            <Text style={styles.textFooter}>Trang chủ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.thongBao}>
          <TouchableOpacity >
          <AntDesign name="bells" size={23} style={[styles.iFooter,color == 2 ? { color: "rgba(62, 150, 231, 1)" } : null]}></AntDesign>
            <Text style={[styles.textFooter,color == 2 ? { color: "rgba(62, 150, 231, 1)" } : null]}>Nhắc nhở</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.maQR}>
          <TouchableOpacity>
            <View style={styles.bgMaQR}>
              <Image
                source={require("../assets/img/mhnn/icon qr.png")}
                style={styles.imgQR}
              ></Image>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.gopY}>
          <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhGopY', {user})}}>
            {/* <Image
              source={require("../assets/img/mhnn/icon góp ý.png")}
              style={styles.imgfooter}
            ></Image> */}
            <AntDesign name="message1" size={23} style={styles.iFooter}></AntDesign>
            <Text style={styles.textFooter1}>Góp ý</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.taiKhoan}>
          <TouchableOpacity onPress={()=>{navigation.navigate('ManTaiKhoan', {user})}}>
            {/* <Image
              source={require("../assets/img/mhnn/user-alt.png")}
              style={styles.imgfooter}
            ></Image> */}
            <AntDesign name="user" size={23} style={styles.iFooter}></AntDesign>
            <Text style={styles.textFooter}>Tài khoản</Text>
          </TouchableOpacity>
        </View>
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
    flex:1,
    height: "10px",
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
    height: "19px",
    width: "25px",
    left: "20px",
    resizeMode: "contain",
    top:'72px'
  },

  iFooter: {
    left: "22px",
    top:'72px',
    height: "19px",
    width: "25px",
  },


  textFooter: {
    fontFamily: "Poppins",
    fontSize: "12px",
    textAlign: "center",
    top:'82px'
  },

  textFooter1: {
    fontFamily: "Poppins",
    fontSize: "12px",
    textAlign: "center",
    top:'82px',
    marginLeft:'-5px'
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
    height: "19px",
    width: "25px",
    left: "20px",
    resizeMode: "contain",
    position:'absolute',
    left:'14px'
  },
  bgMaQR: {
    height: "39px",
    width: "52px",
    backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
    borderRadius: "15px",
    justifyContent: "center",
    alignSelf: "center",
    top: '70px'
  },

  gopY: {
    flex: 1,
  },

  taiKhoan: {
    flex: 1,
  },
});
export default ManHinhNhacNho;
