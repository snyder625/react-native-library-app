import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import  Rating from 'react-native-easy-rating';

function Card({item, handleCardPress}) {

  const genres = ['Horror', 'Fiction', 'Comedy', 'Romance', 'Non-Fiction', 'Fantasy', 'Mystery', 'Sports'];
  const colors = ['#990000', '#008080', '#FFD700', '#FF69B4', '#FFA500', '#663300', '#333333', '#008000'];
  const index = genres.indexOf(item.genre)

  const textStyle = {
    color: colors[index]
  };
  
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.wrapper} onPress={() => handleCardPress(item)}>
            <Image source={{uri: item.cover}} style={styles.image} resizeMode="contain" />
            <View style={styles.textContainer}>
              <Text style={textStyle}>{item.genre}</Text>
              <Text style={styles.text}>{item.title}</Text>
              <Text>{item.author}</Text>
              <View style={{backgroundColor: 'pink'}}>
              <Rating
                rating={item.rating}
                max={5}
                iconWidth={24}
                iconHeight={24}
                iconSelected={'https://cdn.pixabay.com/photo/2021/10/11/00/58/star-6699069_960_720.png'}
                iconUnselected={'https://cdn.pixabay.com/photo/2015/01/17/11/45/star-602148_960_720.png'}
                editable={false}
              />
              </View>
            </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  wrapper: {
    flexDirection: 'row'
  },
  textContainer: {
    padding: 18,
    justifyContent: 'center',
    // backgroundColor: 'white'
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    paddingTop: 6,
    fontWeight: 'bold',
    maxWidth: 175,
    // color: 'grey',
  }
})

export default Card;