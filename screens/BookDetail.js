import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import BookData from '../Data'

import Cover from '../components/Cover'
import Tabs from '../components/Tabs'
import AuthorDemo from '../components/AuthorDemo'
import BooksList from '../components/BooksList'
import { ScrollView } from 'react-native'

const BookDetail = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Cover />
        <Tabs />
        <AuthorDemo />
        <View style={{padding: 16, paddingTop: 10, backgroundColor: '#eee'}}>
          <Text style={{fontSize: 16}}>The Wonderful Wizard of Oz is a 1900 children's novel written by author L. Frank Baum and illustrated by W. W. Denslow. It is the first novel in the Oz series of books. A Kansas farm girl named Dorothy ends up in the magical Land of Oz after she and her pet dog Toto are swept away from their home by a tornado.</Text>
        </View>
        <BooksList title="Related Books" BookData={BookData} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default BookDetail