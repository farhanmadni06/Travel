import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Splash from './src/screens/Onboarding/Splash'
import Slider1 from './src/screens/Onboarding/Slider1'
import SignUp from './src/screens/login/SignUp'
import Forgot from './src/screens/login/Forgot'
import NewPassword from './src/screens/login/NewPassword'
import CreateAccount from './src/screens/login/CreateAccount'
import CreateAccount2 from './src/screens/login/CreateAccount2'
import CreateAccount3 from './src/screens/login/CreateAccount3'
import CreateAccount4 from './src/screens/login/CreateAccount4'
import Explore from './src/screens/login/Explore'
import Explore2 from './src/screens/login/Explore2'
import Home1 from './src/screens/home/Home1'
import Home2 from './src/screens/home/Home2'
import KutaBeach from './src/screens/home/KutaBeach'
import DetailBooking from './src/Booking/DetailBooking'
import Cal from './src/Booking/Cal'
import Payment1 from './src/Booking/Payment1'
import Payment2 from './src/Booking/Payment2'
import MyTrip from './src/screens/Bottom/MyTrip'
import WishList from './src/screens/Bottom/WishList'
import BookingComplete from './src/Booking/BookingComplete'
import MyList from './src/screens/Bottom/MyTrip'
import BottomNav from './src/screens/home/BottomNav'
import Profile from './src/screens/Bottom/Profile'
import Notify from './src/screens/home/Notify'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Bottom = createBottomTabNavigator();





const App = () => {
  const [splash, setsplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setsplash(false)
    }, 2000);
  }, [])


  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{   headerShown: false }}>
        {splash ?

          <Stack.Screen name="Splash" component={Splash} />
          :
          <>
            <Stack.Screen name="Slider1" component={Slider1} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Forgot" component={Forgot} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="CreateAccount2" component={CreateAccount2} />
            <Stack.Screen name='CreateAccount3' component={CreateAccount3} />
            <Stack.Screen name="CreateAccount4" component={CreateAccount4} />
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="Explore2" component={Explore2} />
            <Stack.Screen name="BottomNav" component={BottomNav} />
            <Stack.Screen name="Home2" component={Home2} />
            <Stack.Screen name="KutaBeach" component={KutaBeach} />
            <Stack.Screen name="DetailBooking" component={DetailBooking} />
            <Stack.Screen name="Cal" component={Cal} />
            <Stack.Screen name="Payment1" component={Payment1} />
            <Stack.Screen name="Payment2" component={Payment2} />
            <Stack.Screen name="BookingComplete" component={BookingComplete} />
          </>

        }
      </Stack.Navigator>
    </NavigationContainer>


    // <Profile />



  )
}

export default App