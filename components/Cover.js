import { Image, ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get('window');

function Cover({cover, title, author}) {

  return (
    <View>
      <ImageBackground
        source={{ uri: cover }}
        resizeMode="cover"
        style={styles.backgroundImage}
        blurRadius={10}
      >
        {/* <TouchableOpacity style={styles.backBtn} onPress={handlePress}>
          <Image source={require('../assets/icons/left.png')} style={{width: '100%', height: '100%'}} />
        </TouchableOpacity> */}
        <View style={ styles.wrapper }>
          <Image source={{ uri: cover }}
            style={{ width: 150, height: 200, borderRadius: 6 }}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>by {author}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 44
  },
  backgroundImage: {
    height: height / 2
  },
  backBtn: {
    height: 25,
    width: 35,
    top: 15,
    left: 15,
    position: 'absolute'
  },
  textContainer: {
    alignItems: "center",
    textAlign: "center",
    paddingTop: 8
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#FFFFFF',
    textAlign: "center",
    maxWidth: 330,
    // color: '#C70039'
  },
  subTitle: {
    // color: '#eee'
    color: 'gold'
  }
})

export default Cover;