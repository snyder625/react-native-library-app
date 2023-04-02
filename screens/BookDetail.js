import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import BookData from '../Data'

import Cover from '../components/Cover'
import Tabs from '../components/Tabs'
import AuthorDemo from '../components/AuthorDemo'
import BooksList from '../components/BooksList'
import { ScrollView } from 'react-native'

const BookDetail = ({route}) => {

  const {id} = route.params;
  const {name, cover, author, authorDescription, authorImage, description, rating, pages, status} = BookData[id];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Cover cover={cover} name={name} author={author} />
        <Tabs rating={rating} pages={pages} status={status}/>
        <AuthorDemo author={author} authorDescription={authorDescription} authorImage={authorImage} />
        <View style={{padding: 16, paddingTop: 10, backgroundColor: '#eee'}}>
          <Text style={{fontSize: 16}} numberOfLines={13}>{description}</Text>
        </View>
        <BooksList title="Related Books" BookData={BookData} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default BookDetail