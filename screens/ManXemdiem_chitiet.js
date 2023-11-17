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
  const [showContent1, setShowContent1]=useState(false);
  const [showContent2, setShowContent2]=useState(false);
  const [showContent3, setShowContent3]=useState(false);
  const [showContent4, setShowContent4]=useState(false);
  const [showContent5, setShowContent5]=useState(false);

  const Item=({item})=>{
    return(
      <View style={{flexDirection: 'row',}}>
        <Text style={{width:'60px', textAlign: 'center', borderColor:'gray', borderWidth:'1px'}}>{item.maMonHoc}</Text>
        <Text style={{width:'180px', textAlign: 'center', borderColor:'gray', borderWidth:'1px'}}>{item.tenMonHoc}</Text>
        <Text style={{width:'20px', textAlign: 'center', borderColor:'gray', borderWidth:'1px'}}>{item.soTC}</Text>
        <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px'}}>{item.diemTB}</Text>
    </View>
    )
  }

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
                  {/* <FlatList
                    data={data}
                    renderItem={({item})=>{
                      return( */}
                        <View style={{flexDirection:'column'}}>
                        <TouchableOpacity 
                          onPress={()=>setShowContent(!showContent)}
                          style={styles.flatContent}
                        > 
                          <Text style={styles.txtFlat}>HK 1</Text>
                          {/* <Text style={styles.txtFlat}>{item.tenHocKy}</Text> */}
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.txtFlat}>--(TC:16)</Text>
                            {/* <Text style={styles.txtFlat}>--(TC:{item.soTinChi})</Text> */}
                            <Image
                              style={{height:'15px', width:'15px', marginLeft: '5px'}}
                              source={require("../assets/img/mhtt/VectorXuong.png")}
                              resizeMode="contain"
                            ></Image>
                          </View>
                        </TouchableOpacity>
                        {showContent && (
                          <View style={{flexDirection: 'column', borderColor: 'gray', borderWidth: '1px', margin:'10px', marginTop:'-10px'}}>
                              <View style={{flexDirection: 'row',}}>
                                <Text style={{width:'60px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Mã Môn</Text>
                                <Text style={{width:'180px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Tên Môn Học</Text>
                                <Text style={{width:'20px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>TC</Text>
                                <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Điểm TB</Text>
                              </View>
                              <FlatList
                                data={data1}
                                renderItem={Item}
                                scrollEnabled={true}
                              />
                            </View>
                        )}
                        </View>

                        <View style={{flexDirection:'column'}}>
                        <TouchableOpacity 
                          onPress={()=>setShowContent1(!showContent1)}
                          style={styles.flatContent}
                        > 
                          <Text style={styles.txtFlat}>HK 2</Text>
                          {/* <Text style={styles.txtFlat}>{item.tenHocKy}</Text> */}
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.txtFlat}>--(TC:15)</Text>
                            {/* <Text style={styles.txtFlat}>--(TC:{item.soTinChi})</Text> */}
                            <Image
                              style={{height:'15px', width:'15px', marginLeft: '5px'}}
                              source={require("../assets/img/mhtt/VectorXuong.png")}
                              resizeMode="contain"
                            ></Image>
                          </View>
                        </TouchableOpacity>
                        {showContent1 && (
                          <View style={{flexDirection: 'column', borderColor: 'gray', borderWidth: '1px', margin:'10px', marginTop:'-10px'}}>
                              <View style={{flexDirection: 'row',}}>
                                <Text style={{width:'60px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Mã Môn</Text>
                                <Text style={{width:'180px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Tên Môn Học</Text>
                                <Text style={{width:'20px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>TC</Text>
                                <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Điểm TB</Text>
                              </View>
                              <FlatList
                                data={data1}
                                renderItem={Item}
                                scrollEnabled={true}
                              />
                            </View>
                        )}
                        </View>

                        <View style={{flexDirection:'column'}}>
                        <TouchableOpacity 
                          onPress={()=>setShowContent2(!showContent2)}
                          style={styles.flatContent}
                        > 
                          <Text style={styles.txtFlat}>HK 3</Text>
                          {/* <Text style={styles.txtFlat}>{item.tenHocKy}</Text> */}
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.txtFlat}>--(TC:17)</Text>
                            {/* <Text style={styles.txtFlat}>--(TC:{item.soTinChi})</Text> */}
                            <Image
                              style={{height:'15px', width:'15px', marginLeft: '5px'}}
                              source={require("../assets/img/mhtt/VectorXuong.png")}
                              resizeMode="contain"
                            ></Image>
                          </View>
                        </TouchableOpacity>
                        {showContent2 && (
                          <View style={{flexDirection: 'column', borderColor: 'gray', borderWidth: '1px', margin:'10px', marginTop:'-10px'}}>
                              <View style={{flexDirection: 'row',}}>
                                <Text style={{width:'60px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Mã Môn</Text>
                                <Text style={{width:'180px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Tên Môn Học</Text>
                                <Text style={{width:'20px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>TC</Text>
                                <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Điểm TB</Text>
                              </View>
                              <FlatList
                                data={data1}
                                renderItem={Item}
                                scrollEnabled={true}
                              />
                            </View>
                        )}
                        </View>

                        <View style={{flexDirection:'column'}}>
                        <TouchableOpacity 
                          onPress={()=>setShowContent3(!showContent3)}
                          style={styles.flatContent}
                        > 
                          <Text style={styles.txtFlat}>HK 4</Text>
                          {/* <Text style={styles.txtFlat}>{item.tenHocKy}</Text> */}
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.txtFlat}>--(TC:15)</Text>
                            {/* <Text style={styles.txtFlat}>--(TC:{item.soTinChi})</Text> */}
                            <Image
                              style={{height:'15px', width:'15px', marginLeft: '5px'}}
                              source={require("../assets/img/mhtt/VectorXuong.png")}
                              resizeMode="contain"
                            ></Image>
                          </View>
                        </TouchableOpacity>
                        {showContent3 && (
                          <View style={{flexDirection: 'column', borderColor: 'gray', borderWidth: '1px', margin:'10px', marginTop:'-10px'}}>
                              <View style={{flexDirection: 'row',}}>
                                <Text style={{width:'60px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Mã Môn</Text>
                                <Text style={{width:'180px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Tên Môn Học</Text>
                                <Text style={{width:'20px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>TC</Text>
                                <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Điểm TB</Text>
                              </View>
                              <FlatList
                                data={data1}
                                renderItem={Item}
                                scrollEnabled={true}
                              />
                            </View>
                        )}
                        </View>

                        <View style={{flexDirection:'column'}}>
                        <TouchableOpacity 
                          onPress={()=>setShowContent4(!showContent4)}
                          style={styles.flatContent}
                        > 
                          <Text style={styles.txtFlat}>HK 5</Text>
                          {/* <Text style={styles.txtFlat}>{item.tenHocKy}</Text> */}
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.txtFlat}>--(TC:17)</Text>
                            {/* <Text style={styles.txtFlat}>--(TC:{item.soTinChi})</Text> */}
                            <Image
                              style={{height:'15px', width:'15px', marginLeft: '5px'}}
                              source={require("../assets/img/mhtt/VectorXuong.png")}
                              resizeMode="contain"
                            ></Image>
                          </View>
                        </TouchableOpacity>
                        {showContent4 && (
                          <View style={{flexDirection: 'column', borderColor: 'gray', borderWidth: '1px', margin:'10px', marginTop:'-10px'}}>
                              <View style={{flexDirection: 'row',}}>
                                <Text style={{width:'60px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Mã Môn</Text>
                                <Text style={{width:'180px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Tên Môn Học</Text>
                                <Text style={{width:'20px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>TC</Text>
                                <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Điểm TB</Text>
                              </View>
                              <FlatList
                                data={data1}
                                renderItem={Item}
                                scrollEnabled={true}
                              />
                            </View>
                        )}
                        </View>

                        <View style={{flexDirection:'column'}}>
                        <TouchableOpacity 
                          onPress={()=>setShowContent5(!showContent5)}
                          style={styles.flatContent}
                        > 
                          <Text style={styles.txtFlat}>HK 6</Text>
                          {/* <Text style={styles.txtFlat}>{item.tenHocKy}</Text> */}
                          <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.txtFlat}>--(TC:13)</Text>
                            {/* <Text style={styles.txtFlat}>--(TC:{item.soTinChi})</Text> */}
                            <Image
                              style={{height:'15px', width:'15px', marginLeft: '5px'}}
                              source={require("../assets/img/mhtt/VectorXuong.png")}
                              resizeMode="contain"
                            ></Image>
                          </View>
                        </TouchableOpacity>
                        {showContent5 && (
                          <View style={{flexDirection: 'column', borderColor: 'gray', borderWidth: '1px', margin:'10px', marginTop:'-10px'}}>
                              <View style={{flexDirection: 'row',}}>
                                <Text style={{width:'60px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Mã Môn</Text>
                                <Text style={{width:'180px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Tên Môn Học</Text>
                                <Text style={{width:'20px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>TC</Text>
                                <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Điểm TB</Text>
                              </View>
                              <FlatList
                                data={data1}
                                renderItem={Item}
                                scrollEnabled={true}
                              />
                            </View>
                        )}
                        </View>
                      {/* )
                    }}
                  /> */}
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
  txtFlat:{
    fontWeight: 'bold',
    color: 'black'
  },
  flatContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '44px',
    // borderWidth: '1px',
    alignItems: 'center',
    borderColor: 'gray',
    margin: '10px',
  },
});
export default ManXemDiem_ChiTiet;
