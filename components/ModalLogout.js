import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Button, View, SafeAreaView, Pressable, ScrollView} from 'react-native';

export default function LogoutModal({modalState = useState(false), navigation}) {
  const [modalVisible, setModalVisible] = modalState;
  return (
    <SafeAreaView style={styles.centeredView}>
        <Modal 
        onRequestClose={() => setModalVisible(false)} //perintah menutup modal
        visible={modalVisible} // mengatur modal muncul
        presentationStyle='pageSheet' // untuk mengatur tampilan modal (untuk ios aza)
        animationType="slide" // untuk mengatur animasi modal
        transparent={true} // untuk mengatur transparansi modal
        >
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Konfirmasi Logout</Text>
              <View style={{flexDirection: 'row', gap: 30}}>
                <Button title="Cancel" onPress={() => setModalVisible(false)} />
                <Button color={'red'} title="Logout" onPress={() => {setModalVisible(false); navigation.navigate('Login')}} />
              </View>
            </View>
        </Modal>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    marginVertical: 'auto',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'justify',
  },
});