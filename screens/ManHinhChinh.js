import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  LogBox,
  Dimensions,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { AntDesign } from "@expo/vector-icons";
function ManHinhChinh({ navigation, route }) {
  const user = route.params.user;
  console.log(user);
  // console.log(data);

  var [color, setColor]=useState(1);

  const carouselData = [
    {
      id: "01",
      image: require("../assets/hinh1.jpg"),
      name: "Ứng dụng cho hệ thống Đại học - Cao đẳng",
      url: "https://ascvn.com.vn/huong-dan-su-dung-app-mobile.html",
    },
    {
      id: "02",
      image: require("../assets/hinh2.jpg"),
      name: "Tải ứng dụng school",
      url: "https://ascvn.com.vn/pmt-school.html",
    },
    {
      id: "03",
      image: require("../assets/hinh3.jpg"),
      name: "IIG VIỆT NAM",
      url: "https://online.iigvietnam.com/",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textH}>Xin chào, {user.name}</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhNhacNho', {user})}}>
          <Image
            style={styles.imgh}
            source={require("../assets/img/mhc/icons8-bell-48.png")}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.menuHeader}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => {
            navigation.navigate("ManHinhLHLThi", { user });
          }}
        >
          <View style={styles.circle}>
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
          onPress={() => {
            navigation.navigate("ManXemDiem_TongQuan", { user });
          }}
        >
          <View style={styles.circle}>
            <Image
              style={styles.imgCircle}
              source={require("../assets/img/mhc/XemDiem.png")}
            ></Image>
          </View>
          <Text style={styles.textHeader}>Xem điểm</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.content1}>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate("ManThanhtich", { user });
              navigation.navigate("ManThanhTich_BieuDo", {user});
            }}
          >
            <View style={styles.btnNN}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconThanhTich.png")}
              ></Image>
            </View>
            <Text style={styles.textContent}>Thành tích</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ManPhieuThuTongHop", { user });
            }}
          >
            <View style={styles.btnPT}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconPT.png")}
              ></Image>
            </View>
            <Text style={styles.textContent}>Phiếu thu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ManHinhCongNo", { user });
            }}
          >
            <View style={styles.btnCN}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconCN.png")}
              ></Image>
            </View>
            <Text style={styles.textContent}>Công nợ</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{navigation.navigate('ManTinTuc', {user})}}>
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ManChuongTrinhKhung", { user });
            }}
          >
            <View style={styles.btnCTK}>
              <Image
                style={styles.imgContent}
                source={require("../assets/img/mhc/iconCTK.png")}
              ></Image>
            </View>
            <Text style={styles.textBtnCTK}>Chương{"\n"}trình khung</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ManHinhDoiMatKhau", { user });
            }}
          >
            <View style={styles.btnDMK}>
              <Image
                style={styles.imgContent3}
                source={require("../assets/img/mhc/iconBLock.png")}
              ></Image>
            </View>
            <Text style={styles.textBtnDMK}>Đổi{"\n"}mật khẩu</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ManDiemRenLuyen", { user });
            }}
          >
            <View style={styles.btnDRL}>
              <Image
                style={styles.imgContent2}
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

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ManThongKeDiemDanh", { user });
            }}
          >
            <View style={styles.btnTKDD}>
              <Image
                style={styles.imgContent5}
                source={require("../assets/img/mhc/iconDiemDanh.png")}
              ></Image>
            </View>
            <Text
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                textAlign: "center",
                top: "10px",
                // right: "5px",
                left: "5px",
              }}
            >
              Thống kê{"\n"}điểm danh
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content4}>
          <FlatList
            data={carouselData}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    height: "200px",
                    // backgroundColor:'red',
                    borderRadius: "15px",
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    borderColor:'gray',
                    borderBottomWidth:'0.5px',
                    marginRight: "5px",
                    marginLeft: "20px",
                  }}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Image
                      source={item.image}
                      style={{
                        height: "120px",
                        width: "300px",
                        borderTopRightRadius: "15px",
                        borderTopLeftRadius: "15px",
                      }}
                    ></Image>
                    <Text>{"\n"}</Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        fontFamily: "Poppins",
                        marginLeft: "10px",
                        marginTop: "50px",
                      }}
                    >
                      {item.name}
                    </Text>
                  </a>
                </View>
              );
            }}
            horizontal={true}
            pagingEnabled={true}
            scrollEnabled={true}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.trangChu}>
          <TouchableOpacity
            onPress={() => 
              {navigation.navigate("ManHinhChinh", { user });
              setColor(1);}}

          >
            <AntDesign name="home" size={23} style={[styles.iFooter,color == 1 ? { color: "rgba(62, 150, 231, 1)" } : null]}></AntDesign>
            {/* <Image
              source={require("../assets/img/mhnn/icon trang chủ.png")}
              style={styles.imgfooter}
            ></Image> */}
            <Text style={[styles.textFooter,color == 1 ? { color: "rgba(62, 150, 231, 1)" } : null]}>Trang chủ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.thongBao}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ManHinhNhacNho", { user });
              setColor(1);}}
          >
            <AntDesign name="bells" size={23} style={styles.iFooter}></AntDesign>
            {/* <Image
              source={require("../assets/img/mhnn/icon chuông thông báo.png")}
              style={styles.imgfooter}
            ></Image> */}
            <Text style={[styles.textFooter]}>Nhắc nhở</Text>
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
              {navigation.navigate("ManHinhGopY", { user });
               setColor(1);
              }
            }}
          >
            <AntDesign name="message1" size={23} style={styles.iFooter}></AntDesign>
            {/* <Image
              source={require("../assets/img/mhnn/icon góp ý.png")}
              style={styles.imgfooter}
            ></Image> */}
            <Text style={[{ 
    fontFamily: "Poppins",
    fontSize: "12px",
    textAlign: "center",
    top:'71px',
    marginLeft:'-5px'
  },color == 3 ? { backgroundColor: "rgba(62, 150, 231, 1)" } : null]}>Góp ý</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.taiKhoan}>
          <TouchableOpacity
            onPress={() => {
              {navigation.navigate("ManTaiKhoan", { user });setColor(1);}
            }}
          >
            {/* <Image
              source={require("../assets/img/mhnn/user-alt.png")}
              style={styles.imgfooter}
            ></Image> */}
             <AntDesign name="user" size={23} style={styles.iFooter}></AntDesign>
            <Text style={[styles.textFooter,color == 4 ? { color: "rgba(62, 150, 231, 1)" } : null]}>Tài khoản</Text>
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
    // width: "360px",
    backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
    borderBottomStartRadius: "20px",
    borderBottomEndRadius: "16px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-around'
  },

  textH: {
    fontFamily: "Poppins",
    fontSize: "14px",
    marginLeft: "12px",
    marginTop: "5px",
    color: "white",
  },

  imgh: {
    height: "25px",
    width: "31px",
    resizeMode: "contain",
    marginTop: "5px",
    marginLeft: "140px",
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
    marginTop:'5px'
  },

  imgContent3: {
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
  imgContent2: {
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
    marginTop:'5px',
    marginLeft:'2px',
  },

  imgContent5: {
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
    marginTop:'5px',
    marginLeft:'1px',
  },
  content1: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "20px",
  },

  btnNN: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(255, 69, 69, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5px",
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
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "40px",
  },

  btnCTK: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(10, 222, 57, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
  },

  textBtnCTK: {
    fontFamily: "Poppins",
    fontSize: "14px",
    textAlign: "center",
    top: "10px",
    right: "5px",
    marginLeft: "2px",
  },
  btnDMK: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(254, 223, 58, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5px",
  },

  textBtnDMK: {
    fontFamily: "Poppins",
    fontSize: "14px",
    textAlign: "center",
    top: "10px",
    right: "5px",
    marginLeft: "5px",
  },

  btnDRL: {
    width: "40px",
    height: "39px",
    backgroundColor: "rgba(69, 99, 255, 1)",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
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
    marginTop: "40px",
  },
  imgContent1: {
    height: "180px",
    width: "250px",
    alignSelf: "center",
    alignItems: "center",
    bottom: "20px",
    resizeMode: "contain",
    left: "20px",
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

  textFooter: {
    fontFamily: "Poppins",
    fontSize: "12px",
    textAlign: "center",
    top: "71px",
  },

  
  iFooter: {
    left: "22px",
    top: "61px",
    height: "19px",
    width: "25px",
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
export default ManHinhChinh;
