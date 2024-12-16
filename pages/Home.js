import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Box from '../components/Box';
import { cloneElement, useState } from 'react';
import Transaction from '../components/Transaction';
import Ionicons from '@expo/vector-icons/Ionicons'
import LogoutModal from '../components/ModalLogout';

export default function Home({ navigation }) {

    const [modal, setModal] = useState(false)

    const data = [
        {
            name: 'Adityo Gizwanda',
            type: 'Transfer',
            date: '08 December 2024',
            amount: 75000
        },
        {
            name: 'Adityo Gizwanda',
            type: 'Transfer',
            date: '08 December 2024',
            amount: -75000
        },
        {
            name: 'Adityo Gizwanda',
            type: 'Transfer',
            date: '08 December 2024',
            amount: 75000
        },
        {
            name: 'Adityo Gizwanda',
            type: 'Transfer',
            date: '08 December 2024',
            amount: -75000
        },
        {
            name: 'Adityo Gizwanda',
            type: 'Transfer',
            date: '08 December 2024',
            amount: -75000
        },
        {
            name: 'Adityo Gizwanda',
            type: 'Transfer',
            date: '08 December 2024',
            amount: 75000
        },
        {
            name: 'Adityo Gizwanda',
            type: 'Transfer',
            date: '08 December 2024',
            amount: 75000
        },
        {
            name: 'Adityo Gizwanda',
            type: 'Transfer',
            date: '08 December 2024',
            amount: -75000
        },
    ]

    const render = ({item}) => {
        return(
            <Transaction item={item} />
        )
    }

  return (
    <>
    <SafeAreaView>
      <View style={styles.container}>
        {/* <View style={{height: 310}}>  
        </View> */}
      <View style={{flexDirection: 'row', elevation: 3, paddingHorizontal: 20, display: 'flex', alignItems: 'center', height: 80, width: '100%', marginTop: 25}}>
        <View style={{width: 46, height: 46, borderRadius: '100%', overflow: 'hidden', borderWidth: 3, borderColor: '#19918F'}}>
          <Image source={require('../assets/icon.png')} style={{width: '100%', height: '100%'}}></Image>
        </View>
        <View style={{ marginLeft: 20}}>
          <Text style={{color: 'red', fontWeight: 700}}>Andika</Text>
          <Text >Personal Account</Text>
        </View>
        <View style={{flex: 1}}></View>
        <Image source={require('../assets/splash-icon.png')} style={{width: 46, height: 46}}></Image>
        <Ionicons name='log-out-outline' size={30} style={{color: 'black', marginLeft: 5}} onPress={() => setModal(true)} />
      </View>

      <LogoutModal modalState={[modal, setModal]} navigation={navigation}/>

      <View style={{flexDirection: 'row', paddingHorizontal: 20, display: 'flex', alignItems: 'center', height: 100, width: '100%'}}>
        <View style={{ maxWidth: '60%' }}>
          <Text style={{fontWeight: 500, fontSize: 18}}>Good Morning, Chelsea</Text>
          <Text style={{fontSize: 14}}>Check all your incoming and outgoing transaction here</Text>
        </View>
        <View style={{flex: 1}}></View>
        <Image source={require('../assets/sun.png')} style={{width: 80, height: 80, marginRight: 10}}></Image>
      </View>

      <View style={{
          flexDirection: 'row', 
          paddingHorizontal: 20, 
          display: 'flex', 
          alignItems: 'center', 
          width: '90%', 
          height:50, 
          margin: 20, 
          backgroundColor: '#19918F',
          borderRadius: 15
        }}>
        <Text style={styles.textAccount}>
            Account No.
        </Text>
        <View style={{flex: 1}}></View>
        <Text style={styles.textAccount}>100899</Text>
      </View>

      <View style={{flexDirection: 'row', paddingHorizontal: 20, display: 'flex', alignItems: 'center', height: 100, width: '100%'}}>
        <View style={{ maxWidth: '60%', margin: 10 }}>
          <Text style={{fontSize: 14}}>Balance</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: 500}}>Rp 10.000.000</Text>
            <Image source={require('../assets/eye.png')} style={{width: 20, height: 20, marginLeft: 20}}></Image>
          </View>
        </View>
        <View style={{flex: 1}}></View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TopUp')}>
            <Image source={require('../assets/plus.png')} style={{width: 20, height: 20}}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Transfer')}>
            <Image source={require('../assets/plane.png')} style={{width: 20, height: 20}}></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row', paddingHorizontal: 20, marginTop: 10, display: 'flex', alignItems: 'center', width: '100%'}}>
        <View style={{flexDirection: 'column', width: '100%'}}>
          <View style={{ Width: '100%', borderBottomWidth: 0.2, paddingBottom: 20}}>
            <Text style={{fontWeight: 500, fontSize: 18}}>Transaction History</Text>
            <View style={{flex: 1}}></View>
          </View>
          <View style={{flexDirection: 'column', width: '100%', marginTop: 10}}>
            <FlatList style={{height: 250}}
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={render}
            />
          </View>
        </View>
      </View>

    </View>
    </SafeAreaView>
  </>
  );
}

const styles = StyleSheet.create({
  textAccount: {
    fontSize: 16,
    color: 'white',
  },
  container: {
    // flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  },
  button: {
    width: 40, 
    height: 40, 
    margin: 5, 
    marginRight: 10, 
    backgroundColor: '#19918F', 
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});