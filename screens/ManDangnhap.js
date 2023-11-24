import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
  } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
  function ManDangnhap({navigation}){
    const [userName, setUserName] = useState("20036191");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    const [login, setLogin]= useState("");
    
    useEffect(() => {
        fetch("https://65538ffb5449cfda0f2ee69f.mockapi.io/user")
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error));
      }, []);

      const checkLogin = (userName, password) => {
        const user = data.find((item) => item.username === userName && item.password === password);
        if (user) {
            navigation.navigate("ManHinhChinh",{user:user});
        setLogin("")
        } else {
        //   alert("Wrong username or password");    
        setLogin("Sai tên đăng nhập hoặc mật khẩu")
        // setLogin("")
        }
      };  

      useFocusEffect(
       useCallback(() => {
          fetch("https://65538ffb5449cfda0f2ee69f.mockapi.io/user")
            .then((response) => response.json())
            .then((json) => {
              setData(json);
            });
        }, [])
      );
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
                    value={userName}
               style={{   height: "44px",
               width: "330px",}} onChangeText={setUserName} >

                </TextInput>
            </View>
            
            <View style={styles.input}>
                <TextInput  
                    secureTextEntry
                    placeholder="  Nhập mật khẩu"
                    // value={password}
                    style={{   height: "44px",
                    width: "330px", }} onChangeText={setPassword} >

                </TextInput>
            </View>

            <TouchableOpacity onPress={()=>{checkLogin(userName, password)}}>
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Đăng nhập</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View >
                <Text style={{marginLeft:'15px', color:'red',}}>{login}{"\n"}</Text>
                </View>
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
                <Text style={{}}>Điều khoản sử dụng và chính sách</Text>
                <Text style={{fontWeight: 'bold', fontSize: 16, }}>ascvn.com.vn</Text>
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
        marginTop:'250px',
        alignItems: "center"
      },
      btnContainer:{
 
      },
      btn:{
        height: "45px",
        width: "330px",
        borderRadius: "3px",
        justifyContent: "center",
        backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",  
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