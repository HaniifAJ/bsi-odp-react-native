import { cloneElement, useState } from 'react';
import Form from '../components/Form';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{marginTop: 100, marginBottom: 150, marginHorizontal: 'auto'}}>
                <Image source={require('../assets/logo.png')}></Image>
            </View>
            <Form 
                state='login' 
                emailState={[email, setEmail]} 
                passwordState={[password, setPassword]} 
                navigation={navigation}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 15,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    btnLogin: {
        backgroundColor: '#19918F',
        marginHorizontal: 10,
        marginTop: 50,
        padding: 15,
        borderRadius: 10
    }
})

