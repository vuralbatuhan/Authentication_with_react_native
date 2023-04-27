import React, {useState} from "react";
import { SafeAreaView, View, Text } from "react-native";
import {Formik} from 'formik';
import styles from './Register.style';
import auth from '@react-native-firebase/auth';
import error1 from '../../utils/authErrorMessageParser'
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

    async function handleFormSubmit(formValues) {
        if(formValues.password !== formValues.repassword) {
            alert('Şifreler uyuşmuyor')
            return;
        }
        try {
            await auth().createUserWithEmailAndPassword(
                formValues.usermail, 
                formValues.password);
                alert('Hesap başarıyla oluşturuldu')
            navigation.navigate('login');
            setLoading(false);
        } catch (error1) {
            setLoading(false);
            alert('Hesap oluşturulamadı')
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
                placeholder="e-postanızı giriniz.."/>
                <Input
                onType={handleChange('password')}
                value={values.password} 
                placeholder="şifrenizi giriniz.." 
                isSecure/>
                <Input
                onType={handleChange('repassword')}
                value={values.repassword} 
                placeholder="şifrenizi tekrar giriniz.."
                isSecure />
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
            <Button text="Giriş Yap" theme="primary" onPress={handleLogin}/>
        </SafeAreaView>
    )
};

export default Register;