import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Signin from './components/Signin';
import TermsAndConditions from './components/TermsAndConditions';
import SelectOptions from './components/SelectOptions';
import Dashboard from './components/Dashboard';
import ShowEmail from './components/ShowEmail';

// INFLUENCER SCREEN

import EventsList from './components/IEventsList';
import SingleEvent from './components/SingleEvent';
import Profile from './components/Profile';
import Profile2 from './components/Profile2';
import ProfileDetails from './components/ProfileDetails';
import ProfilePremium from './components/ProfilePremium';
import ImageUpload from './components/ImageUpload';
import ImageCache from './components/ImageCache';
import CreateEvent from './components/CreateEvent';
import SingleImage from './components/SingleImage';
import Campaign from './components/Campaign';
import Email from './components/Email';
import SingleYourCampaign from './components/SingleYourCampaign';
import SingleNewCampaign from './components/SingleNewCampaign';
import CreateEmail from './components/CreateEmail';
import PayoutRequest from './components/PayoutRequest';
import Payroll from './components/Payroll';
import Bank from './components/Bank';
import Signup2 from './components/Signup2';
import Payout from './components/Payout';
import IEvent from './components/IEvent';
import INotification from './components/INotification';
import Requests from './components/Requests';

// MANUFACTURER SCREEN

import MFooter from './components/MFooter';
import AdminChat from './components/AdminChat';
import MDashboard from './components/MDashboard';
import MImage from './components/MImage';
import MImageSingle from './components/MImageSingle';
import MEvent from './components/MEvent';
import MCreateEvent from './components/MCreateEvent';
import MProfile2 from './components/MProfile';
import MCampaign from './components/MCampaign';
import MSingleYourCampaign from './components/MSingleYourCampaign';
import MNotification from './components/MNotification';

//  import DashboardM from './components/DashboardM'

//  import Bubbles from './components/Bubbles'
//  import checkbubble from './components/checkbubble'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import This from './components/0000';

export default function App() {
  return (
    <View style={styles.container}>
     <Welcome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',

    paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
    // padding: 8,
  },
});
