import { Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

function AuthorDemo({authorId}) {

  const [author, setAuthor] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
      try {
          const response = await fetch(`https://library-app-backend-six.vercel.app/author/${authorId}`);
          const jsonData = await response.json();
          setAuthor(jsonData)
      } catch (error) {
          alert('There is an error')
      }
  };
  fetchData();
  }, [authorId]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: author.image }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{author.name}</Text>
        <Text numberOfLines={2} style={styles.subtitle}>{author.description}</Text>
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