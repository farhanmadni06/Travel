import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'

const Explore2 = () => {
    const [selectedItems, setSelectedItems] = useState([]); // State to track selected items

    const Images = [
        { img: require('../img/beach.png'), txt: 'Beach' },
        { img: require('../img/mount.png'), txt: 'Mountain' },
        { img: require('../img/forest.png'), txt: 'Forest' },
        { img: require('../img/ocean.png'), txt: 'Ocean' },
        { img: require('../img/camp.png'), txt: 'Camp' },
        { img: require('../img/fish.png'), txt: 'Fish' },
    ];

    // Toggle item selection
    const toggleSelection = (index) => {
        if (selectedItems.includes(index)) {
            // Remove item if already selected
            setSelectedItems(selectedItems.filter(i => i != index));
        } else {
            // Add item to selected list
            setSelectedItems([...selectedItems, index]);
        }
    };

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, padding: '7%' }}>
            <Text style={{ fontSize: 35, color: 'black', fontWeight: 'bold' }}>
                Where is your Favorite place to explore?
            </Text>

            <FlatList
                data={Images}
                numColumns={2}
                renderItem={({ item, index }) => {
                    const isSelected = selectedItems.includes(index); // Check if item is selected
                    return (
                        <TouchableOpacity
                            onPress={() => toggleSelection(index)}
                            style={[styles.box3, { borderColor: isSelected ? 'green' : 'lightgrey' }]}
                        >
                            <View style={{ position:'absolute',top:10 ,alignSelf:'flex-end',right:10}}>
                                {isSelected && (
                                    <AntDesign name='checkcircle' size={20} color="green" />
                                )}
                            </View>
                            <Image source={item.img} />
                            <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold' }}>
                                {item.txt}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
            />

            <TouchableOpacity
                onPress={() => navigation.navigate('BottomNav')}
                style={styles.button2}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black' }}>
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Explore2

const styles = StyleSheet.create({
    button2: {
        width: '100%',
        backgroundColor: '#FCD240',
        alignItems: 'center',
        borderRadius: 20,
        padding: '5%',
        alignSelf: 'center',
        marginBottom: 5
    },
    box3: {
        alignItems: 'center',
        borderColor: 'lightgrey',
        borderWidth: 2,
        padding: '4%',
        marginRight: '9%',
        borderRadius: 20,
        marginTop: '2%',
    },
    txttop: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    }
});
