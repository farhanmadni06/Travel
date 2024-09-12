import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const Home2 = () => {
      const navigation = useNavigation()

    return (
        <ImageBackground style={styles.bg} source={require('../img/beachh4.jpg')}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>

                    <FontAwesome6
                        name='arrow-left-long'
                        size={30}
                        color='white'
                    />
                </TouchableOpacity>
                <Image style={{ height: 30, width: 30 }} source={require('../img/heart.png')} />
            </View>

            <View style={{ justifyContent: 'center', flex: 1, gap: 10 ,marginTop:'60%'}}>
                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold', }}>FAVORITE PLACE</Text>
                    <AntDesign
                        name='checkcircle'
                        size={17}
                        color='#FCD240'
                    />
                </View>

                <Text style={{ color: 'white', fontSize: 45, fontWeight: 'bold', }}>Kuta Beach</Text>

                <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Image source={require('../img/location.png')} />
                    <Text style={{ color: 'white', fontSize: 17, }}>Bali,Indonesia</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 17, }}>100+ people have explored</Text>
                    <Image style={{ height: 40, width: 40, borderRadius: 220, }} source={require('../img/boy.jpg')} />



                </View>
                <View style={{ marginTop: 30, gap: 10, justifyContent: 'center', flexDirection: 'row', }}>

                    <View style={{ width: '32%', height: 3, backgroundColor: 'white' }}>
                    </View>

                    <View style={{ width: '32%', height: 3, backgroundColor: 'lightgrey' }}>
                    </View>

                    <View style={{ width: '32%', height: 3, backgroundColor: 'lightgrey' }}>
                    </View>
                </View>

                <Text style={{ color: 'white', fontSize: 15, marginTop: '5%' }}>Bali is an island in Indonesia known for its verdant
                    volcanoes, unique rice terraces, beaches, and beautiful
                    coral reefs. Before becoming a tourist attraction, kuta
                    was a trading port where local products were traded to
                    buyers from outside Bali.</Text>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: '10%' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', }}>⭐ 4.8</Text>
                   
                   <TouchableOpacity onPress={()=> navigation.navigate('KutaBeach')} >
                    <AntDesign
                        name='arrowdown'
                        size={25}
                        color='white'
                    />
                    </TouchableOpacity>
                </View>




            </View>

            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5
                }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'normal', }}>$245.00</Text>
                    <Text style={{ color: 'lightgrey', fontSize: 18, fontWeight: 'normal', }}>/Person</Text>
                </View>
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Cal') }

                    style={styles.button2}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: 'black'
                    }}>Booking</Text>
                </TouchableOpacity>
            </View>


        </ImageBackground>

    )
}

export default Home2
const styles = StyleSheet.create({


    button2: {
        width: '50%',
        backgroundColor: '#FCD240',
        alignItems: 'center',
        borderRadius: 20,
        padding: '5%',
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
    ,
    bg: {
        // flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        // height: 1000,
        // width: 500,
        padding: '7%',
    }

})
