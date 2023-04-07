import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

function BookCard({item, handleCardPress}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => handleCardPress(item)}>
            <Image source={{uri: item.cover}} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
        <Text style={styles.text} numberOfLines={2}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginLeft: 18,
    maxWidth: 200,
  },
  image: {
    width: 150,
    height: 200,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontSize: 14,
    paddingTop: 6,
    color: 'grey',
    maxWidth: 150
  }
});

export default BookCard;