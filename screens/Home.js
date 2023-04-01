import { View, Text, StyleSheet, TouchableOpacity, FlatList, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Head from '../components/Head'
import BooksList from '../components/BooksList'
import BookData from '../Data'
import Lottie from 'lottie-react-native';

import BookCard from '../components/BookCard'

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar
      backgroundColor="#ddd"
    />
      <View style={{flex: 1}}>
        <Lottie source={require('../assets/99349-girl-with-books.json')} autoPlay loop />
      </View>
      <Head />
      <BooksList title="Horror" BookData={BookData} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerBtn: {
    fontSize: 16,
    padding: 4,
    color: '#aaa'
  }
})

export default Home