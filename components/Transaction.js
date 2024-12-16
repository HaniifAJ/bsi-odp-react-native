import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView } from 'react-native';

export default function Transaction({ item }) {
    return (
            <View style={{width: '100%', flexDirection: 'row', paddingVertical: 5}}>
              <Image source={require('../assets/splash-icon.png')} style={{width: 46, height: 46}}></Image>
              <View style={{flexDirection: 'column'}}>
                <Text>
                  {item.name}
                </Text>
                <Text style={{fontSize: 12}}>
                  {item.type}
                </Text>
                <Text style={{fontWeight: 100, fontSize: 12}}>
                  {item.date}
                </Text>
              </View>
              <View style={{flex: 1}}></View>
              <Text style={{verticalAlign: 'middle', color: (item.amount < 0 ? 'red' : 'green')}}>
                {`${item.amount < 0 ? '-' : '+' } Rp ${Intl.NumberFormat('id-ID').format(Math.abs(item.amount))}`}
              </Text>
            </View>
    )
}