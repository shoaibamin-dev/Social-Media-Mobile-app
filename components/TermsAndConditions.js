import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { Dimensions } from 'react-native';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Welcome() {
  const [loaded] = Font.useFonts({
    Acme: require('../assets/fonts/Acme-Regular.ttf'),
    Montserrat: require('../assets/fonts/Montserrat-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require('../assets/images/layouts/tandc.png')}
      style={styles.container}>
     
      <View style={styles.nested}>
        <SafeAreaView >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View>
            <Text
              style={{
                fontFamily: 'Acme',
                fontSize: 50,
                color: 'white',
                marginVertical: 10,
              }}>
              Terms and Conditions
            </Text>
          </View>

          <View
        
          
          ><Text
            style={{
                fontFamily: 'Acme',
                fontSize: 17,
                color: 'white',
                marginVertical: 10,
              }}>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.{"\n\n"}

            Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.{"\n\n"}

            You are granted limited license only for purposes of viewing the material contained on this Website.{"\n"}

            Looking for a Privacy Policy? Visit our website:{"\n"}
            <Text style={{color:'blue'}}>https://policies.google.com/privacy?hl=en-US</Text>
            </Text>
          </View>

           <View>
            <Text
              style={{
                fontFamily: 'Acme',
                fontSize: 50,
                color: 'white',
                marginVertical: 10,
              }}>
              Privacy Policy
            </Text>
          </View>

          <View
        
          
          ><Text
            style={{
                fontFamily: 'Acme',
                fontSize: 17,
                color: 'white',
                marginVertical: 10,
              }}>These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.{"\n\n"}

            Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.{"\n\n"}

            You are granted limited license only for purposes of viewing the material contained on this Website.{"\n"}

            Looking for a Privacy Policy? Visit our website:{"\n"}
            <Text style={{color:'blue'}}>https://policies.google.com/privacy?hl=en-US</Text>
            </Text>
          </View>


        <TouchableOpacity
          style={{
            backgroundColor: '#047B2D',
            // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 10,
            marginTop:10,
            alignSelf: 'stretch',
          }}
          onPress={() => console.log('pressed')}>
          <Text
            style={{
              fontFamily: 'Montserrat',
              fontSize: 14,
              color: 'white',
              textAlign: 'center',
              paddingVertical: 14,
            }}>
            I agree, Register my account
          </Text>
        </TouchableOpacity>

         
        </View>
         </ScrollView>
      </SafeAreaView>



      </View>
     
   

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    border: '1px solid blue',
  },

  nested: {
    flex: 1,
  },

  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

    paddingTop: Constants.statusBarHeight,

    border: '1px solid white',

    backgroundColor: 'rgba(0, 0, 0, 0.9)',

    // backgroundColor: '#ecf0f1',
    // padding: 8,
  },

scrollView:{
  // height:500
}
 
});
