import { cloneElement, useState } from 'react';
import Form from '../components/Form';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function Register({ navigation }) {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [avatarUrl, setAvatarUrl] = useState('')

    return (
        <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{marginTop: 100, marginBottom: 150, marginHorizontal: 'auto'}}>
                <Image source={require('../assets/logo.png')}></Image>
            </View>
            <Form 
                state='register' 
                fullnameState={[fullname, setFullname]}
                emailState={[email, setEmail]}
                passwordState={[password, setPassword]}
                avatarUrlState={[avatarUrl, setAvatarUrl]}
                navigation={navigation}/>
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
        borderWidth: 1,
    },
    btnLogin: {
        backgroundColor: '#19918F',
        marginHorizontal: 10,
        marginTop: 50,
        padding: 15,
        borderRadius: 10

    }
})
