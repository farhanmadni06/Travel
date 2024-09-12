import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home1 from './Home1';
import MyTrip from '../Bottom/MyTrip';
import WishList from '../Bottom/WishList';
import Profile from '../Bottom/Profile';
import Icon from 'react-native-vector-icons/Ionicons'







const BottomNav = () => {
    const Bottom = createBottomTabNavigator()


    return (
        <Bottom.Navigator screenOptions={({ route }) => ({
            headerShow: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor:'white',
            tabBarInactiveTintColor:'black',
            tabBarStyle:{paddingHorizontal:'5%',height: '10%',},

            tabBarIcon: ({ color, size, fontWeight, focused }) => {
                let iconName;
                let label;
                switch (
                route.name
                
                ) {
                    case 'Home1': iconName = 'home-outline'; label = 'Home'; break;
                    case 'MyTrip': iconName = 'paper-plane-outline'; label = 'MyTrip'; break;
                    case 'WishList': iconName = 'heart-outline'; label = 'WishList'; break;
                    case 'Profile': iconName = 'person-outline'; label = 'Profile'; break;
                }



                return (

                    <View style={{
                        backgroundColor:focused ?  'black': 'transparent',
                        borderRadius:25,
                        paddingHorizontal:'15%',
                        paddingVertical:'10%',
                        alignItems: 'center', 
                        flexDirection: 'row', 
                        gap: 10 ,
                        
                        }}>

                        <Icon
                            name={iconName}
                            color={color}
                            size={30}
                            
                        />
                        {focused && (<Text style={{color:'white',fontWeight: 'bold',}}>{label}</Text>
                        )}
                    </View>
                )
            }

        })} >
            <Bottom.Screen name='Home1' component={Home1} />



            <Bottom.Screen name='MyTrip' component={MyTrip} />


            <Bottom.Screen name='WishList' component={WishList} />


            <Bottom.Screen name='Profile' component={Profile} />
        </Bottom.Navigator>
    )
}

export default BottomNav