import { View, Text, StyleSheet, TextInput, FlatList ,Image} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const WishList = () => {
    const navigation = useNavigation()


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
            img2: require('../img/heart.png'),
            txt2: '$545,00 ',
            txt3: '⭐ ⭐ ⭐ ⭐  4.8',
            txt4: 'A resort is a place used for\nvacation ,relaxation or as a day....',
        },
        {
            img: require('../img/Package.png'),
            txt1: 'Kuta Resort',
            img2: require('../img/heart.png'),
            txt2: '$745,00 ',
            txt3: '⭐ ⭐ ⭐ ⭐  4.8',
            txt4: 'A resort is a place used for\nvacation ,relaxation or as a day....',
        },
    


    ]

    return (
        <View style={{ flex: 1, padding: '7%' }}>

            <Text style={styles.txttop}>Your Wishlist</Text>

            <View style={{
                width: '100%',
                padding: '2%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderRadius: 20,
                borderColor: 'lightgrey',
                marginTop: '10%'
            }}>
                <TextInput
                    placeholder='Search destination'
                />
                <Feather
                    name='search'
                    size={30}
                    color='black'
                />
            </View>
            <FlatList

                data={Images3}
                showsHorizontalScrollIndicator={false}

                renderItem={({ item }) => {
                    return (
                        <View style={{
                            marginLeft: 20,
                            flexDirection: 'row',
                            marginTop: '20%',
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
    )
}

export default WishList
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



})