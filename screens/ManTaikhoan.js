import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { useState } from "react";
function ManTaikhoan({ navigation, route }) {
  const user = route.params.user;
  var [color, setColor]=useState(4);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.anhDaiDien}>
          <Text style={styles.textTTSV}>Thông tin sinh viên</Text>
          {/* <Image
            style={styles.imgTTSV}
            source={require("../assets/img/mhtk/Vector.png")}
          ></Image> */}

          <Avatar
            rounded
            containerStyle={{ height: 60, width: 60, alignSelf: "center", marginTop:"30px" , borderRadius:'50px'}}
            source={user.anh}
          ></Avatar>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.nhapThongTin}>
          <View style={styles.oThongTin}>
            <Text style={styles.text}>Họ và tên: </Text>
            <Text style={styles.noiDungTrangThai}>{user.name}</Text>
          </View>
          <View style={styles.oThongTin}>
            <Text style={styles.text}>Trạng thái: </Text>
            <Text style={styles.noiDungTrangThai}>{user.trangThai}</Text>
          </View>
          <View style={styles.oThongTin}>
            <Text style={styles.text}>Giới tính: </Text>
            <Text style={styles.noiDungTrangThai}>{user.gioiTinh}</Text>
          </View>
          <View style={styles.oThongTin}>
            <Text style={styles.text}>Ngày sinh: </Text>
            <Text style={styles.noiDungTrangThai}>{user.ngaySinh}</Text>
          </View>
          <View style={styles.oThongTin}>
            <Text style={styles.text}>MSSV: </Text>
            <Text style={styles.noiDungTrangThai}>{user.username}</Text>
          </View>
          <View style={styles.oThongTin}>
            <Text style={styles.text}>Lớp: </Text>
            <Text style={styles.noiDungTrangThai}>{user.lop}</Text>
          </View>
          <View style={styles.oThongTin}>
            <Text style={styles.text}>Bậc đào tạo: </Text>
            <Text style={styles.noiDungTrangThai}>{user.bacDaoTao} </Text>
          </View>
          <View style={styles.oThongTin}>
            <Text style={styles.text}>Khoa: </Text>
            <Text style={styles.noiDungTrangThai}>{user.khoa}</Text>
          </View>
          <View style={styles.oThongTin}>
            <Text style={styles.text}>Chuyên ngành: </Text>
            <Text style={styles.noiDungTrangThai}>{user.chuyenNganh}</Text>
          </View>
          <View style={styles.oThongTin}>
            <Text style={styles.text}>Địa chỉ: </Text>
            <Text style={styles.noiDungTrangThai}>{user.diaChi}</Text>
          </View>
          <View style={styles.oThongTin}>
            <Text style={styles.text}>Số điện thoại: </Text>
            <Text style={styles.noiDungTrangThai}>{user.sdt}</Text>
          </View>
          <View style={styles.oThongTin}>
            <Text style={styles.text}>Nơi sinh: </Text>
            <Text style={styles.noiDungTrangThai}>{user.noiSinh}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ManDangnhap");
          }}
        >
          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Đăng xuất</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.trangChu}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ManHinhChinh", { user });
            }}
          >
            {/* <Image
              source={require("../assets/img/mhnn/icon trang chủ.png")}
              style={styles.imgfooter}
            ></Image> */}
            <AntDesign name="home" size={23} style={styles.iFooter}></AntDesign>
            <Text style={styles.textFooter}>Trang chủ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.thongBao}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ManHinhNhacNho", { user });
            }}
          >
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
              navigation.navigate("ManHinhGopY", { user });
            }}
          >
            {/* <Image
              source={require("../assets/img/mhnn/icon góp ý.png")}
              style={styles.imgfooter}
            ></Image> */}
            <AntDesign name="message1" size={23} style={styles.iFooter}></AntDesign>
            <Text style={styles.textFooter1}>Góp ý</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.taiKhoan}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ManTaiKhoan", { user });
              setColor(4);
            }}
          >
            {/* <Image
              source={require("../assets/img/mhnn/user-alt.png")}
              style={styles.imgfooter}
            ></Image> */}
            <AntDesign name="user" size={23} style={[styles.iFooter,color == 4 ? { color: "rgba(62, 150, 231, 1)"} : null]}></AntDesign>
            <Text style={[styles.textFooter,color == 4 ? { color: "rgba(62, 150, 231, 1)"} : null]}>Tài khoản</Text>
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
    width: "360px",
    height: "800px",
  },

  header: {
    flex: 2,
    height: "130px",
    width: "360px",
    // backgroundColor: "rgba(62, 150, 231, 1)",
    backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
    flexDirection: "column",
  },

  text: {
    width: "100px",
    fontFamily: "Poppins",
  },
  content: {
    flex: 8,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    borderTopWidth: "1px",
    borderColor: "rgba(217, 217, 217, 1)",
    borderRadius: "2px",
    height: "25px",
    width: "330px",
    marginTop: "10px",
    alignItems: "center",
    justifyContent: "center",
  },

  anhDaiDien: {
    flexDirection: "column",
  },

  imgTTSV: {
    height: "60px",
    width: "60px",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: "30px",
    resizeMode: "contain",
  },

  textTTSV: {
    fontFamily: "Poppins",
    fontSize: "16px",
    textAlign: "center",
    top: "15px",
    color: "rgba(255, 255, 255, 1)",
  },

  btnContainer: {
    flex: 1,
  },
  btn: {
    height: "45px",
    width: "330px",
    borderRadius: "3px",
    justifyContent: "center",
    backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
    // left: "15px",
    marginTop: "10px",
  },
  btnText: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "20px",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    lineHeight: "23.44px",
  },
  noiDungTrangThai: {
    width: "230px",
    marginLeft: "50px",
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
    top: "61px",
  },
  
  iFooter: {
    left: "22px",
    top: "61px",
    height: "19px",
    width: "25px",
  },

  textFooter1: {
    fontFamily: "Poppins",
    fontSize: "12px",
    textAlign: "center",
    top: "71px",
    marginLeft: "-5px",
  },
  textFooter: {
    fontFamily: "Poppins",
    fontSize: "12px",
    textAlign: "center",
    top: "71px",
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
    top: "59px",
  },

  gopY: {
    flex: 1,
  },

  taiKhoan: {
    flex: 1,
  },
});
export default ManTaikhoan;
