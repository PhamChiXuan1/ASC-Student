import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
  } from "react-native";
  
  function ManTaikhoan({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.anhDaiDien}>
                <Text style={styles.textTTSV}>Thông tin sinh viên</Text>
                <Image
                    style={styles.imgTTSV}
                    source={require("../assets/img/mhtk/Vector.png")}
                ></Image>
            </View>
                     
        </View>
  
        <View style={styles.content}>
            <View style={styles.nhapThongTin}>
                <View style={styles.oThongTin}>
                    <Text style={styles.text}>Trạng thái: </Text>
                    <Text style={styles.noiDungTrangThai}>Đang học</Text>
                </View>
                <View style={styles.oThongTin}>
                    <Text style={styles.text}>Giới tính: </Text>
                    <Text style={styles.noiDungTrangThai}>Nam</Text>
                </View>
                <View style={styles.oThongTin}>
                    <Text style={styles.text}>Ngày sinh: </Text>
                    <Text style={styles.noiDungTrangThai}>06/11/2002</Text>
                </View>
                <View style={styles.oThongTin}>
                    <Text style={styles.text}>MSSV: </Text>
                    <Text style={styles.noiDungTrangThai}>20030131</Text>
                </View>
                <View style={styles.oThongTin}>
                    <Text style={styles.text}>Lớp: </Text>
                    <Text style={styles.noiDungTrangThai}>DHKTPM16B</Text>
                </View>
                <View style={styles.oThongTin}>
                    <Text style={styles.text}>Bậc đào tạo: </Text>
                    <Text style={styles.noiDungTrangThai}>Đại Học</Text>
                </View>
                <View style={styles.oThongTin}>
                    <Text style={styles.text}>Khoa: </Text>
                    <Text style={styles.noiDungTrangThai}>Công Nghệ Thông Tin</Text>
                </View>
                <View style={styles.oThongTin}>
                    <Text style={styles.text}>Chuyên ngành: </Text>
                    <Text style={styles.noiDungTrangThai}>Kỹ Thuật Phần Mềm</Text>
                </View>
                <View style={styles.oThongTin}>
                    <Text style={styles.text}>Địa chỉ: </Text>
                    <Text style={styles.noiDungTrangThai}>12 Nguyễn Văn Bảo, p4, Gò Vấp</Text>
                </View>
                <View style={styles.oThongTin}>
                    <Text style={styles.text}>Số điện thoại: </Text>
                    <Text style={styles.noiDungTrangThai}>0983300988</Text>
                </View>
                <View style={styles.oThongTin}>
                    <Text style={styles.text}>Nơi sinh: </Text>
                    <Text style={styles.noiDungTrangThai}>Bệnh viện đa khoa</Text>
                </View>
            </View>
            <TouchableOpacity>
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Xác nhận</Text>
                    </View>
                </View>    
            </TouchableOpacity>
        </View>
  
        {/* <View style={styles.footer}>
          <View style={styles.trangChu}>
            <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhChinh')}}>
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
            <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhGopY')}}>
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
        </View> */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      width: "360px",
      height: "800px"
    },
  
    header: {
      flex: 2,
      height: "100px",
      width: "360px",
      // backgroundColor: "rgba(62, 150, 231, 1)",
      backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
      flexDirection: "column",
    },
  
    text:{
      width: "100px",
      fontFamily: "Poppins"
    },
    content: {
      flex: 8,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
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
        left: "15px",
        borderRadius: "2px",
        
    },

    oThongTin: {
        flexDirection: "row",
        borderWidth: "1px",
        borderColor: "rgba(217, 217, 217, 1)",
        borderRadius: "2px",
        height: "25px",
        width: "330px",
        marginTop: "10px",
        alignItems: "center",
      justifyContent: "center"
    },

    anhDaiDien:{
        flexDirection: "column",
    },
  
    imgTTSV: {
      height: "60px",
      width: "60px",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      top: "30px",
    },
  
    textTTSV: {
      fontFamily: "Poppins",
      fontSize: "16px",
      textAlign: "center",
      top: "15px",
      color: "rgba(255, 255, 255, 1)",
    },
    footer: {
      flex: 2,
      height: "109px",
      width: "360px",
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
    btnContainer:{
        flex: 1,
      },
      btn:{
        height: "45px",
        width: "330px",
        borderRadius: "3px",
        justifyContent: "center",
        backgroundColor: "rgba(62, 150, 231, 1)",
        // left: "15px",
        bottom: "20px"
      },
      btnText:{
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: "20px",
        color: "rgba(255,255,255,1)",
        textAlign:"center",
        lineHeight: "23.44px",
      },
      noiDungTrangThai:{
        width: '230px',
      },
  });
  export default ManTaikhoan;
  