import { View, Text, SafeAreaView, StyleSheet, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import BookData from '../Data/BookData'
import { StatusBar } from 'expo-status-bar';

import SearchBar from '../components/SearchBar'
import Card from '../components/HorizontalCard'

export default function Search({route, navigation}) {
  const [searchTerm, setSearchTerm] = useState(route.params.text);
  const [data, setData] = useState([])

  const handleCardPress = (item) => {
    navigation.navigate('Book Detail', {id: item.book_id});
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <SearchBar />
      <FlatList 
        data={BookData}
        renderItem={({item}) =>(
          <Card item={item} handleCardPress={handleCardPress}  />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
})