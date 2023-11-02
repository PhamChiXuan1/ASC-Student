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
                    <Text style={{width:"230px"}}>Đang học</Text>
                    {/* <TextInput placeholder="" style={{width:"250px"}}></TextInput> */}
                </View>
                <View style={styles.oThongTin}>
                    <Text style={styles.text}>Giới tính: </Text>
                    <TextInput placeholder="" style={{width:"250px"}}></TextInput>
                </View>
                <View style={styles.oThongTin}>
                    <Text>Ngày sinh: </Text>
                    <TextInput placeholder=""></TextInput>
                </View>
                <View style={styles.oThongTin}>
                    <Text>MSSV: </Text>
                    <TextInput placeholder=""></TextInput>
                </View>
                <View style={styles.oThongTin}>
                    <Text>Lớp: </Text>
                    <TextInput placeholder=""></TextInput>
                </View>
                <View style={styles.oThongTin}>
                    <Text>Bậc đào tạo: </Text>
                    <TextInput placeholder=""></TextInput>
                </View>
                <View style={styles.oThongTin}>
                    <Text>Khoa: </Text>
                    <TextInput placeholder=""></TextInput>
                </View>
                <View style={styles.oThongTin}>
                    <Text>Chuyên ngành: </Text>
                    <TextInput placeholder=""></TextInput>
                </View>
                <View style={styles.oThongTin}>
                    <Text>Địa chỉ: </Text>
                    <TextInput placeholder=""></TextInput>
                </View>
                <View style={styles.oThongTin}>
                    <Text>Số điện thoại: </Text>
                    <TextInput placeholder=""></TextInput>
                </View>
                <View style={styles.oThongTin}>
                    <Text>Nơi sinh: </Text>
                    <TextInput placeholder=""></TextInput>
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
  
        <View style={styles.footer}>
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
        </View>
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
        left: "15px",
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
  });
  export default ManTaikhoan;
  