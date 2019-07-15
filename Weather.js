import React, { Component } from "react";
import { StyleSheet, Text, View, } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

//export default class Weather extends Component{
//    render() {
//        return (
//        <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
//            <View style={styles.upper}>
//                <Ionicons color="white" size={144} name="ios-rainy"/>
//                <Text style={styles.temp}>35°</Text>
//            </View>
//            <View style={styles.lower}>
//                <Text style={styles.title}>Raining like a MF</Text>
//                <Text style={styles.subtitle}>For more info look outside</Text>
//            </View>
//        </LinearGradient>
//        );    
//    }
//}

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "비가 오네요",
        subtitle: "집에서 쉬자",
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ["#FEF253", "#FF730"],
        title: "햇살 좋고~",
        subtitle: "놀러나가자",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "번개 맞는다",
        subtitle: "숨자",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "흐리다 흐려",
        subtitle: "축 처집니다",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "눈온다!",
        subtitle: "온통 하얗네요",
        icon: 'weather-snowy'
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "샤라라랄",
        subtitle: "ㅂㅈㄹㄴㅁㄹㄴㅁㅇㅂ",
        icon: 'weather-hail'
    },
    Mist: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "어우 안보여",
        subtitle: "안개등~ 안전운전",
        icon: 'weather-fog'
    }
};

function Weather({ weatherName, temp }) {
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons
                    color="white"
                    size={144}
                    name={weatherCases[weatherName].icon}
                />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"transparent" 
    },
    temp:{
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10,
    },
    lower:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
        paddingLeft: 25
    },
    title:{
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight:"300" 
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
});