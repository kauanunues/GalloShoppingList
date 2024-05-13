import React from 'react'
import { View, Text } from 'react-native'
import {ItemList} from '../../components/itemList';
import { styles} from './styles';
import { Ionicons } from '@expo/vector-icons'
import { View, Text , TouchableOpacity } from 'react'

export default function ItemList({item,markItem,removeItem}) {
  return (

    <View style ={styles.itemList}>
        <View style={{flex:1}}>
            <Text style={styles.itemToBuy}>{item}</Text>
        </View>
      <Text>{item}</Text>
      <TouchableOpacity
     style={[styles.actionIcon,{backgroundColor: 'darkred'}]} 
      onPress={( ) => markItem(item)}
      >

        <Ionicons name='trash-bin-outlie' size={24} color= "#fff" />
      </TouchableOpacity>
 
    </View>
    
  )
}