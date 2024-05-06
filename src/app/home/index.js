import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
{
StyleSheet
Text,
View,
SafeAreaView,
ImageBackground,
TextInput,
TouchableOpacity;

} 'react-native';
import { StatusBar } from 'expo-status-bar';
import{ Ionicons} from '@expo/vector-icons';
import{styles} from './style';


export default function home() {
  return (
    <SafeAreaView style={{flex:1}}>
      <imageBackground
      source={require('../../assets/background.jpg')}
      resizeMOde='repeat'
      style={{flex:1,justifyContent: 'flex-start'}}
      >
       <View style={styles.footer}>
        <Text style={styles.title}>Lista de Produtos</Text>
        <Ionicons name="trash" size={32} color='#ffff' />
       </View>
       <View style= {styles.footer}>
         <View style={styles.inputContainer}>
          <TextInput
          color='#fff'
          fontSize={18}
          paceholderTextColor='#aeaeae'
          placeholder='Digite o Nome do Produto...'
          />
         </View>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name='add'size={36} color='#fff'/>
          </TouchableOpacity>
        </View> 
      </imageBackground>
      <StatusBar style="light" backgroundColor= '#000' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})