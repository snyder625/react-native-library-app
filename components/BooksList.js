import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BookCard from "./BookCard";

function BooksList({title, type}) {
  const navigation = useNavigation();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    let endpoint = '';
    if (title === "Related Books") {
      endpoint = `book/genre/${type}`;
    } else {
      endpoint = `book/type/${type}`;
    };
    const fetchData = async () => {
      setIsLoading(true);
      try {
          const response = await fetch(`https://library-app-backend-six.vercel.app/${endpoint}`);
          const jsonData = await response.json();
          setBooks(jsonData)
      } catch (error) {
          alert('There is an error')
      } finally {
          setIsLoading(false);
      }
  };
  fetchData();
  }, [type])

  const handleCardPress = (item) => {
    navigation.navigate('Book Detail', {id: item._id, title: item.title});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
        {title === "Related Books" ? "" : 
        <TouchableOpacity onPress={()=> navigation.navigate('Category', {type: type})}>
          <Text style={styles.headerBtn}>See all</Text>
        </TouchableOpacity>
        }
      </View>

      {isLoading ? <ActivityIndicator size="large" color="pink" /> : 
      <FlatList 
        data={books}
        renderItem={({item}) =>(
          <BookCard item={item} handleCardPress={handleCardPress} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View style={{ width: 20 }} />}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerBtn: {
    fontSize: 16,
    color: '#aaa'
  }
})

export default BooksList;



// fetch(`https://library-app-backend-six.vercel.app/book/type/${type}`)
//     .then(response => response.json())
//     .then(data => setBooks(data))
//     .then(setLoading(false))
//     .catch(error => console.error(error))