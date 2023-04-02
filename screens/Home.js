import { View, Text, StyleSheet, TouchableOpacity, FlatList, StatusBar, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import Head from '../components/Head'
import BooksList from '../components/BooksList'
import BookData from '../Data/BookData'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native'

import BookCard from '../components/BookCard'
import { ScrollView } from 'react-native'

const Home = ({navigation}) => {

  function handleTextChange(text) {
    navigation.navigate('Search', {text: text})
  }

  return (
    <SafeAreaView>
      <StatusBar
      backgroundColor="#ddd"
    />
    <ScrollView>
    {/* <View style={{backgroundColor: 'red'}}> */}
      <View style={{height: 275, backgroundColor: '#ddd', alignItems: 'center', justifyContent: 'center', paddingTop: 10, marginBottom: 30}}>
        <LottieView source={require('../assets/99349-girl-with-books.json')} autoPlay loop style={{height: '95%'}} />
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} placeholder="What are you looking for?" onChangeText={handleTextChange} />
        </View>  
      </View>
      {/* </View> */}
      {/* <Head /> */}
      <BooksList title="Completed" BookData={BookData} />
      <BooksList title="Reading" BookData={BookData} />
      <BooksList title="Wishlist" BookData={BookData} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchWrapper: {
    width: "100%",
    height: 50,
    marginBottom: -16,
    paddingHorizontal: 42,
    justifyContent: "center",
  },
  searchInput: {
    backgroundColor: '#fff',
    height: "100%",
    paddingHorizontal: 16,
    borderRadius: 24,
  },
})

export default Home