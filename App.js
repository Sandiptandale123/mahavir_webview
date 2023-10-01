/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  Platform,
  View,
  PermissionsAndroid
} from 'react-native';
import WebView from 'react-native-webview';

const App = () => {

  useEffect(() => {
    // Platform.OS == 'ios' ? requestIosPermission() : requestCameraPermission()
    requestCameraPermission()
  }, [])


  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <WebView
        source={{ uri: 'http://mahavirclgtest.jstrading.tech/Home' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
        allowFileAccess={true}
        originWhitelist={['*']}
        mixedContentMode={'always'}
        style={{ flex: 1 }} />
    </SafeAreaView>
  );
}

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Mealland Camera Permission",
        message:
          "Mealland needs access to your camera" + ' ' +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "Ok",
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

    } else {

    }

    const grantedFile = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "Mealland File Manager Permission",
        message:
          "Mealland needs access to your storage" +
          "so you can select awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "Ok",
      },
    );
    if (grantedFile === PermissionsAndroid.RESULTS.GRANTED) {
      //console.log('You can use the file');
    } else {
      //console.log('file permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};



const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1

  },

  textStyle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },

  textStyle1: {
    marginLeft: 1,
    color: 'white'
  },
  textinputStyle: {
    width: 200, marginLeft: 10, borderTopLeftRadius: 10,
    borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderWidth: 1
  },
  touchOpacity: {
    backgroundColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 10
  },
  textSubmit: {
    color: 'white',
    fontSize: 20
  }

});

export default App;
