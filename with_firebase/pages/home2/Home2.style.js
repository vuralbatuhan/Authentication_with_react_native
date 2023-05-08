import { StyleSheet } from "react-native";
import art from "../../components/Image/art.jpg";


export default StyleSheet.create({
    container : {
        // backgroundColor :'rgba(127, 220, 103, 1)', 
        flex : 1
    },
    text : {
        marginTop : 130,
        fontSize : 50,
        color : 'blue',
        flexDirection : 'row',
        textAlign : 'center',
    },
    touchableO : {
        fontSize : 20,
        textAlign : 'center',
        marginTop : 95,
        backgroundColor : 'white',
        borderRadius :10,
        width : 160,
        marginBottom :35

    },
    touchable1 : {
        flexDirection : 'column',
        alignItems : 'center',
    },
    image : {
        flex : 1
    },
})