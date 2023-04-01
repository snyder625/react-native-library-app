import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

function Card() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.wrapper}>
            <Image source={{uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1674683360l/61273863.jpg"}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text>Horror</Text>
              <Text style={styles.text}>The House Across the Lake</Text>
              <Text>Harry Maguire</Text>
              <Text>Ratings</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
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