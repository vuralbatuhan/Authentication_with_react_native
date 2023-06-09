import React from "react";
import { SafeAreaView, Text, TouchableOpacity,Image,View } from "react-native";
import styles from "./Home.style"
import is from "../../components/Image/is.jpg"
import isara from "../../components/Image/isara.jpg"
import { Button } from "@rneui/themed";
function Home (props) {
    const {companyName} = props.route.params
    const {name} = props.route.params
    const {surname} = props.route.params
    const {jobData} = props.route.params
    const {jobData2} = props.route.params
    const editProfile = () => {
        props.navigation.navigate('profile')
    }
    const goEmployee = () => {
        props.navigation.navigate('employee')
    }
    const goEmployeer = () => {
        props.navigation.navigate('employeer', {companyName,name,surname})
    }
return (
    <SafeAreaView style={{backgroundColor : 'rgba(127, 220, 103, 1)', flex : 1}}>
        <Text style={styles.text}>WELCOME</Text>
        <Text style={styles.text2}>{name.toUpperCase()}  {surname.toUpperCase()}</Text>
        <Image source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
        <TouchableOpacity style={styles.touchable1} onPress={editProfile}>
        <Text style={styles.touchableO}>EDİT PROFİLE</Text>
        </TouchableOpacity>
        <View style={styles.underContainer}>
        <View style={styles.underView}>
        <Image style={styles.image} source={is}/>
        <Button containerStyle={{borderRadius : 8, marginTop : 20, width : 120}} onPress={goEmployeer}>EMPLOYEER</Button>
        </View>
        <View style={styles.underView}>
        <Image style={styles.image} source={isara}/>
        <Button containerStyle={{borderRadius : 8, marginTop : 20, width : 120}} onPress={goEmployee}>EMPLOYEE</Button>
        </View>
        </View>
        
    </SafeAreaView>
)
}
export default Home;
