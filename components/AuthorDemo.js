import { Image, StyleSheet, Text, View } from "react-native";

function AuthorDemo({name, description, image}) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text numberOfLines={2} style={styles.subtitle}>{description}</Text>
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
    backgroundColor: '#eee',
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