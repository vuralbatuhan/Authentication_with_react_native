import React, {useState} from 'react';
import { SafeAreaView,Text,TextInput} from 'react-native';
import styles from './Profile.styles';
import { Button } from '@rneui/themed';


const Profile = (props) => {
    const [data, setData] = useState('')
    const [data2, setData2] = useState('')
    const [data3, setData3] = useState('')

    const saveInfos = () => {
        props.navigation.navigate('home',{ name: data, companyName: data2, surname: data3} )
    }
    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.text}>
                NAME : 
            </Text>
            <TextInput value={data} onChangeText={(e) => setData(e)} style = {styles.textInput}/>
            <Text style = {styles.text}>
                SURNAME : 
            </Text>
            <TextInput value={data3} onChangeText={(e) => setData3(e)} style = {styles.textInput}/>
            <Text style = {styles.text}>
                AGE : 
            </Text>
            <TextInput style = {styles.textInput}/>
            <Text style = {styles.text}>
                COMPANY NAME : 
            </Text>
            <TextInput value={data2} onChangeText={(e) => setData2(e)}  style = {styles.textInput}/>  
            <Button color="secondary" containerStyle={{marginTop : 20, borderRadius : 5}} onPress={saveInfos}>SAVE</Button>
        </SafeAreaView>
    )
}

export default Profile;