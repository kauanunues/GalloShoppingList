import React from 'react'
import {View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { Ionicons } from '@expo/vector-icons'

export default function ItemList({item, markItem, unmarkItem, removeItem}) {
    return (
      <View style={styles.itemList}>
        <View style={{ flex: 1 }}>  
           <Text style={item?.bought ? styles.itemBought : styles.itenToBuy}>
           {item?.name}
          </Text>
        </View>
        {item.bought? (
            <TouchableOpacity 
            style={styles.actionIcon}
             onPress={() => markItem(item)}
          >
            <Ionicons name='bag-check-outline' size={24} color="#fff" />
          </TouchableOpacity>

        ) : (
          <TouchableOpacity 
          style={styles.actionIcon}
           onPress={() => unmarkItemItem(item)}
        >
          <Ionicons name='bag-check-outline' size={24} color="#fff" />
        </TouchableOpacity>

        )}
      

        <TouchableOpacity 
          style={[styles.actionIcon, { backgroundColor: 'darkred'}]}
           onPress={() => removeItem(item)}
        >
          <Ionicons name='trash-bin-outline' size={24} color="#fff" />
        </TouchableOpacity>
      
      </View>
    )
}


