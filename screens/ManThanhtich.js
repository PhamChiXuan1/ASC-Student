import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Modal
  } from "react-native";

  import {
    BarChart,
    LineChart
  } from "react-native-chart-kit";

  const MyBarChart1 = () => {
    return (
      <>
        <Text style={{textAlign: 'center'}}>Điểm rèn luyện Năm học 2020-2021</Text>
        <BarChart
          data={{
            labels: ['HK1(2020-2021)', 'HK2(2020-2021)'],
            datasets: [
              {
                data: [72, 78],
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          yAxisLabel={''}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </>
    );
  };


import React from "react";
import { useState } from "react";

import { ThanhTich1 } from "./ComponentThanhTich/ThanhTich1";

function ManThanhtich({navigation, route}){
  const user = route.params.user;
  const [chooseData, setChooseData]=useState('Chọn học kỳ');
  const [isModalVisible, setIsModalVisible]=useState(false);
  
  const changModalVisibility=(bool)=>{
    setIsModalVisible(bool)
  }

  const setData=(option)=>{
    setChooseData(option)
    
  }

 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhChinh',{user})}}>
        <Image
          style={styles.img}
          source={require("../assets/img/mhnn/Frame 8.png")}
        ></Image>
         </TouchableOpacity>
        <Text style={styles.textNN}>Thành tích</Text>
      </View>

      <View style={styles.content}>
        <View>
          <TouchableOpacity 
            onPress={()=>changModalVisibility(true)}
            style={{flexDirection: 'row',borderRadius: '20px', borderWidth: '1px', borderColor: 'gray', width: '160px', height: '40px', justifyContent: 'space-evenly', alignItems: 'center', top: '10px'}}
          >
            <Text>{chooseData}</Text>
            <Image
              style={{height: '15px', width: '15px'}}
              source={require("../assets/img/mhtt/VectorXuong.png")}
              resizeMode="contain"
            ></Image>
          </TouchableOpacity>
          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            nRequestClose={()=>changModalVisibility(false)}
          >
            <ThanhTich1
              changModalVisibility={changModalVisibility}
              setData={setData}
            />
          </Modal>
          {/* <MyBarChart1/> */}
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
    textNN: {
      fontFamily: "Poppins",
      fontSize: "16px",
      color: "rgba(255, 255, 255, 1)",
      top: "33px",
      textAlign: "center",
    },
  });
  
  export default ManThanhtich;