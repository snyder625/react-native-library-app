import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";

const { height } = Dimensions.get('window');

function Cover() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1650467260l/60633524.jpg"
        }}
        resizeMode="cover"
        style={styles.backgroundImage}
        blurRadius={40}
      >
        <View style={ styles.wrapper }>
          <Image
            source={{
              uri:
                "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1650467260l/60633524.jpg"
            }}
            style={{ width: 150, height: 200, borderRadius: 6 }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>The Wizard of Oz</Text>
            <Text style={styles.subTitle}>by Ben Dunk</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 44
  },
  backgroundImage: {
    height: height / 2
  },
  textContainer: {
    alignItems: "center", 
    paddingTop: 8
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  subTitle: {
    color: '#eee'
  }
})

export default Cover;