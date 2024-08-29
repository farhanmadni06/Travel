import { View, Text, Image, FlatList, ImageBackground, StyleSheet, Touchable, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef } from 'react'

const Slider1 = () => {

  const flatlistref = useRef()

  const Images = [
    {
      img: require('../img/slider1.jpg'),
      txt1: 'traver',
      txt2: 'lets explore\nthe world  ',
      // txt3: 'the world',
      txt4: 'lets explore the world with us with just few clicks',

    },
    {
      img: require('../img/slider2.jpg'),
      txt1: 'traver',
      txt2: 'lets explore\nthe world  ',
      // txt3: 'the world',
      txt4: 'lets explore the world with us with just few clicks',
      
    },
    {
      img: require('../img/slider3.jpg'),
      txt1: 'traver',
      txt2: 'lets explore\nthe world  ',
      // txt3: 'the world',
      txt4: 'lets explore the world with us with just few clicks',
    },

  ]

  const handlepages = (index) =>{
    if(index+1<Images.length){
    flatlistref.current.scrollToIndex({index:index+1})
    }
    else{
      
    }
  }

  return (

    <FlatList
      ref={flatlistref}
      scrollEnabled={false}
      data={Images}
      horizontal={true}
      renderItem={({ item, index }) => {
        return (
          <ImageBackground style={styles.bg} resizeMode='cover' source={item.img}>

            <View style={styles.View}>
              <View style={styles.View2}>
              </View>
              <Text style={styles.txt2}>{item.txt1}</Text>
              <Text style={styles.txt3} >{item.txt2}</Text>
              <Text style={styles.txt3} >{item.txt3}</Text>
              <Text style={styles.txt4}>{item.txt4}</Text>

              <View style={{ marginTop: 30, gap: 10, justifyContent: 'center',  flexDirection: 'row', }}>
               
                <View style={{ width: '32%', height: 3, backgroundColor: 'white' }}>
                </View>

                <View style={{ width: '32%', height: 3, backgroundColor: 'lightgrey' }}>
                </View>

                <View style={{ width: '32%', height: 3, backgroundColor: 'lightgrey' }}>
                </View>

              </View>

            </View>

            <TouchableOpacity
            onPress={()=>handlepages(index)}
            style={ styles.button}>
              <Text style={{fontWeight: 'bold',fontSize: 15,color:'black'}}>Next</Text>
            </TouchableOpacity>

          </ImageBackground>

        )
      }}
    />


  )
}

export default Slider1


const styles = StyleSheet.create({
  txt: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 20,
  },

  txt2: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white'
  },
  txt3: {
    color: 'white',
    fontSize: 55,
    fontWeight: 'bold',

  },
  txt4: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',

  },
  View2: {
    backgroundColor: '#FCD240',
    height: 12,
    width: 12,
    position: 'absolute',
    // top: '50%',
    left: '9%',
    borderRadius: 20,

  },
  bg: {
    // flex: 1,
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    // height: 1000,
    // width: 500,
    padding: 30,
    justifyContent: 'center',
  },
  slider: {
    width: 30,
    height: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#FCD240',
    width: '90%',
    alignItems: 'center',
    position: 'absolute',
    bottom: '10%',
    borderRadius: 10,
padding:10,
left:'13%'
  }
}
)