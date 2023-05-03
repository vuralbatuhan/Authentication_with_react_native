import React, {useState} from "react";
import { SafeAreaView, View, Text } from "react-native";
import {Formik} from 'formik';
import styles from './Register.style';
import auth from '@react-native-firebase/auth';
import authErrorMessageParser from '../../utils/authErrorMessageParser'
import Input from '../../components/Input';
import Button from '../../components/Button';

const initialFromValues = {
    usermail: '',
    password: '',
    repassword: '',
}

const Register = ({navigation}) => {
    const [loading, setLoading] = useState(false);
    function handleLogin() {
        navigation.goBack();
    }

    const handleFormSubmit = async formValues => {
        if(formValues.password !== formValues.repassword) {
            showMessage({
                message: 'Şifreler uyuşmuyor...',
                type: 'danger',
              });
            return;
        }
        try {
            setLoading(true)
            await auth().createUserWithEmailAndPassword(
                formValues.usermail, 
                formValues.password);
                setLoading(false);
                alert('Hesap başarıyla oluşturuldu')
            navigation.navigate('login');
        } catch (error) {
            setLoading(false);
            showMessage({
              message: authErrorMessageParser(error.code),
              type: 'danger',
            });
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Kayıt Olma Ekranı</Text>
            <Formik initialValues={initialFromValues} onSubmit={handleFormSubmit}>
            {({values, handleChange, handleSubmit}) => (
              <>
                <Input
                onType={handleChange('usermail')}
                value={values.usermail} 
                placeholder="e-postanızı giriniz.."
                iconName="at"/>
                <Input
                onType={handleChange('password')}
                value={values.password} 
                placeholder="şifrenizi giriniz.." 
                isSecure
                iconName="key"/>
                <Input
                onType={handleChange('repassword')}
                value={values.repassword} 
                placeholder="şifrenizi tekrar giriniz.."
                isSecure 
                iconName="key"/>
                <Button 
                text="Kayıt Ol" 
                theme="secondary" 
                loading={loading} 
                onPress={handleSubmit}/>
                <Text style={styles.text}>
                    Zaten üye misiniz?
                </Text>
              </>
            )}
            </Formik>
            <Button text="Giriş Yap" theme="primary" loading={loading} onPress={handleLogin}/>
        </SafeAreaView>
    )
};

export default Register;
