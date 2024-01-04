import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { Dimensions } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { Card, ListItem, Button, Icon } from 'react-native-elements';

// import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// You can import from local files

import axios from 'axios'

// or any pure javascript modules available in npm

const users = [
  {
    name: 'Campaign 0',
    avatar:
      'https://www.stlmag.com/downloads/278430/download/muny.jpg?cb=b7655e08e07ab05144d8c0d2e975dae6&w=1200',
  },
  {
    name: 'Campaign 2',
    avatar:
      'https://www.stlmag.com/downloads/278430/download/muny.jpg?cb=b7655e08e07ab05144d8c0d2e975dae6&w=1200',
  },
  {
    name: 'Campaign 3',
    avatar:
      'https://www.stlmag.com/downloads/278430/download/muny.jpg?cb=b7655e08e07ab05144d8c0d2e975dae6&w=1200',
  },
  {
    name: 'Campaign 4',
    avatar:
      'https://www.stlmag.com/downloads/278430/download/muny.jpg?cb=b7655e08e07ab05144d8c0d2e975dae6&w=1200',
  },
  {
    name: 'Campaign 5',
    avatar:
      'https://www.stlmag.com/downloads/278430/download/muny.jpg?cb=b7655e08e07ab05144d8c0d2e975dae6&w=1200',
  },
  {
    name: 'Campaign 5',
    avatar:
      'https://www.stlmag.com/downloads/278430/download/muny.jpg?cb=b7655e08e07ab05144d8c0d2e975dae6&w=1200',
  },
  {
    name: 'Campaign 5',
    avatar:
      'https://www.stlmag.com/downloads/278430/download/muny.jpg?cb=b7655e08e07ab05144d8c0d2e975dae6&w=1200',
  },
  {
    name: 'Campaign 5',
    avatar:
      'https://www.stlmag.com/downloads/278430/download/muny.jpg?cb=b7655e08e07ab05144d8c0d2e975dae6&w=1200',
  },
];

let filtered_users = [...users];

let copy =[]

export default function Welcome({ navigation, route }) {
  const [loaded] = Font.useFonts({
    Acme: require('../assets/fonts/Acme-Regular.ttf'),
    Montserrat: require('../assets/fonts/Montserrat-Medium.ttf'),
  });
  const [checked, setChecked] = React.useState('first');
  const [events, setEvents] = React.useState(filtered_users);
   const [values, setValues] = React.useState([]);

    const { auth } = route.params;
   React.useEffect(() => {
    axios
      .get(
        'https://socialmonkey.media/public/api/influncer/campaign/yourcampaign',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${auth.token_type} ${auth.access_token}`,
          },
        }
      )
      .then((res) => {
        setValues([...res.data.data.data]);
        copy = [...res.data.data.data];
        console.log('Copy', copy);
        console.log('current values ', values);
        // setRendered(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          style={{ paddingHorizontal: 20 }}
          name="ios-notifications-outline"
          size={24}
          color="white"
        />
      ),
      headerLeft: () => (
        <TouchableHighlight onPress={() => navigation.goBack()}><Ionicons
          style={{ paddingHorizontal: 20 }}
          name="ios-arrow-back"
          size={24}
          color="white"
        /></TouchableHighlight>
      ),
    });
  }, []);

  if (!loaded) {
    return null;
  }

  let filterEvents = (text) => {
    console.log("asdasd",text)
    // setEvents([{
    //   name: text,
    //   avatar:
    //     'https://www.stlmag.com/downloads/278430/download/muny.jpg?cb=b7655e08e07ab05144d8c0d2e975dae6&w=1200',
    // }]);

    if (text) {
      setValues(
        copy.filter((ev) =>
          ev.title.toLowerCase().includes(text.trim().toLowerCase())
        )
      );
    } else {
      setValues(copy);
    }
  };

  const eventslabel = [
    {
      label: 'Search by Title',
      value: 'title',
    },
    {
      label: 'Search by Area',
      value: 'area',
    },
  ];

  const placeholder = {
    label: 'Select',
    value: null,
    color: '#9EA0A4',
  };

  return (
    <ImageBackground
      source={require('../assets/images/layouts/signup.png')}
      style={styles.container}>
      <View style={styles.nested}>
        <View style={styles.content}>
         
          <SafeAreaView>
              <ScrollView style={styles.scrollView}>
                <Card
                  containerStyle={{
                    padding: 0,
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                  }}>
                  {values.map((u, i) => {
                    return (
                      <TouchableHighlight
                      onPress={() =>
                        navigation.navigate('SingleYourCampaign', { campaign: u, auth })
                      }><View
                        key={i}
                        style={{
                          // border: '1px solid orange',
                          marginVertical: 3,
                          padding: 10,
                          paddingTop: 5,
                          borderRadius: 15,
                          backgroundColor: 'white',
                          borderColor: '#FF296D',
                          boxSizing: 'border-box',
                          boxShadow: '2px 2px 15px #047B2D',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}>
                          <View>
                            <Text
                              style={{
                                fontFamily: 'Acme',
                                fontSize: 25,
                                marginVertical: 5,
                              }}>
                              {u.title}
                            </Text>

                            <Text
                              style={{
                                fontFamily: 'Acme',
                                fontSize: 15,
                                marginVertical: 5,
                              }}>
                              {u.start_date} - {u.end_date}
                            </Text>
                          </View>
                          <Image
                            style={{ height: 75, width: 75, borderRadius: 15 }}
                            resizeMode="cover"
                            source={{ uri: u.avatar }}
                          />
                        </View>
                      </View>
                      </TouchableHighlight>
                    );
                  })}
                </Card>
              </ScrollView>
            </SafeAreaView>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonsection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },

  content: {
    paddingVertical: 0,

    flex: 1,
    justifyContent: 'space-even',
    //border: '1px solid white',
  },

  nested: {
    flex: 1,
    marginTop: 50,
  },

  scrollView: {
    height: 500,
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

  textInput: {
    borderWidth: 2,
    borderColor: '#047B2D',
    borderStyle: 'solid',
    boxSizing: 'border-box',
    //     shadowOffset:{  width: 1,  height: 1 },
    // shadowColor: '#FF296D',
    // shadowOpacity: 1.0,
    boxShadow: '1px 1px 10px #FF296D',

    borderRadius: 5,
    color: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontFamily: 'Acme',
  },

  textLabel: {
    paddingVertical: 10,
    fontFamily: 'Acme',
    fontSize: 14,
    color: 'white',
  },
  imageBorder: {
    background: 'rgba(0, 0, 0, 0.35)',
    borderRadius: 10,
    padding: 4,
  },
});
