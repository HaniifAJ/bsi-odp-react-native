import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView } from 'react-native';

export default function Transaction({ value }) {
    return (
            <View style={{width: '100%', flexDirection: 'row', paddingVertical: 5}}>
              <Image source={require('../assets/splash-icon.png')} style={{width: 46, height: 46}}></Image>
              <View style={{flexDirection: 'column'}}>
                <Text>
                  Adityo Gizwanda
                </Text>
                <Text style={{fontSize: 12}}>
                  Transfer
                </Text>
                <Text style={{fontWeight: 100, fontSize: 12}}>
                  08 December 2024
                </Text>
              </View>
              <View style={{flex: 1}}></View>
              <Text style={{verticalAlign: 'middle'}}>
                {value}
              </Text>
            </View>
    )
}