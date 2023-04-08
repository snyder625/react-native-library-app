import { FlatList, View } from 'react-native'
import { useEffect, useState } from 'react';

import BookCard from '../components/BookCard'

export default function CategoriesScreen({ route, navigation }) {
  const type = route.params.type;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://library-app-backend-six.vercel.app/book/type/${type}`);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [type])

  function handleCardPress(item) {
      navigation.navigate('Book Detail', {
        id: item._id
      });
  }

  return (
    <FlatList data={books} keyExtractor={(item)=> item._id} renderItem={({item}) => <BookCard item={item} handleCardPress={handleCardPress}/>} numColumns={2} ListFooterComponent={<View style={{ height: 20 }} />}/>
  )
}