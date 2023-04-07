import { View, StyleSheet, StatusBar, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BooksList from '../components/BooksList'
import LottieView from 'lottie-react-native';

const Home = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleTextChange(text) {
    setSearchTerm("");
    navigation.navigate('Search', { text: text })
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#ddd" />
      <ScrollView>
        {/* <View style={{backgroundColor: 'red'}}> */}
        <View style={{ height: 275, backgroundColor: '#ddd', alignItems: 'center', justifyContent: 'center', paddingTop: 10, marginBottom: 30 }}>
          <LottieView source={require('../assets/99349-girl-with-books.json')} autoPlay loop style={{ height: '95%' }} />
          <View style={styles.searchWrapper}>
            <TextInput style={styles.searchInput} placeholder="What book are you looking for today?" onChangeText={handleTextChange} value={searchTerm} />
          </View>
        </View>
        {/* </View> */}
        {/* <Head /> */}
        <BooksList title="Books" type="Book" />
        <BooksList title="Comics" type="Comic" />
        <BooksList title="Novels" type="Novel" />
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