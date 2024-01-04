import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { Dimensions } from 'react-native';


import SelectOptions from './SelectOptions'

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';




export default function Welcome() {

  const [state, setState] = React.useState(false);


  const [loaded] = Font.useFonts({
    Acme: require('../assets/fonts/Acme-Regular.ttf'),
    Montserrat: require('../assets/fonts/Montserrat-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }


  gotoNext = () => {
    setState(true)
  }

  return (!state)?(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{ fontFamily: 'Acme', fontSize: 64, color: 'white' }}>
          Let’s Get Started
        </Text>
        <Text style={{ fontFamily: 'Acme', fontSize: 16, color: 'white' }}>
          Market your products through the talented influencers.
        </Text>
        <Image
          style={{
            height: 200,
            width: 200,
            alignSelf: 'center',
            marginVertical: 40,
          }}
          source={require('../assets/images/logo_2.PNG')}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#047B2D',
            // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 10,
            alignSelf: 'stretch',
          }}
          onPress={() => gotoNext()}>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontSize: 16,
              color: 'white',
              textAlign: 'center',
              paddingVertical: 14,
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ):(<SelectOptions/>);
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 30,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,

    background: 'rgb(2,0,36)',
    background:
      'linear-gradient(234deg, rgba(2,0,36,1) 0%, rgba(255,41,109,1) 0%, rgba(5,216,232,1) 100%)',

    // backgroundColor:'black'

    // backgroundColor: '#ecf0f1',
    // padding: 8,
  },

  lvector: {
    position: 'absolute',
    width: 989,
    height: Dimensions.get('window').height,
    left: -125,
    top: 0,

    background:
      'linear-gradient(211.33deg, #FF296D 3.12%, rgba(196, 196, 196, 0.1) 80.05%)',
  },

  rvector: {
    position: 'absolute',
    width: 1132,
    height: Dimensions.get('window').height,
    left: -699,
    top: 0,

    background:
      'linear-gradient(148.67deg, #05D8E8 -1.99%, rgba(196, 196, 196, 0.9) 40.05%)',
  },

  bgblur: {
    position: 'absolute',
    borderWidth: 1,
    borderStyle: 'solid',

    height: Dimensions.get('window').height,
  },
});
