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
        noiDungChiTiet: 'Hội thảo quốc tế tự chủ tài chính trong trường Đại học, kinh Nghiệm quốc tế và ứng dụng vào Việt Nam, Hội thảo quốc tế tự chủ tài chính trong trường Đại học, kinh Nghiệm quốc tế và ứng dụng vào Việt Nam',
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

  function ManNoiDungTinTuc({navigation, route}) {
    const id = route.params;
    const user = route.params.user;
    const [chiTiet, setChiTiet] = useState({});
    useEffect(()=>{
        getChiTiet();
    },[]);
    const getChiTiet=()=>{
        for (let i = 0; i< data.length; i++){
            if(data[i].id === id){
                setChiTiet(data[i]);
            }
        }
    };

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={()=>{navigation.navigate('ManTinTuc', {user})}}>
          <Image
            style={styles.img}
            source={require("../assets/img/mhnn/Frame 8.png")}
          ></Image>
           </TouchableOpacity>
          <Text style={styles.textNN}>Nội dung chi tiết</Text>
         
        </View>
  
        <View style={styles.content}>
            <Image
                style={{height: '70px', width: '90px', borderRadius: '5px'}}
                source={chiTiet.imgTinTuc}
                resizeMode="contain"
            />
          <Text>{chiTiet.noiDungChiTiet}</Text>
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
  export default ManNoiDungTinTuc;
  