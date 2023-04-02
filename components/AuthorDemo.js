import { Image, StyleSheet, Text, View } from "react-native";
import AuthorData from '../Data/AuthorData'

function AuthorDemo({authorId}) {
  const {name, about, imageUrl} = AuthorData[authorId];
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text numberOfLines={2} style={styles.subtitle}>{about}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    paddingLeft: 16,
    backgroundColor: '#eee'
  },
  textContainer: {
    paddingHorizontal: 12,
    flexShrink: 1
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 4
  },
  subtitle: {
    color: "#aaa",
    fontSize: 13
  }
});

export default AuthorDemo;