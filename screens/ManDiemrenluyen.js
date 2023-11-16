import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
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

const MyBarChart2 = () => {
  return (
    <>
      <Text style={{textAlign: 'center'}}>Điểm rèn luyện Năm học 2021-2022</Text>
      <BarChart
        data={{
          labels: ['HK1(2021-2022)', 'HK2(2021-2022)'],
          datasets: [
            {
              data: [74, 70],
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
const MyBarChart3 = () => {
  return (
    <>
      <Text style={{textAlign: 'center'}}>Điểm rèn luyện Năm học 2022-2023</Text>
      <BarChart
        data={{
          labels: ['HK1(2022-2023)', 'HK2(2022-2023)'],
          datasets: [
            {
              data: [74, 70],
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

// const MyLineChart = () => {
//   return (
//     <>
//       <Text style={{textAlign: 'center'}}>Điểm rèn luyện</Text>
//       <LineChart
//         data={{
//           labels: ['HK1', 'HK2', 'HK3', 'HK4', 'HK5', 'HK6', 'HK7', 'HK8'],
//           datasets: [
//             {
//               data: [72, 75, 70, 78, 72, 74, 74, 78],
//               strokeWidth: 2,
//             },
//           ],
//         }}
//         width={Dimensions.get('window').width - 16}
//         height={220}
//         chartConfig={{
//           backgroundColor: '#1cc910',
//           backgroundGradientFrom: '#eff3ff',
//           backgroundGradientTo: '#efefef',
//           decimalPlaces: 2,
//           color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//         }}
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />
//     </>
//   );
// };

function ManDiemRenLuyen({navigation, route}) {
  const user = route.params.user
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhChinh', {user})}}>
        <Image
          style={styles.img}
          source={require("../assets/img/mhnn/Frame 8.png")}
        ></Image>
         </TouchableOpacity>
        <Text style={styles.textNN}>Đánh giá rèn luyện</Text>
      </View>

      <View style={styles.content}>
        {/* <MyLineChart/> */}
        <MyBarChart1/>
        <MyBarChart2/>
        <MyBarChart3/>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  
  },

  header: {
    flex:1,
    height: "100px",

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

  
});
export default ManDiemRenLuyen;
