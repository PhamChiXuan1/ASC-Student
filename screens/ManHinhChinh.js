import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

function ManHinhChinh({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.menuHeader}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
       onPress={()=>navigation.navigate('ManHinhLHLThi')} >
          <View style={styles.circle1}>
            <Image
              style={styles.imgCircle}
              source={require("../assets/img/mhc/icon lịch.png")}
            ></Image>
          </View>

          <Text style={styles.textHeader}>Xem lịch</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <View style={styles.circle}>
            <Image
              style={styles.imgCircle}
              source={require("../assets/img/mhc/XemDiem.png")}
            ></Image>
          </View>
          <Text style={styles.textHeader}> Xem điểm</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.content1}>
          <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhNhacNho')}}>
            <View style={styles.btnNN}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/bell.png")}
              ></Image>
            </View>
            <Text style={styles.textContent}>Nhắc nhở</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.btnPT}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconPT.png")}
              ></Image>
            </View>
            <Text style={styles.textContent}>Phiếu thu</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.btnCN}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconCN.png")}
              ></Image>
            </View>
            <Text style={styles.textContent}>Công nợ</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.btnTT}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/new.png")}
              ></Image>
            </View>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                textAlign: "center",
                top: "10px",
                right: "5px",
                left: "1px",
              }}
            >
              Tin tức
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content2}>
          <TouchableOpacity>
            <View style={styles.btnCTK}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconCTK.png")}
              ></Image>
            </View>
            <Text style={styles.textContent2}>Chương{"\n"}trình khung</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.btnDMK}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconBLock.png")}
              ></Image>
            </View>
            <Text style={styles.textContent2}>Đổi{"\n"}mật khẩu</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.btnDRL}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconDRL.png")}
              ></Image>
            </View>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                textAlign: "center",
                top: "10px",
                right: "5px",
                left: "3px",
              }}
            >
              Điểm rèn{"\n"}luyện
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.btnTKDD}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconDiemDanh.png")}
              ></Image>
            </View>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                textAlign: "center",
                top: "10px",
                right: "5px",
                left: "3px",
              }}
            >
              Thống kê{"\n"}điểm danh
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content3}>
          <TouchableOpacity>
            <View style={styles.btnKS}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconKS.png")}
              ></Image>
            </View>
            <Text style={styles.textContent3}>Khảo sát</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.btnQC}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconQC.png")}
              ></Image>
            </View>
            <Text style={styles.textContent3}>Quảng cáo</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.btnMD}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconMauDon.png")}
              ></Image>
            </View>
            <Text style={styles.textContent3}>Mẫu đơn</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.btnTTich}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconThanhTich.png")}
              ></Image>
            </View>
            <Text style={styles.textContent3}>Thành tích</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content4}>
          <Image style={styles.imgContent1} source={require('../assets/img/mhc/hinhanhMHC.png')}></Image> </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.trangChu}>
          <TouchableOpacity>
            <Image
              source={require("../assets/img/mhnn/icon trang chủ.png")}
              style={styles.imgfooter}
            ></Image>
            <Text style={styles.textFooter}>Trang chủ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.thongBao}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ManHinhNhacNho");
            }}
          >
            <Image
              source={require("../assets/img/mhnn/icon chuông thông báo.png")}
              style={styles.imgfooter}
            ></Image>
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
          <TouchableOpacity>
            <Image
              source={require("../assets/img/mhnn/icon góp ý.png")}
              style={styles.imgfooter}
            ></Image>
            <Text style={styles.textFooter}>Góp ý</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.taiKhoan}>
          <TouchableOpacity>
            <Image
              source={require("../assets/img/mhnn/user-alt.png")}
              style={styles.imgfooter}
            ></Image>
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
    height:'800px',
    width:'360px',
  },

  header: {
    flex: 1,
    height: "100px",
    width: "360px",
    backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
    borderBottomStartRadius: "20px",
    borderBottomEndRadius: "20px",
  },

  menuHeader: {
    flex: 1,
    height: "82px",
    width: "345px",
    borderRadius: "20px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    bottom: "10px",

    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  circle: {
    height: "41px",
    width: "40px",
    backgroundColor: "rgba(208, 244, 255, 1)",
    borderRadius: "25px",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  circle1: {
    height: "41px",
    width: "40px",
    backgroundColor: "rgba(208, 244, 255, 1)",
    borderRadius: "25px",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    right:'5px'
  },

  line: {
    width: "0px",
    height: "60px",
    borderWidth: "0.5px",
    borderColor: "rgba(229, 222, 222, 1)",
    left: "5px",
  },

  imgCircle: {
    width: "25px",
    height: "19.44px",
    resizeMode: "contain",
  },

  textHeader: {
    fontFamily: "Poppins",
    fontSize: "14px",
    textAlign: "center",
    left: "10px",
  },

  content: {
    flex: 8,
  },

  textContent: {
    fontFamily: "Poppins",
    fontSize: "14px",
    textAlign: "center",
    top: "10px",
    right: "5px",
  },

  imgContent: {
    height: "27px",
    width: "25px",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    resizeMode: "contain",
  },

  content1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    top: "10px",
  },

  btnNN: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(255, 69, 69, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
  },

  btnPT: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(63, 207, 95, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
  },

  btnCN: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(255, 69, 114, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
  },

  btnTT: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(62, 150, 231, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
  },

  content2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  btnCTK: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(10, 222, 57, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    left: "5px",
  },

  btnDMK: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(254, 223, 58, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
  },

  btnDRL: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(69, 99, 255, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    left: "8px",
  },

  btnTKDD: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(255, 130, 60, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    left: "15px",
  },

  textContent2: {
    fontFamily: "Poppins",
    fontSize: "14px",
    textAlign: "center",
    top: "10px",
    right: "5px",
  },

  content3: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnKS: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(36, 0, 255, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    left: "3px",
    top: "10px",
  },

  btnQC: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(255, 69, 114, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    left: "12px",
    top: "10px",
  },

  btnMD: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(62, 150, 231, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    left: "10px",
    top: "10px",
  },

  btnTTich: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(254, 223, 58, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    left: "15px",
    top: "10px",
  },

  textContent3: {
    fontFamily: "Poppins",
    fontSize: "14px",
    textAlign: "center",
    top: "20px",
    right: "5px",
    left: "2px ",
  },

  content4: {
    flex: 1,
  },

  imgContent1:{
    height:'180px',
    width:'250px',
    alignSelf:'center',
    alignItems:'center',
    bottom:"20px",
    resizeMode:'contain',
    left:'20px',
  },

  footer: {
    flex: 2,
    height: "109px",
    width: "360px",
    flexDirection: "row",
  },

  imgfooter: {
    height: "19px",
    width: "25px",
    left: "20px",
    resizeMode: "contain",
    top: "50px",
  },

  textFooter: {
    fontFamily: "Poppins",
    fontSize: "12px",
    textAlign: "center",
    top: "60px",
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
    top: "48px",
  },

  gopY: {
    flex: 1,
  },

  taiKhoan: {
    flex: 1,
  },
});
export default ManHinhChinh;
