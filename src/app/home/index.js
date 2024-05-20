import React, { useState } from 'react'
{
  StyleSheet
  Text,
    View,
    SafeAreaView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Alert
} 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import ItemList from '../../components/itemList';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function home() {
  const [textInput, setTextInput] = useState('');
  const [items, setItems] = useState([]);

  const saveItemToDevice = async () => {

  }

  const getItemsToDevice = async () => {

  }

  const addItem = () => {

  }

  const markItemBought = itemId => {

  }

  const unmarkItemBought = itemId => {

  }

  const removeItem = itemId => {

  }

  const removeAll = () => {
    Alert.alert('Limpar lista?', 'Confirma a exclusão de todos os produtos da lista?',
      [{
        text: 'Sim',
        onPress: () => { setItems([]) }
      },
      {
        text: 'Cancelar',
        style: 'cancel'
      }]);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <imageBackground
        source={require('../../assets/background.jpg')}
        resizeMOde='repeat'
        style={{ flex: 1, justifyContent: 'flex-start' }}>
        <View style={styles.footer}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <Ionicons name="trash" size={32} color='#ffff' onPress={removeAll} />
        </View>

        {/* Lista de Produtos */}
        <FlatList
          contentContainerStyle={{ padding: 20, paddingBottom: 100, color: '#ffffff' }}
          data={items}
          render Item={({ item }) =>
            <ListItem
              item={item}
              markItem={markItemBought}
              unmarkItem={unmarkItemBought}
              removeItem={removeItem}
            />}
        />
        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              color='#fff'
              fontSize={18}
              paceholderTextColor='#aeaeae'
              placeholder='Digite o Nome do Produto...'
              value={textInput}
              onChangeText={(text)  => setTextInput(text)}
            />
          </View>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name='add' size={36} color='#fff' />
          </TouchableOpacity>
        </View>
      </imageBackground>
      <StatusBar style="light" backgroundColor='#000' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})