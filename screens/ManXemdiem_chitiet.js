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
    text: "HK1(2020-2021)",
    img: require("../assets/img/mhtt/VectorXuong.png"),
  },
  {
    text: "HK2(2020-2021)",
    img: require("../assets/img/mhtt/VectorXuong.png"),
  },
  {
    text: "HK3(2020-2021)",
    img: require("../assets/img/mhtt/VectorXuong.png"),
  },
  {
    text: "HK1(2021-2022)",
    img: require("../assets/img/mhtt/VectorXuong.png"),
  },
  {
    text: "HK2(2021-2022)",
    img: require("../assets/img/mhtt/VectorXuong.png"),
  },
  {
    text: "HK3(2021-2022)",
    img: require("../assets/img/mhtt/VectorXuong.png"),
  },
  {
    text: "HK1(2022-2023)",
    img: require("../assets/img/mhtt/VectorXuong.png"),
  },
  {
    text: "HK2(2022-2023)",
    img: require("../assets/img/mhtt/VectorXuong.png"),
  },
  {
    text: "HK3(2022-2023)",
    img: require("../assets/img/mhtt/VectorXuong.png"),
  },
  {
    text: "HK1(2023-2024)",
    img: require("../assets/img/mhtt/VectorXuong.png"),
  },
  {
    text: "HK2(2023-2024)",
    img: require("../assets/img/mhtt/VectorXuong.png"),
  },
  {
    text: "HK3(2023-2024)",
    img: require("../assets/img/mhtt/VectorXuong.png"),
  },
];

const dataMonHoc = [
  {
    maMonHoc: "003848",
    tenMonHoc: "Nhập môn lập trình",
    soTC: "2",
    diemTB: "7.8",
  },
  {
    maMonHoc: "003848",
    tenMonHoc: "Triết học Maclenin",
    soTC: "2",
    diemTB: "6.3",
  },
  {
    maMonHoc: "003848",
    tenMonHoc: "Toán cao cấp 1",
    soTC: "2",
    diemTB: "7.3",
  },
  {
    maMonHoc: "003848",
    tenMonHoc: "Nhập môn tin học",
    soTC: "2",
    diemTB: "7.8",
  },
  {
    maMonHoc: "003848",
    tenMonHoc: "Kỹ năng làm việc nhóm",
    soTC: "2",
    diemTB: "8.1",
  },
  {
    maMonHoc: "003848",
    tenMonHoc: "Tiếng anh 1",
    soTC: "3",
    diemTB: "370.00",
  },
  {
    maMonHoc: "003848",
    tenMonHoc: "Tiếng anh 2",
    soTC: "3",
    diemTB: "370.00",
  },
  {
    maMonHoc: "003848",
    tenMonHoc: "Nhập môn lập trình",
    soTC: "2",
    diemTB: "7.8",
  },
];

function ManXemDiem_ChiTiet({ navigation, route }) {
  const user = route.params.user;
  var [data1, setData] = useState([]);
  useEffect(() => {
    setData(route.params.user.monHoc);
}, [route.params]);
  const [showContent, setShowContent] = useState(false);
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

        <TouchableOpacity
          style={styles.oTopContent2}
          onPress={() => {
            navigation.navigate("ManXemDiem_TKHK", { user });
          }}
        >
          <Text style={styles.txtTopContent}>Tổng kết học kì</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oTopContent3}>
          <Text style={styles.txtTopContent}>Chi tiết</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={{ margin: "10px", width: "330px" }}>
                <TouchableOpacity
                  onPress={() => setShowContent(!showContent)}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "50px",
                    width: "330px",
                  }}
                >
                  <Text style={{ color: "rgba(62, 150, 231, 1)" }}>
                    {item.text}
                  </Text>
                  <Image source={item.img} style={styles.imgHK}></Image>
                </TouchableOpacity>
                {showContent && (
                  <View
                    style={{
                      flexDirection: "column",
                      borderColor: "gray",
                      borderWidth: "1px",
                      margin: "10px",
                      marginTop: "-10px",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          width: "60px",
                          textAlign: "center",
                          borderColor: "gray",
                          borderWidth: "1px",
                          backgroundColor: "rgba(62, 150, 231, 1)",
                        }}
                      >
                        Mã Môn
                      </Text>
                      <Text
                        style={{
                          width: "180px",
                          textAlign: "center",
                          borderColor: "gray",
                          borderWidth: "1px",
                          backgroundColor: "rgba(62, 150, 231, 1)",
                        }}
                      >
                        Tên Môn Học
                      </Text>
                      <Text
                        style={{
                          width: "20px",
                          textAlign: "center",
                          borderColor: "gray",
                          borderWidth: "1px",
                          backgroundColor: "rgba(62, 150, 231, 1)",
                        }}
                      >
                        TC
                      </Text>
                      <Text
                        style={{
                          width: "80px",
                          textAlign: "center",
                          borderColor: "gray",
                          borderWidth: "1px",
                          backgroundColor: "rgba(62, 150, 231, 1)",
                        }}
                      >
                        Điểm TB
                      </Text>
                    </View>
                    <FlatList
                      data={data1}
                      renderItem={({ item }) => {
                        return (
                          <View style={{ flexDirection: "row" }}>
                            <Text
                              style={{
                                width: "60px",
                                textAlign: "center",
                                borderColor: "gray",
                                borderWidth: "1px",
                              }}
                            >
                              {item.maMonHoc}
                            </Text>
                            <Text
                              style={{
                                width: "180px",
                                textAlign: "center",
                                borderColor: "gray",
                                borderWidth: "1px",
                              }}
                            >
                              {item.tenMonHoc}
                            </Text>
                            <Text
                              style={{
                                width: "20px",
                                textAlign: "center",
                                borderColor: "gray",
                                borderWidth: "1px",
                              }}
                            >
                              {item.soTC}
                            </Text>
                            <Text
                              style={{
                                width: "80px",
                                textAlign: "center",
                                borderColor: "gray",
                                borderWidth: "1px",
                              }}
                            >
                              {item.diemTB}
                            </Text>
                          </View>
                        );
                      }}
                    />
                  </View>
                )}
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
  },
  oTopContent3: {
    backgroundColor: "rgba(62, 150, 231, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: "1px",
    width: "120px",
    justifyContent: "center",
    borderBottomColor: "white",
    borderBottomWidth: "3px",
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
});
export default ManXemDiem_ChiTiet;
