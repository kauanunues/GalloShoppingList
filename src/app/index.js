import React, { useState } from 'react'
import { Text, View, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Flatlist, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import ItemList from '../../components/ItemList';
import asycStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [TextInput,setTextInput] = React.useState('');
  const [items, setItems] = useState ([]);

  const saveItemToDevice = async () => {

  }

  const getItemFromDevice = async  
   
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/background.jpg')}
        resizeMode='repeat'
        style={{ flex: 1, justifyContent: 'flex-start' }}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <Ionicons name="trash" size={32} color='#fff' />
        </View>

        {/* Lista de produtos*/}
        <ItemList item = {"Café"}></ItemList>
        <ItemList item = {"Leite"}></ItemList>

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput 
              color= '#fff'
              fontSize={18}
              placeholderTextColor='#aeaeae'
              placeholder='Digite o Nome do Produto...'
            />
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name= 'add' size={36} color='#fff'/>
          </TouchableOpacity>
        </View>

      </ImageBackground>
      <StatusBar style="light" backgroundColor='#000' />
    </SafeAreaView>
  )
}
