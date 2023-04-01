import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";

function Head() {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBtn}>
        <Image source={require('../images/logo-red.png')} resizeMode="contain" style={styles.searchImage} />
      </View>
        
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} placeholder="What are you looking for?" />
        </View>

        <TouchableOpacity style={styles.searchBtn} >
          <Image source={require('../assets/icons/search.png')} resizeMode="contain" style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 16,
    height: 50,
    paddingHorizontal: 8
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    height: "100%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 12,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: '#ddd',
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: 'white',
  },
  searchImage: {
    width: "50%",
    height: "50%",
  }
})

export default Head;