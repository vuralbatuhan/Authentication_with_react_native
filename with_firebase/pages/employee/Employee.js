import React, {useState} from "react";
import {SafeAreaView,Text, FlatList, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Card, Button } from "@rneui/themed";
function Employee() {

    const [userData, setUserData] = useState([])
    const usersRef = firestore().collection('Users');

    const getData = async () =>{
        const users =[];
        const snapshot = await usersRef.get();
        snapshot.forEach((doc) => {
        users.push(({...doc.data()}));   
        });
        setUserData(users)
      };

      getData()

    return (
      <View>
      <FlatList
        data={userData}
        renderItem={d => (
          <View style={{ borderWidth: 1 }}>
            <Card>
          <Card.Title>{d.item.Company_Name.toUpperCase()}</Card.Title>
          <Card.Divider style={{borderWidth: 1 }} />
          <Text style={{ marginBottom: 10 }}>
            {d.item.Job.toUpperCase()}
          </Text>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://images.pexels.com/photos/6913585/pexels-photo-6913585.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            {d.item.Job_Criteria.toUpperCase()}
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="APPLICATION"
          />
        </Card>
          </View>
        )}
      />
              
      </View>
    );
}

export default Employee;