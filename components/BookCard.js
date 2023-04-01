import React from "react";
import BookData from '../Data'
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function BookCard({name, cover}) {

  const navigation = useNavigation()

  function handlePress() {
      navigation.navigate('Book Detail')
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
            <Image source={{uri: cover}} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.text}>{name}</Text>
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