import React from "react";
import BookData from '../Data/BookData'
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function BookCard({item, handleCardPress}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => handleCardPress(item)}>
            <Image source={{uri: item.cover}} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.text}>{item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginLeft: 18,
    maxWidth: 200
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    paddingTop: 6,
    color: 'grey',
    maxWidth: 150
  }
});

export default BookCard;