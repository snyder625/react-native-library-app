import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BookCard from "./BookCard";

function BooksList({title, BookData}) {

  const navigation = useNavigation()

  const handleCardPress = (item) => {
    navigation.navigate('Book Detail', {id: item.book_id});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See all</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={BookData}
        renderItem={({item}) =>(
          <BookCard item={item} handleCardPress={handleCardPress} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
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

export default BooksList;