import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
  } from "react-native";

    function ManChuongtrinhkhung(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                    <Image
                        style={styles.img}
                        source={require("../assets/img/mhnn/Frame 8.png")}
                    ></Image>
                    </TouchableOpacity>
                    <Text style={styles.textNN}>Chương trình khung</Text>
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
            // backgroundColor: "rgba(62, 150, 231, 1)",
            backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
            flexDirection: "row",
          },
        
          img: {
            height: "46px",
            width: "40px",
            top: "15px",
          },
        
          textNN: {
            fontFamily: "Poppins",
            fontSize: "16px",
            color: "rgba(255, 255, 255, 1)",
            top: "33px",
            textAlign: "center",
          },
          content: {
            flex: 8,
          },
        
          imgContent: {
            height: "100px",
            width: "100px",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            top: "180px",
          },
        
          textContent: {
            fontFamily: "Poppins",
            fontSize: "16px",
            textAlign: "center",
            top: "200px",
          },
    });
    export default ManChuongtrinhkhung;