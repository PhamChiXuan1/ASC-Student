import React from "react";
import {StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView} from "react-native"

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


const OPTION =['HK 1(2020-2021)', 'HK 2(2020-2021)', 'HK 3(2020-2021)',
               'HK 1(2021-2022)', 'HK 2(2021-2022)', 'HK 3(2021-2022)',
               'HK 1(2022-2023)', 'HK 2(2022-2023)', 'HK 3(2022-2023)']

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const ThanhTich1 = (props)=>{
    const onPressItem = (option)=>{
        props.changModalVisibility(false);
        props.setData(option);
    }

    const option = OPTION.map((item, index)=>{
        return(
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={()=>onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })
    return(
        <TouchableOpacity
            style={styles.container}
            onPress={()=>props.changModalVisibility(false)}
        >
            <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT/2}]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
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
    modal:{
        backgroundColor: 'gray',
        borderRadius: '10px',
    },
    option:{
        alignItems: 'center',
        borderBottomWidth: '1px',
        borderBottomColor: 'white',
        left: '40px',
        marginRight: '80px',
    },
    text:{
        margin: '20px',
        fontWeight: 'bold',
        fontSize: '15px',
    },
})

export {ThanhTich1};