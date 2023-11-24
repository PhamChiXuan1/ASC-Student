import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

function ManHinhGopY({ navigation, route }) {
  const user = route.params.user;
  const [tenTruong, setTentruong] = useState("");
  const [hoTen, setHoten] = useState("");
  const [email, setEmail] = useState("");
  const [soDT, setSoDT] = useState("");
  const [noiDung, setNoiDung] = useState("");
  var [color, setColor]=useState(3);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ManHinhChinh', {user})}
        >
          <Image
            style={styles.img}
            source={require("../assets/img/mhnn/Frame 8.png")}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.textNN}>Góp ý phản hồi</Text>
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.textContent}>
            Mọi thông tin đóng góp ý kiến phản hồi vui lòng{"\n"}
          </Text>
          <Text style={styles.text2Content}>
            nhập vào các thông tin bên dưới
          </Text>
          <TouchableOpacity>
            <Text style={styles.text1Content}>Tìm hiều thêm</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: "65px" }}>
          <View style={styles.content1}>
            <Text style={styles.textcontent1}>Tên trường </Text>
            <Text style={styles.text1content1}>(*)</Text>
          </View>
          <View style={styles.textI}>
            <TextInput style={styles.textIn} ></TextInput>
          </View>

          <View style={styles.content1}>
            <Text style={styles.textcontent1}>Họ Tên </Text>
            <Text style={styles.text1content1}>(*)</Text>
          </View>
          <View style={styles.textI}>
            <TextInput style={styles.textIn} ></TextInput>
          </View>

          <View style={styles.content1}>
            <Text style={styles.textcontent1}>Số điện thoại </Text>
            <Text style={styles.text1content1}>(*)</Text>
          </View>
          <View style={styles.textI}>
            <TextInput style={styles.textIn} ></TextInput>
          </View>

          <View style={styles.content1}>
            <Text style={styles.textcontent1}>Email </Text>
            <Text style={styles.text1content1}>(*)</Text>
          </View>
          <View style={styles.textI}>
            <TextInput style={styles.textIn}></TextInput>
          </View>

          <View style={styles.content1}>
            <Text style={styles.textcontent1}>Nhập nội dung </Text>
            <Text style={styles.text1content1} >(*)</Text>
          </View>
          <View style={styles.textI}>
            <TextInput style={styles.textIn} ></TextInput>
          </View>
        </View>

        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.textBtn}>Xác nhận</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.trangChu}>
          <TouchableOpacity onPress={() => navigation.navigate("ManHinhChinh", {user})}>
            {/* <Image
              source={require("../assets/img/mhnn/icon trang chủ.png")}
              style={styles.imgfooter}
            ></Image> */}
            <AntDesign name="home" size={23} style={styles.iFooter}></AntDesign>
            <Text style={styles.textFooter}>Trang chủ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.thongBao}>
          <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhNhacNho', {user})}}>
            {/* <Image
              source={require("../assets/img/mhnn/icon chuông thông báo.png")}
              style={styles.imgfooter}
            ></Image> */}
            <AntDesign name="bells" size={23} style={styles.iFooter}></AntDesign>
            <Text style={styles.textFooter}>Nhắc nhở</Text>
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
          <TouchableOpacity
            onPress={() => {
              {navigation.navigate("ManHinhGopY", {user});
              setColor(3);
            }
            }}
          >
            {/* <Image
              source={require("../assets/img/mhnn/icon góp ý.png")}
              style={styles.imgfooter}
            ></Image> */}
            <AntDesign name="message1" size={23} style={[styles.iFooter,color == 3 ? { color: "rgba(62, 150, 231, 1)"} : null]}></AntDesign>
            <Text style={[styles.textFooter1,color == 3 ? { color: "rgba(62, 150, 231, 1)"} : null]}>Góp ý</Text>
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
    flex: 1,
    height: "100px",
 
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

  textContent: {
    fontFamily: "Poppins",
    fontSize: "16px",
    textAlign: "center",
    position: "absolute",
    marginTop: "15px",
    marginLeft: "20px",
  },

  text2Content: {
    fontFamily: "Poppins",
    fontSize: "16px",
    textAlign: "center",
    position: "absolute",
    marginTop: "33px",
    marginLeft: "20px",
  },

  text1Content: {
    fontFamily: "Poppins",
    fontSize: "16px",
    textAlign: "center",
    position: "absolute",
    color: "rgba(62, 150, 231, 1)",
    marginTop: "33px",
    marginLeft: "230px",
  },

  content1: {
    flexDirection: "row",
    marginLeft: "20px",
    marginBottom: "10px",
  },
  textcontent1: {
    fontFamily: "Poppins",
    fontSize: "16px",
    textAlign: "center",
  },

  text1content1: {
    fontFamily: "Poppins",
    fontSize: "16px",
    textAlign: "center",
    color: "rgba(255, 69, 69, 1)",
  },

  textI: {
    width: "327px",
    height: "48px",
    borderWidth: "1px",
    borderColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: "rgba(217, 217, 217, 0.45)",
    marginLeft: "20px",
    marginBottom: "10px",
  },

  textIn: {
    fontFamily: "Poppins",
    fontSize: "16px",
    width: "327px",
    height: "48px",
  },

  btn: {
    width: "327px",
    height: "45px",
    backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    marginTop: "12px",
  },

  textBtn: {
    fontSize: "16px",
    fontFamily: "Poppins",
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
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
    top: "72px",
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
    top: "82px",
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
    position: "absolute",
    left: "14px",
  },
  bgMaQR: {
    height: "39px",
    width: "52px",
    backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
    borderRadius: "15px",
    justifyContent: "center",
    alignSelf: "center",
    top: "70px",
  },

  gopY: {
    flex: 1,
  },

  taiKhoan: {
    flex: 1,
  },
});
export default ManHinhGopY;
