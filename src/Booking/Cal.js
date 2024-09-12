import { View, Text, selected, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Calendar, LocaleConfig, CalendarList } from 'react-native-calendars';
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const transparent = 'rgba(0,0,0,0.5)'


const Cal = () => {
  const navigation = useNavigation()

  const [selected, setSelected] = useState('');


  return (
    <View style={{
      flex: 1,
      borderTopLeftRadius: 50,
      borderBottomRightRadius: 50,
      backgroundColor: "white"
    }}>


      <Text style={{ color: 'black', marginTop: '5%', fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>
        Choose Booking Date
      </Text>

      <CalendarList
        // Customize the appearance of the calendar
        style={{
          borderColor: 'gray',
          height: 740,

        }}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          selectedDayBackgroundColor: '#FCD240',
          selectedDayTextColor: 'black',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e',
        }}

        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
        }}
        // Specify the current date
        current={'2024-03-01'}


      // Callback that gets called when the user selects a day

      // Mark specific dates as marked



      />
      <View style={{ width: '20%', backgroundColor: 'grey', padding: 2, marginTop: '3%' }}>

      </View>

      <View style={{ padding: '8%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('KutaBeach')}

          style={styles.button4}>

          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16, }}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DetailBooking')}

          style={styles.button3}>

          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 16, }}>Conferm</Text>
        </TouchableOpacity>
        
      </View>

    </View>
  )
}

export default Cal
const styles = StyleSheet.create({


  button2: {
    width: '27%',
    padding: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },

  txt1: {
    marginTop: '10%',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10%'
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  box1: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    padding: '6%',
    flexDirection: 'row',
    borderColor: 'green',
  },
  box2: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    padding: '6%',
    flexDirection: 'row',
    borderColor: 'lightgrey',
  },

  txttop: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  heart: {

    width: '22%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    marginRight: 10,
    marginTop: 10

  },
  button1: {
    width: '27%',
    padding: '4%',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'green',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  button3: {
    width: '47%',
    padding: '4%',
    borderRadius: 15,
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#FCD240'

  },
  button4: {
    width: '47%',
    padding: '4%',
    borderRadius: 15,
    borderColor: 'lightgrey',
    gap: 10,
    alignItems: 'center',
    borderWidth: 1,

  }


})