import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackgroundComponent,
} from "react-native";
import { useState, useEffect } from "react";
function ManHinhDoiMatKhau({ navigation, route }) {
  const user = route.params.user;
  const [tb, setTb] = useState("");
  const [userName, setUserName] = useState(user.password);
    const [password, setPassword] = useState("");
    const [eyeClick, setEyeClick] = useState(true);
    const [eyeClick1, setEyeClick1] = useState(true);
    const [eyeClick2, setEyeClick2] = useState(true);
    const [data, setData] = useState([]);
    const saveChanges = () => {
      fetch(`https://65538ffb5449cfda0f2ee69f.mockapi.io/user/${user.id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              password: userName
          }),
      })
      .then(data => {
          setTb("");
          navigation.navigate('ManDangnhap', {password: data} );
      })
      .catch(error => {
        setTb("Đổi mật khẩu không thành công!");
          console.error('Error:', error);
      });
      console.log(password);
  };

  // if(saveChanges){
  //   setTb("");
  // }
  // else{
  //   setTb("Đổi mật khẩu không thành công!");
  // }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ManHinhChinh", {user});
          }}
        >
          <Image
            style={styles.img}
            source={require("../assets/img/mhnn/Frame 8.png")}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.textH}>Đổi mật khẩu</Text>
      </View>

      <View style={styles.content}>
        <Image
          style={styles.imgC}
          source={require("../assets/img/mhdmk/undraw_Security_re_a2rk 1.png")}
        ></Image>

        <View style={styles.textInputC}>
          <TextInput
            style={styles.textC}
            placeholder="    Mật khẩu cũ: " value={user.password} secureTextEntry={eyeClick}
          ></TextInput>
          <TouchableOpacity onPress={()=>{setEyeClick(!eyeClick)}}>
          <Image style={styles.imgt} source={require("../assets/img/mhdmk/eye 1.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.textInput1C}>
          <TextInput
            style={styles.textC}
            placeholder="   Mật khẩu mới: " onChangeText={setUserName} secureTextEntry={eyeClick1}
          ></TextInput>
          <TouchableOpacity onPress={()=>{setEyeClick1(!eyeClick1)}}>
          <Image style={styles.imgt} source={require("../assets/img/mhdmk/eye 1.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.textInput2C}>
          <TextInput
            style={styles.textC}
            placeholder="    Nhập lại mật khẩu mới: " onChangeText={setUserName} secureTextEntry={eyeClick2}
          ></TextInput>
          <TouchableOpacity onPress={()=>{setEyeClick2(!eyeClick2)}}>
          <Image style={styles.imgt} source={require("../assets/img/mhdmk/eye 1.png")} />
          </TouchableOpacity>
        </View>

        <View><Text>{tb}</Text></View>

<View style={styles.footer}><TouchableOpacity style={styles.btn} onPress={saveChanges}>
            <Text style={styles.btnText}>Xác nhận</Text>
        </TouchableOpacity></View>
        
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // height: "800px",
    // width: "360px",
  },

  imgt:{
    height:20,
    width: 20,
    resizeMode:'contain',
    marginLeft:'130px',
    position:'absolute',
    marginTop:'-10px',
  },
  header: {
    flex:1,
    height: "100px",
    // width: "360px",
    backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
    flexDirection: "row",
  },

  img: {
    height: "46px",
    width: "40px",
    top: "15px",
  },

  textH: {
    fontFamily: "Poppins",
    fontSize: "16px",
    color: "rgba(255, 255, 255, 1)",
    top: "33px",
    textAlign: "center",
  },
  content: {
    flex: 8,
  },

  imgC: {
    height: "200px",
    width: "312px",
    resizeMode: "contain",
    left: "30px",
    top: "20px",
  },

  textInputC: {
    height: "38px",
    width: "334px",
    backgroundColor: "rgba(217, 217, 217, 0.45)",
    borderWidth: "1px",
    borderColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: "30px",
  },

  textInput1C: {
    height: "38px",
    width: "334px",
    backgroundColor: "rgba(217, 217, 217, 0.45)",
    borderWidth: "1px",
    borderColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: "40px",
  },

  textInput2C: {
    height: "38px",
    width: "334px",
    backgroundColor: "rgba(217, 217, 217, 0.45)",
    borderWidth: "1px",
    borderColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop:'50px',
  },

  textC: {
    fontSize: "14px",
    fontFamily: "Poppins",
    fontWeight: "400",
    width: "334px",
    height: "38px",
    position: "absolute",
  },

  btn: {
    height: "45px",
    width: "330px",
    borderRadius: "3px",
    justifyContent: "center",
    backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
   marginTop:'150px',
    alignSelf:'center'
  },
  btnText: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "20px",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    lineHeight: "23.44px",
  },

  footer:{
    flex:3

  }
});
export default ManHinhDoiMatKhau;
