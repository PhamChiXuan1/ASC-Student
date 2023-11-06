import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
  } from "react-native";

import React from "react";
import { 
  Menu,
  MenuOption,
  MenuOptions, 
  MenuProvider, 
  MenuTrigger 
} from "react-native-popup-menu";

const ManThanhtich = () => (
        <MenuProvider style={styles.container}>
        {/* <View style={styles.container}> */}
          <View style={styles.header}>
            <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhChinh')}}>
            <Image
              style={styles.img}
              source={require("../assets/img/mhnn/Frame 8.png")}
            ></Image>
            </TouchableOpacity>
            <Text style={styles.textTT}>Thành tích</Text>
          
          </View>

          {/* <View style={styles.content}>
            <View style={styles.chonHK}>
              <TouchableOpacity style={{flexDirection: "row"}} onPress={navigation.navigate('AThuMenu')}>
                <Text style={styles.textChonHK}>Chọn học kì</Text>
                <Image
                  source={require('../assets/img/mhtt/Vector.png')}
                  style={{width: 12, height: 14, top: "3px", left: "5px"}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View> */}
        {/* </View> */}
        {/* <View>
          <Text>con heo</Text>  
        </View>
        <Text>hello</Text> */}

      <View style={styles.content}>
        <Menu onSelect={value => alert(`Học kì đã chọn là: học kì ${value}`)} style={styles.chonHK}>
          <MenuTrigger text='Chọn học kì'/>
            <Image
              source={require('../assets/img/mhtt/VectorXuong.png')}
              style={{width: 12, height: 14, top: "3px", left: "5px"}}
              resizeMode="contain"
            />
          
            <MenuOptions>
              <MenuOption value={1} text='Học kì 1' style={styles.menuoption}/>
              <MenuOption value={2} text='Học kì 2' style={styles.menuoption}/>
              <MenuOption value={3} text='Học kì 3' style={styles.menuoption}/>
              <MenuOption value={4} text='Học kì 4' style={styles.menuoption}/>
              <MenuOption value={5} text='Học kì 5' style={styles.menuoption}/>
              <MenuOption value={6} text='Học kì 6' style={styles.menuoption}/>
              <MenuOption value={7} text='Học kì 7' style={styles.menuoption}/>
              <MenuOption value={8} text='Học kì 8' style={styles.menuoption}/>
              <MenuOption value={9} text='Học kì 9' style={styles.menuoption}/>
            </MenuOptions>
        </Menu>
      </View>
        </MenuProvider>
);
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      height: "800px",
      width: "360px",
      justifyContent: 'center',
      alignItems: 'center',
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

    menuoption:{
      alignItems:'center',
    },
  });
  
  export default ManThanhtich;