import React from "react";
import {SafeAreaView,Text,Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
function Employee(props) {

    const usersRef = firestore().collection('Users');

    const getUsers = async () => {
        const users = [];
        const snapshot = await usersRef.get();
        snapshot.forEach((doc) => {
          users.push(({...doc.data()}));
        });
        console.log(users)
      };

    return(
        <SafeAreaView>
            <Text>
                
            </Text>
            <Button title="GET" onPress={getUsers}></Button>
        </SafeAreaView>
    )
}

export default Employee;