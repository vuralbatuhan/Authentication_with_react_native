import React, {useState} from "react";
import { SafeAreaView, View, Text } from "react-native";
import {Formik} from 'formik';
import styles from './Login.style';
import auth from '@react-native-firebase/auth';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParser from '../../utils/authErrorMessageParser';
import Input from '../../components/Input';
import Button from '../../components/Button';

const initialFormValues = {
    usermail: 'denemebu@mail.com',
    password: 'denemebu',
}

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const handleSignUp = () => {
        props.navigation.navigate('register');
    }

    const handleFormSubmit = async (formValues) => {
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(
                formValues.usermail, 
                formValues.password);
            setLoading(false);
            console.log("oldu")
            props.navigation.navigate('home', {usermail: formValues.usermail});
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "warning",
              });
              console.log("yok")
            setLoading(false);
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Giriş Ekranı</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({values, handleChange, handleSubmit}) => (
              <>
                {/* <Home usermail={values.usermail}/> */}
                <Input
                onType={handleChange('usermail')}
                value={values.usermail} 
                placeholder="e-postanızı giriniz.."/>
                <Input
                onType={handleChange('password')}
                value={values.password} 
                placeholder="şifrenizi giriniz.." 
                isSecure/>
                <Button text="Giriş Yap" theme="secondary" onPress={handleSubmit} loading={loading}/>
                <Text style={styles.text}>
                    Henüz üye olmadınız mı?
                </Text>
              </>
            )}
            </Formik>
            <Button text="Kayıt Ol" theme="primary" onPress={handleSignUp}/>
        </SafeAreaView>
    )
};

export default Login;
