import { View, Text, SafeAreaView, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { Dimensions } from "react-native";

import Card from "../components/HorizontalCard";

export default function Search({ route, navigation }) {
  const [searchQuery, setSearchQuery] = useState(route.params.text);
  const [BookData, setBookData] = useState([]);

  const { width, height } = Dimensions.get('window')

  const handleCardPress = (item) => {
    navigation.navigate("Book Detail", { id: item._id });
  };

  const handleSearch = async (query) => {
    try {
      query = query.replace(/\s+/g, "+");
      const response = await axios.get(
        `https://library-app-backend-six.vercel.app/book?title=${query}`
      );
      setBookData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />

      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.BackBtn}
          onPress={() => {
            navigation.goBack("Home");
          }}
        >
          <Image
            source={require("../assets/icons/left.png")}
            style={{ width: 25, height: 35 }}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What book are you looking for today?"
            onChangeText={(text) => {
              setSearchQuery(text);
              handleSearch(text);
            }}
            value={searchQuery}
            autoFocus={true}
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => setSearchQuery("")}
        >
          <Text style={{ color: "black", fontSize: 16 }}>Clear</Text>
        </TouchableOpacity>
      </View>

      {searchQuery === "" ? (
        <View style={{ width: width, height: height - 100, marginTop: 40}}>
          <Image
            source={require("../images/books.png")}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      ) : (
        <FlatList
          data={BookData}
          renderItem={({ item }) => (
            <Card item={item} handleCardPress={handleCardPress} />
          )}
          keyExtractor={(item) => item._id}
          ListFooterComponent={<View style={{ height: 75 }} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
    height: 50
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
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});