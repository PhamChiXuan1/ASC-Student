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
    tenHocKy: "Học kì 1",
    soTinChi: "11",
    monHoc: [
      {
        maMonHoc1: "002027",
        tenMonHoc1: "Chứng chỉ TOEIC 450",
        soTC1: "0",
        trangThai1: "",
      },
      {
        maMonHoc2: "003234",
        tenMonHoc2: "Giáo dục QPAN1",
        soTC2: "4",
        trangThai2: "Đạt",
      },
    ],
  },
  {
    tenHocKy: "Học kì 2",
    soTinChi: "12",
  },
  {
    tenHocKy: "Học kì 3",
    soTinChi: "19",
  },
  {
    tenHocKy: "Học kì 4",
    soTinChi: "19",
  },
  {
    tenHocKy: "Học kì 5",
    soTinChi: "16",
  },
  {
    tenHocKy: "Học kì 6",
    soTinChi: "18",
  },
  {
    tenHocKy: "Học kì 7",
    soTinChi: "15",
  },
  {
    tenHocKy: "Học kì 8",
    soTinChi: "15",
  },
  {
    tenHocKy: "Học kì 9",
    soTinChi: "13",
  },
];

const dataMonHoc = [
  {
    maMonHoc: "002027",
    tenMonHoc: "Chứng chỉ TOEIC 450",
    soTC: "0",
    trangThai: "",
  },
  {
    maMonHoc: "003234",
    tenMonHoc: "Giáo dục QPAN1",
    soTC: "4",
    trangThai: "Đạt",
  },
  {
    maMonHoc: "003307",
    tenMonHoc: "Giáo dục thể chất 1",
    soTC: "2",
    trangThai: "Đạt",
  },
  {
    maMonHoc: "003192",
    tenMonHoc: "Kỹ năng làm việc nhóm",
    soTC: "2",
    trangThai: "Đạt",
  },
  {
    maMonHoc: " ",
    tenMonHoc: "Nhập môn lập trình",
    soTC: "2",
    trangThai: "Đạt",
  },
  {
    maMonHoc: "002009",
    tenMonHoc: "Nhập môn tin học",
    soTC: "2",
    trangThai: "Đạt",
  },
  {
    maMonHoc: "003259",
    tenMonHoc: "Toán cao cấp 1",
    soTC: "2",
    trangThai: "Đạt",
  },
  {
    maMonHoc: "014164",
    tenMonHoc: "Triết học Mác-Lênin",
    soTC: "3",
    trangThai: "Đạt",
  },
];

function ManChuongtrinhkhung({ navigation, route }) {
  const user = route.params.user;
  var [data1, setData] = useState([]);
  useEffect(() => {
    setData(route.params.user.ctk);
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
        <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px'}}>{item.trangThai}</Text>
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
        <Text style={styles.textNN}>Chương trình khung</Text>
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
                            <Text style={styles.txtFlat}>--(TC:15)</Text>
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
                                <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Trạng Thái</Text>
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
                            <Text style={styles.txtFlat}>--(TC:13)</Text>
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
                                <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Trạng Thái</Text>
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
                            <Text style={styles.txtFlat}>--(TC:16)</Text>
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
                                <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Trạng Thái</Text>
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
                                <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Trạng Thái</Text>
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
                            <Text style={styles.txtFlat}>--(TC:13)</Text>
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
                                <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Trạng Thái</Text>
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
                            <Text style={styles.txtFlat}>--(TC:17)</Text>
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
                                <Text style={{width:'80px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Trạng Thái</Text>
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
  flatContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "44px",
    // borderWidth: '1px',
    alignItems: "center",
    borderColor: "gray",
    margin: "10px",
  },
  txtFlat: {
    fontWeight: "bold",
    color: "black",
  },
});
export default ManChuongtrinhkhung;
