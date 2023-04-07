import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Card({item, handleCardPress}) {

  const genres = ['Horror', 'Fiction', 'Comedy', 'Romance', 'Non-Fiction', 'Fantasy', 'Mystery'];
  const colors = ['#990000', '#008080', '#FFD700', '#FF69B4', '#FFA500', '#663300', '#333333'];
  const index = genres.indexOf(item.genre)

  const textStyle = {
    color: colors[index]
  };
  
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.wrapper} onPress={() => handleCardPress(item)}>
            <Image source={{uri: item.cover}} style={styles.image} resizeMode="contain" />
            <View style={styles.textContainer}>
              <Text style={textStyle}>{item.genre}</Text>
              <Text style={styles.text}>{item.title}</Text>
              <Text>{item.author}</Text>
              <Text>{item.rating}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  wrapper: {
    flexDirection: 'row'
  },
  textContainer: {
    padding: 18,
    justifyContent: 'center',
    // backgroundColor: 'white'
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    paddingVertical: 6,
    fontWeight: 'bold',
    maxWidth: 175,
    // color: 'grey',
  }
})

export default Card;