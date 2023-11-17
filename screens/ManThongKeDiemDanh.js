import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  FlatList
} from "react-native";
import { useState, useEffect } from "react";

const dataHK = [
{
  id: 1,
  tenHK: 'Học kì 1(2020-2021)', 
},
{
  id: 2,
  tenHK: 'Học kì 2(2020-2021)', 
},
{
  id: 3,
  tenHK: 'Học kì 1(2021-2022)', 
},
{
  id: 4,
  tenHK: 'Học kì 2(2021-2022)', 
},
{
  id: 5,
  tenHK: 'Học kì 1(2022-2023)', 
},
{
  id: 6,
  tenHK: 'Học kì 2(2022-2023)', 
},
]

const dataMH = [
{
  maMonHoc: '002720',
  tenMonHoc:'Nhập môn lập trình',
  dvht:'3',
  cp:'0',
  kp:'0',
},
{
  maMonHoc: '002720',
  tenMonHoc:'Nhập môn lập trình',
  dvht:'3',
  cp:'0',
  kp:'0',
},
{
  maMonHoc: '002720',
  tenMonHoc:'Nhập môn lập trình',
  dvht:'3',
  cp:'0',
  kp:'0',
},
]

function ManThongKeDiemDanh({navigation, route}) {
  const user = route.params.user;
  var [data1, setData] = useState([]);
  useEffect(() => {
    setData(route.params.user.dd);
}, [route.params]);
  const [showContent, setShowContent]=useState(false);
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
        <Text style={{width:'50px', textAlign: 'center', borderColor:'gray', borderWidth:'1px'}}>{item.dvht}</Text>
        <Text style={{width:'35px', textAlign: 'center', borderColor:'gray', borderWidth:'1px'}}>{item.cp}</Text>
        <Text style={{width:'35px', textAlign: 'center', borderColor:'gray', borderWidth:'1px'}}>{item.kp}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhChinh', {user})}}>
        <Image
          style={styles.img}
          source={require("../assets/img/mhnn/Frame 8.png")}
        ></Image>
         </TouchableOpacity>
        <Text style={styles.textNN}>Thông kê điểm danh</Text>
       
      </View>

      <View style={styles.content}>
        <View style={{flexDirection: 'row',}}>
          <Text style={{width:'60px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Mã Môn</Text>
          <Text style={{width:'180px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>Tên Môn</Text>
          <Text style={{width:'50px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>DVHT</Text>
          <Text style={{width:'35px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>CP</Text>
          <Text style={{width:'35px', textAlign: 'center', borderColor:'gray', borderWidth:'1px',backgroundColor: "rgba(62, 150, 231, 1)",}}>KP</Text>
          </View>
      {/* <FlatList
                  data={dataHK}
                  renderItem={({item})=>{
                    return( */}
                      <View style={{flexDirection:'column'}}>
                      <TouchableOpacity 
                        onPress={()=>setShowContent(!showContent)}              
                        style={styles.flatContent}
                      > 
                        <Text style={styles.txtFlat}>HK 1</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            style={{height:'15px', width:'15px', marginLeft: '5px'}}
                            source={require("../assets/img/mhtt/VectorXuong.png")}
                            resizeMode="contain"
                          ></Image>
                        </View>
                      </TouchableOpacity>
                      {showContent && (
                      <View style={{flexDirection: 'column', borderColor: 'gray', borderWidth: '1px', marginTop:'-10px'}}>
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
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            style={{height:'15px', width:'15px', marginLeft: '5px'}}
                            source={require("../assets/img/mhtt/VectorXuong.png")}
                            resizeMode="contain"
                          ></Image>
                        </View>
                      </TouchableOpacity>
                      {showContent1 && (
                      <View style={{flexDirection: 'column', borderColor: 'gray', borderWidth: '1px', marginTop:'-10px'}}>
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
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            style={{height:'15px', width:'15px', marginLeft: '5px'}}
                            source={require("../assets/img/mhtt/VectorXuong.png")}
                            resizeMode="contain"
                          ></Image>
                        </View>
                      </TouchableOpacity>
                      {showContent2 && (
                      <View style={{flexDirection: 'column', borderColor: 'gray', borderWidth: '1px', marginTop:'-10px'}}>
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
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            style={{height:'15px', width:'15px', marginLeft: '5px'}}
                            source={require("../assets/img/mhtt/VectorXuong.png")}
                            resizeMode="contain"
                          ></Image>
                        </View>
                      </TouchableOpacity>
                      {showContent3 && (
                      <View style={{flexDirection: 'column', borderColor: 'gray', borderWidth: '1px', marginTop:'-10px'}}>
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
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            style={{height:'15px', width:'15px', marginLeft: '5px'}}
                            source={require("../assets/img/mhtt/VectorXuong.png")}
                            resizeMode="contain"
                          ></Image>
                        </View>
                      </TouchableOpacity>
                      {showContent4 && (
                      <View style={{flexDirection: 'column', borderColor: 'gray', borderWidth: '1px', marginTop:'-10px'}}>
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
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            style={{height:'15px', width:'15px', marginLeft: '5px'}}
                            source={require("../assets/img/mhtt/VectorXuong.png")}
                            resizeMode="contain"
                          ></Image>
                        </View>
                      </TouchableOpacity>
                      {showContent5 && (
                      <View style={{flexDirection: 'column', borderColor: 'gray', borderWidth: '1px', marginTop:'-10px'}}>
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
                />            */}

              
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
    flex: 1,
    height: "100px",
 
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
  flatContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '44px',
    // borderWidth: '1px',
    alignItems: 'center',
    borderColor: 'gray',
    margin: '10px',
  },
  txtFlat:{
    fontWeight: 'bold',
    color: 'black'
  }

});
export default ManThongKeDiemDanh;
