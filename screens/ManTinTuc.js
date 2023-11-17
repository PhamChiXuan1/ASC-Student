import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList,
  } from "react-native";
  
const data=[
    {
        imgTinTuc: require("../assets/hinh1.jpg"),
        noiDungChinh: 'Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra',
        ngayDang: '13-02-2020',
        noiDungChiTiet: 'Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra, Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra, Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra, Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra',
    },
    {
        imgTinTuc: require("../assets/hinh2.jpg"),
        noiDungChinh: 'Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra',
        ngayDang: '13-02-2020',
        noiDungChiTiet: 'Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra, Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra',
    },
    {
        imgTinTuc: require("../assets/hinh3.jpg"),
        noiDungChinh: 'Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra',
        ngayDang: '13-02-2020',
        noiDungChiTiet: 'Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra, Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra',
    },
    {
        imgTinTuc: require("../assets/hinh1.jpg"),
        noiDungChinh: 'Hội thảo quốc tế tự chủ tài chính trong trường Đại học, kinh Nghiệm quốc tế và ứng dụng vào Việt Nam',
        ngayDang: '01-04-2020',
        noiDungChiTiet: 'Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra, Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra',
    },
    {
        imgTinTuc: require("../assets/hinh2.jpg"),
        noiDungChinh: 'IUH đón nhận chứng nhận 4 chương trình đạt chuẩn AUN-QA và gặp mặt truyền thống nhân ngày Nhà giáo Việt Nam 20-11',
        ngayDang: '01-04-2020',
        noiDungChiTiet: 'Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra, Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra',
    },
    {
        imgTinTuc: require("../assets/hinh3.jpg"),
        noiDungChinh: 'IUH đón nhận chứng nhận 4 chương trình đạt chuẩn AUN-QA và gặp mặt truyền thống nhân ngày Nhà giáo Việt Nam 20-11',
        ngayDang: '01-04-2020',
        noiDungChiTiet: 'Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra, Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra',
    },
    {
        imgTinTuc: require("../assets/hinh1.jpg"),
        noiDungChinh: 'IUH đón nhận chứng nhận 4 chương trình đạt chuẩn AUN-QA và gặp mặt truyền thống nhân ngày Nhà giáo Việt Nam 20-11',
        ngayDang: '01-04-2020',
        noiDungChiTiet: 'Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra, Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra',
    },
    {
        imgTinTuc: require("../assets/hinh2.jpg"),
        noiDungChinh: 'IUH đón nhận chứng nhận 4 chương trình đạt chuẩn AUN-QA và gặp mặt truyền thống nhân ngày Nhà giáo Việt Nam 20-11',
        ngayDang: '01-04-2020',
        noiDungChiTiet: 'Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra, Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra',
    },
    {
        imgTinTuc: require("../assets/hinh3.jpg"),
        noiDungChinh: 'IUH đón nhận chứng nhận 4 chương trình đạt chuẩn AUN-QA và gặp mặt truyền thống nhân ngày Nhà giáo Việt Nam 20-11',
        ngayDang: '01-04-2020',
        noiDungChiTiet: 'Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra, Thông báo V/v tiếp tục nghỉ học đối với học sinh và sinh viên để phòng chống dịch bệnh viêm đường hô hấp do chủng mới của virus corona gây ra',
    },
]

  function ManTinTuc({navigation, route}) {
    const user = route.params.user;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>{navigation.navigate('ManHinhChinh', {user})}}>
          <Image
            style={styles.img}
            source={require("../assets/img/mhnn/Frame 8.png")}
          ></Image>
           </TouchableOpacity>
          <Text style={styles.textNN}>Tin tức</Text>
         
        </View>
  
        <View style={styles.content}>
          <FlatList
            data={data}
            renderItem={({item})=>{
                return(
                    <View>
                        <TouchableOpacity
                            onPress={()=>{navigation.navigate("ManNoiDungTinTuc", {user})}} 
                            style={{margin: '10px', height: '110px', width: '330px', borderBottomWidth: '1px', borderBottomColor: 'gray'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Image
                                    style={{height: '70px', width: '90px', borderRadius: '5px'}}
                                    source={item.imgTinTuc}
                                    resizeMode="contain"
                                ></Image>
                                <Text style={{left: '10px'}}>{item.noiDungChinh}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: '10px'}}>
                                <Text style={{color: 'gray'}}>Ngày đăng: </Text>
                                <Text style={{color: 'gray'}}>{item.ngayDang}</Text>
                            </View>
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
  
    
  });
  export default ManTinTuc;
  