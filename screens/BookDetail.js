import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import Cover from '../components/Cover'
import Tabs from '../components/Tabs'
import AuthorDemo from '../components/AuthorDemo'
import BooksList from '../components/BooksList'

const BookDetail = ({route}) => {

  const { id } = route.params;
  const [book, setBook] = useState([]);
  const [text, setText] = useState("");
  const [readMore, setReadMore] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://library-app-backend-six.vercel.app/book/${id}`);
        const jsonData = await response.json();
        setBook(jsonData);
        setText(jsonData.description.slice(0, 500));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Cover cover={book.cover} title={book.title} author={book.author} />
        <Tabs rating={book.rating} pages={book.pages} genre={book.genre}/>
        <AuthorDemo authorId={book.authorId} />

        <View style={{ padding: 16, paddingTop: 10, backgroundColor: '#eee' }}>
          <Text style={{ fontSize: 16 }} >
            {text}
            {!readMore && "..."}
            <Text
              style={{
                fontSize: 14,
                color: "black"
              }}
              onPress={() => {
                if (!readMore) {
                  setText(book.description);
                  setReadMore(true);
                } else {
                  setText(book.description.slice(0, 500));
                  setReadMore(false);
                }
              }}
            >
              {!readMore && "Read More"}
            </Text>
          </Text>
        </View>

        <BooksList title="Related Books" type={book.genre} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default BookDetail