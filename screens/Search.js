import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import BookData from '../Data/BookData'
import { PreventRemoveContext } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export default function Search({route}) {
  const [searchTerm, setSearchTerm] = useState(route.params.text);
  const [data, setData] = useState([])

  function handleChangeText(text) {}

  return (
    <View style={styles.container}>
      <TextInput value={searchTerm} onChangeText={handleChangeText} style={styles.TextInput} />
      <Text>Done</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50
  },
  TextInput: {
    height: '100%'
  }
})