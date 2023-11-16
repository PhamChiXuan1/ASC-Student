import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

const dataMHLHLT = [
  {
    thu: "Thứ 2 - 28/08/2023",
    tiet: "Tiết 7 - 9",
    img: require("../assets/img/mhlhlt/lichthi.png"),
    tenMonHoc: "DHKTPM16: Kiểm thử phần mềm",
    phong: "H9.03",
    giangVien: "Nguyễn Năm",
  },
  {
    thu: "Thứ 3 - 29/08/2023",
    tiet: "    Tiết 10 - 12",
    img: require("../assets/img/mhlhlt/lichthi.png"),
    tenMonHoc: "DHKTPM 16B: Lập trình thuyết bị di động",
    phong: "H8.02",
    giangVien: "Nguyễn Trọng Tiến",
  },
  {
    thu: "Thứ 7 - 03/09/2023",
    tiet: "Tiết 10 - 12",
    img: require("../assets/img/mhlhlt/lichthi.png"),
    tenMonHoc: "DHKTPM 16B: Lập trình WWW (Java)",
    phong: "XH8.03",
    giangVien: "Võ Văn Hải",
  },
 
];
function ManHinhLichThi({ navigation, route }) {
  const user = route.params.user;
  const Item = ({ title }) => (
    <View>
      <View style={styles.content2}>
        <Text style={styles.textC2}>{title.thu}</Text>
      </View>
      <View style={styles.content3}>
        <Text style={styles.textC3}>{title.tiet}</Text>
      </View>
      <View style={styles.content4}>
        <Image style={styles.imgc4} source={title.img}></Image>
        <View style={styles.c4Text}>
          <Text style={styles.textC4}>{title.tenMonHoc}</Text>
          <View style={{ flexDirection: "row", top: "10px" }}>
            <Text style={styles.textC41}>Phòng: </Text>
            <Text style={styles.textC42}>{title.phong}</Text>
          </View>
          <View style={{ flexDirection: "row", top: "15px" }}>
            <Text style={styles.textC41}>Giảng viên: </Text>
            <Text style={styles.textC41}>{title.giangVien}</Text>
          </View>
        </View>
      </View>
   
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ManHinhChinh", {user});
          }}
        >
          <Image
            style={styles.imgh}
            source={require("../assets/img/mhnn/Frame 8.png")}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.textNN}>Lịch học - lịch thi</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.content1}>
          <TouchableOpacity style={styles.btn1C1}>
            <View style={styles.circleC1}>
              <Image
                style={styles.imgbtnC}
                source={require("../assets/img/mhlhlt/left.png")}
              ></Image>
            </View>
          </TouchableOpacity>
          <Text style={styles.textC1}>28/08/2023 - 03/09/2023</Text>
          <TouchableOpacity style={styles.btn2C1}>
            <View style={styles.circleC1}>
              <Image
                style={styles.imgbtnC}
                source={require("../assets/img/mhlhlt/right.png")}
              ></Image>
            </View>
          </TouchableOpacity>

        </View>

        <FlatList
          data={dataMHLHLT}
          renderItem={({ item }) => <Item title={item} />}
          scrollEnabled={true}
        />

        <View style={styles.content6}>
          <Image source={require('../assets/img/mhlhlt/lichhoc.png')} style={styles.imgC6}></Image>
          <View > 
            <Text style={styles.textC6}>Lịch học</Text>
          </View>
          <Image source={require('../assets/img/mhlhlt/lichthi.png')} style={styles.imgC61}></Image>
          <View >
            <Text style={styles.textC61}>Lịch thi</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnf1} onPress={()=>navigation.navigate('ManHinhLHLThi', {user})}>
          <Text style={styles.textf1}>Tất cả</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnf2} onPress={()=>navigation.navigate('ManHinhLichHoc', {user})}>
          <Text style={styles.textf1}>Lịch học</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnf3}>
          <Text style={styles.textf1}>Lịch thi</Text>
        </TouchableOpacity>
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
 
    backgroundImage: "linear-gradient(to right, #1E90FF,#00BFFF)",
    flexDirection: "row",
  },

  imgh: {
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
    flex: 9,
  },
  content1: {
    height: "50px",
    width: "360px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  
  },

  imgbtnC: {
    width: "10.09px",
    height: "15.63px",
    resizeMode: "contain",
  },
  btn1C1: {
    flex: 1,
    width: "85px",
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    left: "-10px",
  },
  circleC1: {
    borderRadius: "25px",
    height: "30px",
    width: "30px",
    borderWidth: "1px",
    borderColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    justifyContent: "center",
  },

  textC1: {
    flex: 3,
    fontFamily: "Poppins",
    fontSize: "16px",
    color: "rgba(69, 99, 255, 1)",
    textAlign: "center",
  },

  btn2C1: {
    flex: 1,
    width: "85px",
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    right: "-10px",
  },

  content2: {
    height: "40px",
    backgroundColor: "rgba(208, 244, 255, 1)",
    alignItems: "center",
    justifyContent: "center",
  },

  textC2: {
    fontFamily: "Poppins",
    fontSize: "16px",
    color: "rgba(69, 99, 255, 1)",
    textAlign: "center",
  },

  content3: {
    height: "40px",
    borderLeftWidth: "8px",
    borderLeftColor: "rgba(62, 150, 231, 1)",
    borderWidth: "2px",
    borderColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  textC3: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "700",
    textAlign: "center",
    left: "-140px",
  },
  content4: {
    height: "110px",
    flexDirection: "row",
    top: "12px",
  },

  imgc4: {
    height: "22px",
    width: "22px",
    left: "12px",
  },

  c4Text: {
    left: "25px",
    width: "360px",
  },
  textC4: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "700",
  },

  textC41: {
    fontFamily: "Poppins",
    fontSize: "15px",
    top: "10px",
  },

  textC42: {
    fontFamily: "Poppins",
    fontSize: "15px",
    left: "28px",
    top: "10px",
  },

  content5: {
    height: "15px",
    backgroundColor: "rgba(217, 217, 217, 0.5)",
  },

  content6: {
    height: "50px",
    backgroundColor: "rgba(217, 217, 217, 0.5)",
    top:'15px',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'centen'
  },

  imgC6:{
    height:'18px',
    width:'18px',
    left:'100px',
    top:'8px',
  },
  textC6:{
    fontFamily: "Poppins",
    fontSize: "14px",
    left: "105px",
    top: "8px",
  },

  imgC61:{
    height:'18px',
    width:'18px',
    left:'120px',
    top:'8px',
  },

  textC61:{
    fontFamily: "Poppins",
    fontSize: "14px",
    left: "125px",
    top: "8px",
  },

  footer: {
    flex: 1,
    height: "40px",
    flexDirection: "row",
  },

  btnf1: {
    height: "40px",
    width: "60px",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    flex: 2,
  },

  textf1: {
    fontFamily: "Poppins",
    fontSize: "15px",
    textAlign: "center",
  },

  btnf2: {
    height: "40px",
    width: "80px",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    alignSelf: "center",
    
  },

  btnf3: {
    height: "40px",
    width: "80px",
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    alignSelf: "center",
    borderTopWidth: "3px",
    borderTopColor: "rgba(62, 150, 231, 1)",
  },
});
export default ManHinhLichThi;
