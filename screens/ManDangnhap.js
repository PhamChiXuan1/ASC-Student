import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
  } from "react-native";

  function ManDangnhap({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.vldntk}>
                    <Text>Vui lòng đăng nhập tài khoản</Text>    
                </View>
            </View>
            
            <View style={styles.menuHeader}>
                <View>
                    <Image
                        style={styles.imgCircle}
                        source={require("../assets/img/mhdn/iconTruong.png")}
                    ></Image>
                </View>
                <View>
                <Text style={styles.textHeader}>Trường Đại học Công {"\n"}nghiệp TP.HCM</Text>
                </View>
                <View>
                    <Image
                        style={styles.imgCircle}
                        source={require("../assets/img/mhdn/iconBaCham.png")}
                    ></Image>
                </View>
                
            </View>
            <View style={styles.input}>
                <TextInput 
                    placeholder="  Nhập tài khoản"
                    
                >

                </TextInput>
            </View>
            
            <View style={styles.input}>
                <TextInput 
                    placeholder="  Nhập mật khẩu"
                    
                >

                </TextInput>
            </View>

            <TouchableOpacity>
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Đăng nhập</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
            <TouchableOpacity>
                <View>
                    <Text style={{left: "15px", color: "rgba(62, 150, 231, 1)"}}>Quên mật khẩu</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View>
                    <Text style={{right: "15px", color: "rgba(62, 150, 231, 1)"}}>Góp ý phản hồi</Text>
                </View>
            </TouchableOpacity>
            </View>
            
            <View style={styles.footer}>
                <Text>Điều khoản sử dụng và chính sách</Text>
                <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: '15px'}}>ascvn.com.vn</Text>
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
        flex: 2.5,
        height: "100px",
        width: "360px",
        backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
    },
    
    vldntk:{
        flex: 1,
        height: "20px",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around", 
        borderTopStartRadius: "50px",
        borderTopEndRadius: "50px",
        top: "40px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        // borderWidth: "1px"
    },

    menuHeader: {
        flex: 1,
        height: "82px",
        width: "345px",
        borderRadius: "20px",
        borderWidth: "1px",
        borderColor: "rgba(217, 217, 217, 1)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        bottom: "10px",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginTop: '20px',
        left: "7px",
        
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    textHeader: {
        fontFamily: "Poppins",
        fontSize: "20px",
        textAlign: "center",
        left: "10px",
        fontWeight: "bold",
      },
      imgCircle: {
        width: "25px",
        height: "19.44px",
        resizeMode: "contain",
      },
      footer:{
        flex: 5,
        justifyContent: "flex-end",
        alignItems: "center"
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
        left: "15px"
      },
      btnText:{
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: "20px",
        color: "rgba(255,255,255,1)",
        textAlign:"center",
        lineHeight: "23.44px",
      },
      input:{
        height: "44px",
        width: "330px",
        backgroundColor: "rgba(196, 196, 196, 0.3)",
        borderWidth: "1px",
        borderColor: "rgba(217, 217, 217, 1)",
        marginBottom: "20px",
        left: "15px",
        flexDirection: "row",
        borderRadius: "2px"
      },
    
  });
  export default ManDangnhap;