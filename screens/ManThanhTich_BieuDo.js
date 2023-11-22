import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Modal,
    Dimensions,
    ScrollView,
  } from "react-native";
import React from "react";
import { useState } from "react";

import {
    BarChart,
    LineChart
  } from "react-native-chart-kit";

  const BarChartHK1 = () => {
    return (
      <>
        <Text style={{textAlign: 'center'}}>Thành tích học kì 1 2020-2021</Text>
        <BarChart
          data={{
            labels: ['NMTH', 'NMLT', 'KNLVN','Triết học', 'TCC 1'],
            datasets: [
              {
                data: [7.2, 7.8, 8.1, 6.0, 8.5],
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
  const BarChartHK2 = () => {
    return (
      <>
        <Text style={{textAlign: 'center'}}>Thành tích học kì 2 2020-2021</Text>
        <BarChart
          data={{
            labels: ['HTMT', 'KTLT', 'TCC 2','TUD', 'KTCT'],
            datasets: [
              {
                data: [7.2, 6.8, 8.5, 5.2, 8.],
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
  const BarChartHK3 = () => {
    return (
      <>
        <Text style={{textAlign: 'center'}}>Thành tích học kì 3 2020-2021</Text>
        <BarChart
          data={{
            labels: ['PLDC', 'TTHCM'],
            datasets: [
              {
                data: [8.1, 6.5],
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
  const BarChartHK4 = () => {
    return (
      <>
        <Text style={{textAlign: 'center'}}>Thành tích học kì 1 2021-2022</Text>
        <BarChart
          data={{
            labels: ['Ctdl&gt', 'Ctrr', 'csdl','OOP', 'MT&CN'],
            datasets: [
              {
                data: [7.2, 5.6, 8.1, 6.4, 8.5],
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
  const BarChartHK5 = () => {
    return (
      <>
        <Text style={{textAlign: 'center'}}>Thành tích học kì 2 2021-2022</Text>
        <BarChart
          data={{
            labels: ['MongoDB', 'Hệ qtcsdl', 'PTTKHT','HTCNW', 'LTHSK'],
            datasets: [
              {
                data: [8.4, 7.8, 8.1, 6.0, 5.7],
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
  const BarChartHK6 = () => {
    return (
      <>
        <Text style={{textAlign: 'center'}}>Thành tích học kì 3 2021-2022</Text>
        <BarChart
          data={{
            labels: ['LS ĐCSVN', 'PPLNCKH'],
            datasets: [
              {
                data: [7.5, 7.8],
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


function ManThanhtich_BieuDo({navigation, route}){
    const user = route.params.user;
    const [show1, setShow1]=useState(false);
    const [show2, setShow2]=useState(false);
    const [show3, setShow3]=useState(false);
    const [show4, setShow4]=useState(false);
    const [show5, setShow5]=useState(false);
    const [show6, setShow6]=useState(false);

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
                style={styles.ChonHK}
                onPress={()=>{setShow1(!show1)}}>
                <Text>Học kì 1(2020-2021)</Text>
              </TouchableOpacity>
              {
                show1 ? <BarChartHK1/> : null
              }
            </View>
            <View>
              <TouchableOpacity style={styles.ChonHK} onPress={()=>{setShow2(!show2)}}>
                <Text>Học kì 2(2020-2021)</Text>
              </TouchableOpacity>
              {
                show2 ? <BarChartHK2/> : null
              }
            </View>
            <View>
              <TouchableOpacity style={styles.ChonHK} onPress={()=>{setShow3(!show3)}}>
                <Text>Học kì 3(2020-2021)</Text>
              </TouchableOpacity>
              {
                show3 ? <BarChartHK3/> : null
              }
            </View>
            <View>
              <TouchableOpacity style={styles.ChonHK} onPress={()=>{setShow4(!show4)}}>
                <Text>Học kì 1(2021-2022)</Text>
              </TouchableOpacity>
              {
                show4 ? <BarChartHK4/> : null
              }
            </View>
            <View>
              <TouchableOpacity style={styles.ChonHK} onPress={()=>{setShow5(!show5)}}>
                <Text>Học kì 2(2021-2022)</Text>
              </TouchableOpacity>
              {
                show5 ? <BarChartHK5/> : null
              }
            </View>
            <View>
              <TouchableOpacity style={styles.ChonHK} onPress={()=>{setShow6(!show6)}}>
                <Text>Học kì 3(2021-2022)</Text>
              </TouchableOpacity>
              {
                show6 ? <BarChartHK6/> : null
              }
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
    textNN: {
      fontFamily: "Poppins",
      fontSize: "16px",
      color: "rgba(255, 255, 255, 1)",
      top: "33px",
      textAlign: "center",
    },
    ChonHK:{
      height:'35px',
      width:'330px',
      borderWidth: '1px',
      borderColor: 'gray',
      borderRadius: '10px',
      margin: '10px',
      justifyContent: 'center',
      alignItems: 'center'
    }
});
  
export default ManThanhtich_BieuDo;