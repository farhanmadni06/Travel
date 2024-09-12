import { View, Text, ImageBackground, Modal, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { Calendar, LocaleConfig } from 'react-native-calendars';

const transparent = 'rgba(0,0,0,0.5)'


const KutaBeach = () => {
    const navigation = useNavigation()

    const Images = [
        {
            img: require('../img/plane.png'),
            txt: 'Flight',
        },
        {
            img: require('../img/bus.png'),
            txt: 'Transport'
        }, {
            img: require('../img/hotel.png'),
            txt: 'Hotel'

        },

    ]
    const Images2 = [
        {
            img: require('../img/boy.jpg'),
            tx1: 'Yelena Belova',
            txt2: ' ⭐️  ⭐️  ⭐️  ⭐️  ⭐️',
            txt3: 'Pretty nice. The entrance is quite far from the\nparking lot but wouldnt be much of a problem\nif it wasnt raining. Love the interior !',
            txt4: ' Today',

        },
        {
            img: require('../img/boy.jpg'),
            tx1: 'Yelena Belova',
            txt2: ' ⭐️  ⭐️  ⭐️  ⭐️  ⭐️',
            txt3: 'Pretty nice. The entrance is quite far from the\nparking lot but wouldnt be much of a problem\nif it wasnt raining. Love the interior !',
            txt4: ' Today',

        }, {
            img: require('../img/boy.jpg'),
            tx1: 'Yelena Belova',
            txt2: ' ⭐️  ⭐️  ⭐️  ⭐️  ⭐️',
            txt3: 'Pretty nice. The entrance is quite far from the\nparking lot but wouldnt be much of a problem\nif it wasnt raining. Love the interior !',
            txt4: ' Today',


        },

    ]



    return (
        <View style={{ flex: 1, }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ padding: '7%' }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity
                         onPress={() => navigation.navigate('Home2')}
                        >

                            <FontAwesome6
                                name='arrow-left-long'
                                size={30}
                            />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Kuta Beach</Text>
                        <Image style={{ height: 30, width: 30 }} source={require('../img/heart.png')} />

                    </View>



                    <ImageBackground style={{
                        marginEnd: 10,
                        flexDirection: 'row',
                        padding: '10%',
                        marginTop: '10%',
                        width: 385,
                        height: 257,
                        borderRadius: 20,

                    }}
                        source={require('../img/beachmain.png')}>
                        <View style={styles.heart}>
                            <AntDesign
                                name='checkcircle'
                                size={17}
                                color='#FCD240'
                            />
                        </View>

                        <View style={{ alignSelf: 'flex-end', gap: 10 }}>
                            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 23, }}>Kuta Beach</Text>

                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                                <Image source={require('../img/location.png')} />
                                <Text style={{ color: 'white' }}>Bali,Indonesia</Text>
                            </View>

                            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <Text style={{ color: 'white' }}>100+ people have explored</Text>
                                <Image style={{ height: 30, width: 30, borderRadius: 20, }} source={require('../img/boy.jpg')} />

                            </View>

                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Text style={{ fontSize: 15, color: 'white' }}>⭐ ⭐ ⭐ ⭐ ☆ </Text>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', }}>4.8</Text>
                            </View>

                        </View>


                    </ImageBackground>

                    <Text style={styles.txt1}>What's Include ?</Text>


                </View>

                <FlatList

                    data={Images}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: '3%', paddingRight: '2%', gap: 50 }}
                    horizontal={true}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.row}>
                                <Image style={{ height: 40, width: 40 }} source={item.img} />
                                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', }}>{item.txt}</Text>
                            </View>
                        )
                    }}
                />

                <View style={{ padding: '7%' }}>
                    <Text style={styles.txt1}>About Trip</Text>

                    <Text style={{ color: 'black', marginTop: '5%' }}>
                        Boli is an island in Indonesia known for its verdant
                        volcanoes, unique rice terraces, beoches, and beautiful
                        coral reefs. Before becoming a tourist attraction, Kuta
                        was a trading port where local products were traded to
                        buyers from outside Bali.
                    </Text>

                    <Text style={{ marginTop: '5%', color: 'black' }}>See beautiful Bali and help us keep it that way by joining
                        this EcoTour of a Bali village. All proceeds from the
                        EcoTour are donated to the Tangkas Village Recycling
                        Center. Expert Friendly Service</Text>

                    <Text style={styles.txt1}>Gallery photo</Text>

                    <View style={{ flexDirection: 'row', marginTop: '5%', justifyContent: 'space-between' }}>
                        <Image style={{ height: 100, width: 100, borderRadius: 20, }} source={require('../img/Package.png')} />
                        <Image style={{ height: 100, width: 100, borderRadius: 20, }} source={require('../img/Package.png')} />



                        <ImageBackground imageStyle={{ borderRadius: 20 }} style={{ height: 100, width: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 30, }} source={require('../img/Package1.png')}>
                            <View style={{ ...StyleSheet.absoluteFillObject, borderRadius: 20, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center' }}>

                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white', fontSize: 20, }} >20+</Text>
                            </View>

                        </ImageBackground>
                    </View>

                    <ImageBackground style={{ padding: '5%', marginTop: '10%', width: 385, height: 200 }} source={require('../img/maps.png')}>

                        <View style={{
                            marginTop: '25%',
                            padding: 2,
                            justifyContent: 'space-between',
                            borderRadius: 10,
                            backgroundColor: 'white',
                            width: '12%',
                            height: '50%',
                            alignItems: 'center',
                            alignSelf: 'flex-end',
                        }}>
                            <AntDesign
                                name="plus"
                                size={30}
                                color='black'
                            />

                            <AntDesign
                                name='minus'
                                size={30}
                                color='black'
                            />
                        </View>


                    </ImageBackground>

                    <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', }}>
                            Review(99)
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>⭐️ 4.8</Text>
                    </View>

                    <FlatList

                        data={Images2}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingLeft: '3%', paddingRight: '2%', gap: 50 }}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <View style={{ flexDirection: 'row', gap: 15 }}>
                                        <Image style={{ width: 40, height: 40, borderRadius: 20, }} source={item.img} />
                                        <View style={{ gap: 10 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ color: 'black' }}>
                                                    {item.tx1}
                                                </Text>

                                                <Text>{item.txt4}</Text>

                                            </View>
                                            <Text style={{ color: 'black' }}>
                                                {item.txt2}
                                            </Text>
                                            <Text style={{ color: 'black' }}>
                                                {item.txt3}
                                            </Text>

                                        </View>
                                    </View>

                                </View>

                            )
                        }}
                    />






                    <View style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: '20%'
                    }}>
                        <View style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 5
                        }}>
                            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'normal', }}>$245.00</Text>
                            <Text style={{ color: 'lightgrey', fontSize: 18, fontWeight: 'normal', }}>/Person</Text>
                        </View>
                        <TouchableOpacity
                            onPress={()=> navigation.navigate('Cal') }
                            style={styles.button2}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: 15,
                                color: 'black'
                            }}>Booking
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </ScrollView >



        </View >
    )
}

export default KutaBeach
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
        marginTop: '5%',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },

    row: {
        marginEnd: 10,
        flexDirection: 'row',
        marginTop: '10%',
        alignItems: 'center',
        gap: 15


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


        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
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
    },
    button3: {
        width: '47%',
        padding: '4%',
        borderRadius: 15,
        gap: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor:'lightgrey'
        // backgroundColor: '#FCD240'
    
      },

})
