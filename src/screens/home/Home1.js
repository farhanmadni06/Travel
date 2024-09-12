import { View, Text, Image, TextInput, StyleSheet, FlatList, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const Home1 = () => {
  const navigation = useNavigation()


  const Images = [
    {
      img: require('../img/beach22.png'),
      txt: 'beach',
    },
    {
      img: require('../img/mount2.png'),
      txt: 'Mountain'
    }, {
      img: require('../img/forest2.png'),
      txt: 'Forest'

    },
    {
      img: require('../img/ocean2.png'),
      txt: 'Ocean'

    },
    {
      img: require('../img/camp2.png'),
      txt: 'Camp',

    },
    {
      img: require('../img/fish2.png'),
      txt: 'Fish',

    },
  ]

  const Images2 = [
    {
      img: require('../img/home.png'),
      txt1: 'Kuta beach',
      img2: require('../img/heart.png'),
      img3: require('../img/location.png'),
      txt2: 'Bali,Indonesia ',
      txt3: '⭐ ⭐ ⭐ ⭐ ★ 4.8',

    },
    {
      img: require('../img/home.png'),
      txt1: 'Kuta beach',
      img2: require('../img/heart.png'),
      img3: require('../img/location.png'),
      txt2: 'Bali,Indonesia ',
    },
    {
      img: require('../img/home.png'),
      txt1: 'Kuta beach',
      img2: require('../img/heart.png'),
      img3: require('../img/location.png'),
      txt2: 'Bali,Indonesia ',
    },
    {
      img: require('../img/home.png'),
      txt1: 'Kuta beach',
      img2: require('../img/heart.png'),
      img3: require('../img/location.png'),
      txt2: 'Bali,Indonesia ',
    },

  ]
  const Images3 = [
    {
      img: require('../img/Package.png'),
      txt1: 'Kuta Resort',
      img2: require('../img/heart2.png'),
      txt2: '$745,00 ',
      txt3: '⭐ ⭐ ⭐ ⭐  4.8',
      txt4: 'A resort is a place used for\nvacation ,relaxation or as a day....',
    },
    {
      img: require('../img/Package.png'),
      txt1: 'Jepara Resort',
      img2: require('../img/heart2.png'),
      txt2: '$545,00 ',
      txt3: '⭐ ⭐ ⭐ ⭐  4.8',
      txt4: 'A resort is a place used for\nvacation ,relaxation or as a day....',
    },
    {
      img: require('../img/Package.png'),
      txt1: 'Kuta Resort',
      img2: require('../img/heart2.png'),
      txt2: '$745,00 ',
      txt3: '⭐ ⭐ ⭐ ⭐  4.8',
      txt4: 'A resort is a place used for\nvacation ,relaxation or as a day....',
    },

  ]

  return (
    <View style={{ flex: 1, }}>

      <ScrollView>

        <View style={{ padding: '5%' }}>
          <View style={styles.row}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Image style={{ height: 50, width: 50, borderRadius: 30, }} source={require('../img/boy.jpg')} />
              <Text style={{ color: 'black', fontSize: 17, fontWeight: 'bold', }}>Hello , Pristia!</Text>
            </View>
            <Feather
              name='bell'
              size={40}
            />
          </View>

          <Text style={{
            marginTop: 10,
            fontWeight: 'bold',
            fontSize: 40,
            color: 'black'
          }}>Where do you want to explore today?</Text>

          <View style={{ width: '90%', padding: '6%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TextInput
              placeholder='Search destination'
            />
            <Feather
              name='search'
              size={30}
              color='black'
            />
          </View>


          <View style={styles.row}>
            <Text style={styles.txt1}>Choose Category</Text>

            <Text style={{
              marginTop: 10,
              fontWeight: 'bold',
              fontSize: 20,
            }}>See All</Text>
          </View>
          <View style={styles.row2}>
            <FlatList

              data={Images}
              showsHorizontalScrollIndicator={false}

              horizontal={true}
              renderItem={({ item }) => {
                return (
                  <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item.img} />
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', }}>{item.txt}</Text>
                  </View>
                )
              }}
            />

          </View>
          <View style={styles.row}>
            <Text style={styles.txt1}>Favorite Place</Text>

            <Text style={{
              marginTop: 10,
              fontSize: 20,
            }}>Explore</Text>
          </View>

        </View>





        <FlatList

          data={Images2}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: '3%', paddingRight: '2%' }}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Home2')} >
                <ImageBackground style={{
                  marginEnd: 10,
                  flexDirection: 'row',
                  height: 280,
                  width: 210,
                  padding: '10%',
                  marginTop: '10%',

                }}
                  source={item.img}>
                  <View style={styles.heart}>
                    <Image source={item.img2} />
                  </View>

                  <View style={{ alignSelf: 'flex-end', gap: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 23, }}>{item.txt1}</Text>

                    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                      <Image source={item.img3} />
                      <Text style={{ color: 'white' }}>{item.txt2}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 5 }}>
                      <Text style={{ fontSize: 15, }}>⭐ ⭐ ⭐ ⭐ ☆ </Text>
                      <Text style={{ color: 'white' }}>4.8</Text>
                    </View>

                  </View>


                </ImageBackground>
              </TouchableOpacity>
            )
          }}
        />

        <View style={{ padding: '5%' }}>

          <View style={styles.row}>
            <Text style={styles.txt1}>Popular Package</Text>

            <Text style={{
              fontSize: 20,
            }}>See All</Text>
          </View>

          <FlatList

            data={Images3}
            showsHorizontalScrollIndicator={false}

            renderItem={({ item }) => {
              return (
                <View style={{
                  marginLeft: 20,
                  flexDirection: 'row',
                  marginTop: '10%',
                  gap: 15,

                }}>
                  <Image style={{ width: 105, height: 140 }} source={item.img} />

                  <View style={{ gap: 10, justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                      <Text style={{ fontSize: 20, fontWeight: 'bold', }}>{item.txt1}</Text>
                      <Image source={item.img2} />
                    </View>
                    <Text style={{ fontSize: 20, color: 'red', }}>{item.txt2}</Text>
                    <Text>{item.txt3}</Text>
                    <Text>{item.txt4}</Text>
                  </View>
                </View>
              )
            }}
          />

        </View>



      </ScrollView>
    </View>

  )
}

export default Home1
const styles = StyleSheet.create({


  button2: {
    width: '90%',
    backgroundColor: '#FCD240',
    alignItems: 'center',
    borderRadius: 10,
    padding: 14,
    alignSelf: 'center',
    marginBottom: 5


  },

  txt1: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box2: {
    width: '35%',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },
  box3: {
    width: '35%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
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

  }


})