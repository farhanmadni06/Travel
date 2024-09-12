import { View, Text, Image,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const BookingComplete = () => {
    const navigation = useNavigation()

    return (
        <View style={{ padding: '7%', flex: 1 }}>


            <View style={{ alignItems:'center',justifyContent:'center',flex:1 }}>
            
                <Image style={{height:150,width:150,}} source={require('../screens/img/comp.png')} />
            
            <View style={{alignSelf:'flex-start',marginTop:'20%'}}>
                <Text style={{fontWeight: 'bold',fontSize: 40,color:'black'}}>Booking Successfully</Text>
                <Text style={{fontSize: 18,marginTop:'7%'}}>Get everything ready until it's time to go            on a trip!</Text>

                </View>
            </View>

            <TouchableOpacity
          onPress={() => navigation.navigate('BottomNav')}
          style={styles.button2}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>Explore Other Places</Text>
        </TouchableOpacity>

        </View>
    )
}

export default BookingComplete

const styles = StyleSheet.create({


    button2: {
      width: '100%',
      backgroundColor: '#FCD240',
      alignItems: 'center',
      borderRadius: 15,
      padding: '5%',
      alignSelf: 'center',
      marginTop: 20,
    },
    
  
  },
  
  )