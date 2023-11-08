import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ManHinhChinh from "../screens/ManHinhChinh";
import ManHinhGopY from "../screens/ManHinhGopYPhanHoi";
import ManHinhNhacNho from "../screens/ManHinhNhacNho";
import ManTaikhoan from "../screens/ManTaikhoan";
// import Icon from 'react-native-vector-icons/Entypo';
import Icon from "react-native-vector-icons/AntDesign";
// import { Entypo, AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const TabButton = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let icon;
          let rn = route.name;
          if (rn === "home") {
            icon = "home";
          } else if (rn === "bells") {
            icon = "bells";
          } else if (rn === "message1") {
            icon = "message1";
          } else if (rn === "qrcode") {
            icon = "qrcode";
          } else {
            icon = "user";
          }

          return (
            <Icon
              name={icon}
              size={24}
              color={focused ? "#3E96E7" : "#5D5D5D"}
            />
          );
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen name="home" component={ManHinhChinh} />

      <Tab.Screen name="bells" component={ManHinhNhacNho} />
      <Tab.Screen name="qrcode" component={ManHinhGopY} />
      <Tab.Screen name="message1" component={ManHinhGopY} />

      <Tab.Screen name="personal" component={ManTaikhoan} />
    </Tab.Navigator>
  );
};

export default TabButton;
