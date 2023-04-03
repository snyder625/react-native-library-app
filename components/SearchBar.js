import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";

function SearchBar() {
  return (
    <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.BackBtn}>
            <Image source={require('../assets/icons/left.png')} style={{ width: 25, height: 35}} />
        </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="What are you looking for?"
        />
      </View>

      <TouchableOpacity style={styles.searchBtn}>
        <Text style={{ color: "black", fontSize: 16 }}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "white",
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    height: "100%"
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 6
  },
  searchBtn: {
    width: 50,
    height: "100%",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: "white"
  },
  BackBtn: {
    alignItems: 'center',
    justifyContent: "center",
    padding: 10
  }
});

export default SearchBar;
