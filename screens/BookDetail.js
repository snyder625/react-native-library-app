import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import BookData from '../Data/BookData'
import AuthorData from '../Data/AuthorData'

import Cover from '../components/Cover'
import Tabs from '../components/Tabs'
import AuthorDemo from '../components/AuthorDemo'
import BooksList from '../components/BooksList'

const BookDetail = ({route}) => {

  const { id } = route.params;
  const {title, cover, authorId, description, rating, pages, status} = BookData[id];
  const {name} = AuthorData[authorId];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Cover cover={cover} title={title} author={name} />
        <Tabs rating={rating} pages={pages} status={status}/>
        <AuthorDemo authorId={authorId} />
        <View style={{padding: 16, paddingTop: 10, backgroundColor: '#eee'}}>
          <Text style={{fontSize: 16}} numberOfLines={13}>{description}</Text>
        </View>
        <BooksList title="Related Books" BookData={BookData} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default BookDetail