import React from 'react';
import { SafeAreaView,Text,TouchableOpacity,ImageBackground} from 'react-native';
import styles from "./Home2.style";
import art2 from "../../components/Image/art2.jpg";

function Home2 (props) {
    const editProfile = () => {
        props.navigation.navigate('profile')
    }
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.image} blurRadius={15} source={art2}>
            <Text style={styles.text}>WELCOME</Text>
            <TouchableOpacity style={styles.touchable1} onPress={editProfile}>
            <Text style={styles.touchableO}>EDİT PROFİLE</Text>
            </TouchableOpacity>
            </ImageBackground>        
        </SafeAreaView>
    )
}

export default Home2;