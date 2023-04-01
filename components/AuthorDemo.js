import { Image, StyleSheet, Text, View } from "react-native";

function AuthorDemo() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1639618949l/58909880.jpg"
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>J.K. Rowlings</Text>
        <Text numberOfLines={2} style={styles.subtitle}>
          Joanne Rowling, also known by her pen name J. K. Rowling, is a British
          author and philanthropist. She wrote Harry Potter, a seven-volume
          children's fantasy series published from 1997 to 2007.
        </Text>
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
    color: "#ccc",
    fontSize: 13
  }
});

export default AuthorDemo;