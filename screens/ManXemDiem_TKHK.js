import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
const data = [
  {
    tenHocKy: "HK2(2022-2023)",
    tbcHocLuc: "6.3",
    tbcTinChi: "2.42",
    xepLoaiHocLuc: "Trung bình",
    xepLoaiHanhKiem: "Khá",
    canhBaoHocVu: "Học tiếp",
  },
  {
    tenHocKy: "HK1(2022-2023)",
    tbcHocLuc: "7.5",
    tbcTinChi: "2.42",
    xepLoaiHocLuc: "Trung bình",
    xepLoaiHanhKiem: "Khá",
    canhBaoHocVu: "Học tiếp",
  },
  {
    tenHocKy: "HK2(2021-2022)",
    tbcHocLuc: "5.8",
    tbcTinChi: "2.42",
    xepLoaiHocLuc: "Trung bình",
    xepLoaiHanhKiem: "Khá",
    canhBaoHocVu: "Học tiếp",
  },
  {
    tenHocKy: "HK1(2021-2022)",
    tbcHocLuc: "6.9",
    tbcTinChi: "2.42",
    xepLoaiHocLuc: "Trung bình",
    xepLoaiHanhKiem: "Khá",
    canhBaoHocVu: "Học tiếp",
  },
  {
    tenHocKy: "HK2(2020-2021)",
    tbcHocLuc: "7.4",
    tbcTinChi: "2.42",
    xepLoaiHocLuc: "Trung bình",
    xepLoaiHanhKiem: "Khá",
    canhBaoHocVu: "Học tiếp",
  },
  {
    tenHocKy: "HK1(2020-2021)",
    tbcHocLuc: "6.0",
    tbcTinChi: "2.42",
    xepLoaiHocLuc: "Trung bình",
    xepLoaiHanhKiem: "Khá",
    canhBaoHocVu: "Học tiếp",
  },
];

function ManXemDiem_TKHK({ navigation, route }) {
  var [data1, setData] = useState([]);
  useEffect(() => {
    setData(route.params.user.hk);
}, [route.params]);
  const user = route.params.user;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ManHinhChinh", { user });
          }}
        >
          <Image
            style={styles.img}
            source={require("../assets/img/mhnn/Frame 8.png")}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.textNN}>Kết quả học tập</Text>
      </View>

      <View style={styles.topContent}>
        <TouchableOpacity
          style={styles.oTopContent1}
          onPress={() => {
            navigation.navigate("ManXemDiem_TongQuan", { user });
          }}
        >
          <Text style={styles.txtTopContent}>Tổng quan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oTopContent2}>
          <Text style={styles.txtTopContent}>Tổng kết học kì</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.oTopContent3}
          onPress={() => {
            navigation.navigate("ManXemDiem_ChiTiet", { user });
          }}
        >
          <Text style={styles.txtTopContent}>Chi tiết</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <FlatList
          data={data1}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "column",
                  left: "20px",
                  borderBottomWidth: "1px",
                  borderBottomColor: "gray",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              >
                <Text style={{ color: "blue", fontWeight: "bold" }}>
                  {item.tenHocKy}
                </Text>
                <View style={styles.oThongTin}>
                  <Text style={styles.text}>TBC Học lực: </Text>
                  <Text style={styles.textDataHocLuc}>{item.tbcHocLuc}</Text>
                </View>
                <View style={styles.oThongTin}>
                  <Text style={styles.text}>TBC Tín chỉ: </Text>
                  <Text style={styles.textData}>{item.tbcTinChi}</Text>
                </View>
                <View style={styles.oThongTin}>
                  <Text style={styles.text}>Xếp loại học lực: </Text>
                  <Text style={styles.textData}>{item.xepLoaiHocLuc}</Text>
                </View>
                <View style={styles.oThongTin}>
                  <Text style={styles.text}>Xếp loại hạnh kiểm: </Text>
                  <Text style={styles.textData}>{item.xepLoaiHanhKiem}</Text>
                </View>
                <View style={styles.oThongTin}>
                  <Text style={styles.text}>Cảnh báo học vụ: </Text>
                  <Text style={styles.textData}>{item.canhBaoHocVu}</Text>
                </View>
              </View>
            );
          }}
        />
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
  topContent: {
    flexDirection: "row",
    height: "30px",
    width: "360px",
  },
  oTopContent1: {
    backgroundColor: "rgba(62, 150, 231, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: "1px",
    width: "120px",
    justifyContent: "center",
  },
  oTopContent2: {
    backgroundColor: "rgba(62, 150, 231, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: "1px",
    width: "120px",
    justifyContent: "center",
    borderBottomColor: "white",
    borderBottomWidth: "3px",
  },
  oTopContent3: {
    backgroundColor: "rgba(62, 150, 231, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: "1px",
    width: "120px",
    justifyContent: "center",
  },
  txtTopContent: {
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
  },
  imgHK: {
    height: "15px",
    width: "15px",
    resizeMode: "contain",
  },
  content: {
    flex: 8,
  },
  oThongTin: {
    flexDirection: "row",
    margin: "5px",
  },
  text: {
    width: "160px",
    fontWeight: "bold",
    color: "gray",
  },
  textData: {
    width: "140px",
    fontWeight: "bold",
    textAlign: "right",
  },
  textDataHocLuc: {
    width: "140px",
    color: "red",
    fontWeight: "bold",
    textAlign: "right",
  },
});
export default ManXemDiem_TKHK;
