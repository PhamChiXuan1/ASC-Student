import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

function ManHinhDoiMatKhau({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ManHinhChinh");
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
            placeholder="    Mật khẩu cũ: "
          ></TextInput>
        </View>

        <View style={styles.textInput1C}>
          <TextInput
            style={styles.textC}
            placeholder="   Mật khẩu mới: "
          ></TextInput>
        </View>

        <View style={styles.textInput2C}>
          <TextInput
            style={styles.textC}
            placeholder="    Nhập lại mật khẩu mới: "
          ></TextInput>
        </View>

        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Xác nhận</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "800px",
    width: "360px",
  },

  header: {
    flex: 1,
    height: "100px",
    width: "360px",
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
    height: "218px",
    width: "330px",
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
    top: "50px",
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
    left: "15px",
    top: "220px",
  },
  btnText: {
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "20px",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    lineHeight: "23.44px",
  },
});
export default ManHinhDoiMatKhau;
