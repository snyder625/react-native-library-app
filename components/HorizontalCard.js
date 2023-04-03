import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import AuthorData from "../Data/AuthorData";

function Card({item, handleCardPress}) {

  const {name} = AuthorData[item.authorId];
  
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.wrapper} onPress={() => handleCardPress(item)}>
            <Image source={{uri: item.cover}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text>{item.genre}</Text>
              <Text style={styles.text}>{item.title}</Text>
              <Text>{name}</Text>
              <Text>Ratings</Text>
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
  },
  code: {
    fontFamily: "monospace, monospace"
  }
})

export default Card;