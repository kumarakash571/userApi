import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import {Card,CardItem,Header,Content,H1} from 'native-base'
import moment from 'moment'

const User = ({details}) => {
  return (
   <View style={styles.card}>
    <View style={styles.cardItem}>
    <Image
    source={{
        uri:details.picture.large,
        width:300,
        height:250

    }
        
    }
    style={styles.image}></Image>
    <View>
    <Text style={styles.text}>{details.name.title} {details.name.first} {details.name.last}</Text>
    </View>
    <View>
    <Text style={styles.text}>{details.cell}</Text>
    </View>
    
    </View>
   </View>
  )
}

export default User

const styles = StyleSheet.create({
    card: {
      width: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#4f8a8b',
      borderColor: '#4f8a8b',
      borderWidth: 2,
    },
    cardItem: {
      backgroundColor: '#4f8a8b',
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: '#fbd46d',
      marginTop: -50,
    },
    text: {
      color: '#eeeeee',
      fontSize:18,
      fontWeight:'400',


    },
  });
  