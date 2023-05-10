import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './pages/login/Login';
import register from './pages/register/Register'
import home from './pages/home/Home'
import home2 from './pages/home2/Home2';
import profile from './pages/profile/Profile';
import employee from './pages/employee/Employee';
import employeer from './pages/employeer/Employeer';
import myPosts from './pages/myPosts/MyPosts'
const Stack = createNativeStackNavigator();

function App(){

 
      return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="register" component={register}/>
        <Stack.Screen name="home" component={home}/>
        <Stack.Screen name="home2" component={home2}/>
        <Stack.Screen name="profile" component={profile}/>
        <Stack.Screen name="employee" component={employee}/>
        <Stack.Screen name="employeer" component={employeer}/>
        <Stack.Screen name="myPosts" component={myPosts}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container : {
    marginTop  :100,
    alignItems : 'center',
    justifyContent : 'center',
    flexDirection : 'column',
  },
  input : {
    width : 130,
    height : 40,
    marginTop : 5,
    borderWidth : 0.5,
    fontSize : 12
  }
})

export default App;
