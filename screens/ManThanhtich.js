import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
  } from "react-native";
  
  function ManThanhtich({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhChinh')}}>
          <Image
            style={styles.img}
            source={require("../assets/img/mhnn/Frame 8.png")}
          ></Image>
           </TouchableOpacity>
          <Text style={styles.textTT}>Thành tích</Text>
         
        </View>

        <View style={styles.content}>
          <View style={styles.chonHK}>
            <TouchableOpacity style={{flexDirection: "row"}}>
              <Text style={styles.textChonHK}>Chọn học kì</Text>
              <Image
                source={require('../assets/img/mhtt/Vector.png')}
                style={{width: 12, height: 14, top: "3px", left: "5px"}}
                resizeMode="contain"
              />
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
      height: "800px",
      width: "360px"
    },
    
    header: {
      flex: 1,
      height: "100px",
      width: "360px",
      backgroundImage: "linear-gradient(to right, #1E90FF, #00BFFF)",
      flexDirection: "row",
    },  

    img: {
      height: "46px",
      width: "40px",
      top: "15px",
    },

    content:{
      flex: 8,
      alignItems: "center",
    },

    chonHK:{
      flexDirection: "row",
      justifyContent: "space-evenly",
      top: "10px",
      borderWidth: "1px",
      borderRadius: "20px",
      width: "120px",
      height: "25px",
    },

    textTT:{
      fontFamily: "Poppins",
      fontSize: "16px",
      color: "rgba(255, 255, 255, 1)",
      top: "33px",
      textAlign: "center",
    },

    textChonHK:{

    },
  });
  export default ManThanhtich;
  