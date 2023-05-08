import React, {useState,useEffect} from 'react';
import { SafeAreaView,Text,TextInput} from 'react-native';
import { Formik } from 'formik';
import {initializeApp} from 'firebase/app';
import {getFireStore} from 'firebase/firestore';
import styles from './Profile.styles';
import { Button } from '@rneui/themed';


const Profile = (props) => {
    const [data, setData] = useState('')
    const [data2, setData2] = useState('')
    const [data3, setData3] = useState('')

    const saveInfos = () => {
        props.navigation.navigate('home',{ name: data, companyName: data2, surname: data3} )
        console.log(data)
    }
    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.text}>
                NAME : 
            </Text>
            <TextInput value={data} onChangeText={(e) => setData(e.toUpperCase())} style = {styles.textInput}/>
            <Text style = {styles.text}>
                SURNAME : 
            </Text>
            <TextInput value={data3} onChangeText={(e) => setData3(e.toUpperCase())} style = {styles.textInput}/>
            <Text style = {styles.text}>
                AGE : 
            </Text>
            <TextInput style = {styles.textInput}/>
            <Text style = {styles.text}>
                COMPANY NAME : 
            </Text>
            <TextInput value={data2.toLocaleUpperCase()} onChangeText={(e) => setData2(e.toUpperCase())}  style = {styles.textInput}/>  
            <Button color="secondary" containerStyle={{marginTop : 20, borderRadius : 5}} onPress={saveInfos}>SAVE</Button>
            {/* <Text style = {styles.text}>
                NAME : 
            </Text>
            <TextInput style = {styles.TextInput}/>
            <Text style = {styles.text}>
                SURNAME : 
            </Text>
            <TextInput style = {styles.TextInput}/>
            <Text style = {styles.text}>
                AGE : 
            </Text>
            <TextInput style = {styles.TextInput}/>
            <Text style = {styles.text}>
                COMPANY NAME : 
            </Text>
            <TextInput style = {styles.TextInput}/>
            <Button color="secondary" containerStyle={{marginTop : 20, borderRadius : 5}} onPress={saveInfos}>SAVE</Button> */}
        </SafeAreaView>
    )
}

export default Profile;