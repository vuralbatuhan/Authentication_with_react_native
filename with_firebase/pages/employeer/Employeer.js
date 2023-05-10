import React,{useState} from "react";
import {SafeAreaView,Text,TextInput,View} from "react-native";
import firestore from "@react-native-firebase/firestore";
import styles from './Employeer.style';
import { Button } from '@rneui/themed';

function Employeer(props) {
    const [jobData, setJobData] = useState("")
    const [jobData2, setJobData2] = useState("")
    const {companyName} = props.route.params
    const {name} = props.route.params
    const {surname} = props.route.params
    const user = {
        Company_Name: companyName,
        Job: jobData,
        Job_Criteria: jobData2,

    }

    const usersRef = firestore().collection('Users');
    const addUser = async () => {
        await usersRef.add(user);
        props.navigation.navigate('home',{name,surname,companyName,jobData,jobData2})
    }
    return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.hText}>
            EMPLOYEER
        </Text>
        <Text style={styles.cText}>    
            COMPANY NAME : 
        </Text>
        <TextInput style={styles.input}>
        {companyName.toUpperCase()}
        </TextInput>
        <Text style={styles.text}>
            JOB : 
        </Text>
        <TextInput value={jobData} onChangeText={(e) => setJobData(e)} style={styles.input}>
        </TextInput>
        <Text style={styles.text}>
            JOB CRITERIA : 
        </Text>
        <TextInput value={jobData2} onChangeText={(e) => setJobData2(e)} multiline  numberOfLines={4} style={styles.input2}>

        </TextInput>
        <Button color="secondary" buttonStyle={{
                backgroundColor: 'purple',
                borderRadius: 10,
              }}
              containerStyle={{
                width :120,
                marginStart : 150,
                marginTop : 10
              }}
              onPress={addUser}>SAVE
        </Button>
    </SafeAreaView>
    )
    

} 

export default Employeer;