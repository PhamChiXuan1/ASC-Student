import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList
  } from "react-native";
  
const data = [
    {
        text: 'HK1(2020-2021)',
        img:require('../assets/img/mhtt/VectorXuong.png')
    },
    {
        text: 'HK2(2020-2021)',
        img:require('../assets/img/mhtt/VectorXuong.png')
    },
    {
        text: 'HK3(2020-2021)',
        img:require('../assets/img/mhtt/VectorXuong.png')
    },
    {
        text: 'HK1(2021-2022)',
        img:require('../assets/img/mhtt/VectorXuong.png')
    },
    {
        text: 'HK2(2021-2022)',
        img:require('../assets/img/mhtt/VectorXuong.png')
    },
    {
        text: 'HK3(2021-2022)',
        img:require('../assets/img/mhtt/VectorXuong.png')
    },
    {
        text: 'HK1(2022-2023)',
        img:require('../assets/img/mhtt/VectorXuong.png')
    },
    {
        text: 'HK2(2022-2023)',
        img:require('../assets/img/mhtt/VectorXuong.png')
    },
    {
        text: 'HK3(2022-2023)',
        img:require('../assets/img/mhtt/VectorXuong.png')
    },
    {
        text: 'HK1(2023-2024)',
        img:require('../assets/img/mhtt/VectorXuong.png')
    },
    {
        text: 'HK2(2023-2024)',
        img:require('../assets/img/mhtt/VectorXuong.png')
    },
    {
        text: 'HK3(2023-2024)',
        img:require('../assets/img/mhtt/VectorXuong.png')
    },
]

  function ManXemDiem({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhChinh')}}>
          <Image
            style={styles.img}
            source={require("../assets/img/mhnn/Frame 8.png")}
          ></Image>
           </TouchableOpacity>
          <Text style={styles.textNN}>Kết quả học tập</Text>
         
        </View>
  
        <View style={styles.topContent}>
            <TouchableOpacity style={styles.oTopContent}>
                <Text style={styles.txtTopContent}>Tổng quan</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.oTopContent}>
                <Text style={styles.txtTopContent}>Tổng kết học kì</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.oTopContent}>
                <Text style={styles.txtTopContent}>Chi tiết</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <FlatList
            data={data}
            renderItem={({item})=>{
                return(
                    <View style={{margin: '10px', height: '50px', width: '330px'}}>
                        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '50px', width: '330px'}}>
                            <Text style={{color: "rgba(62, 150, 231, 1)"}}>{item.text}</Text>
                            <Image
                                source={item.img}
                                style={styles.imgHK}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                )
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
      width: "360px"
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
    topContent:{
        flexDirection: 'row',
        height: '30px',
        width: '360px'
        
    },
    oTopContent:{
        backgroundColor: "rgba(62, 150, 231, 1)",
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: '1px',
        width: '120px',
        justifyContent: 'center',
    },
    txtTopContent:{
        color: "rgba(255, 255, 255, 1)",
        textAlign: 'center',
    },
    imgHK:{
        height: "15px",
        width: "15px",
        resizeMode: 'contain',
    },
    content: {
      flex: 8,
    },
  
   
    
  });
  export default ManXemDiem;
  