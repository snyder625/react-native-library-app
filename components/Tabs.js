import { StyleSheet, Text, View } from "react-native";

function Tabs({rating, pages, genre}) {
  const genres = ['Horror', 'Fiction', 'Comedy', 'Romance', 'Non-Fiction', 'Fantasy', 'Mystery', 'Sports'];
  const colors = ['#990000', '#008080', '#FFD700', '#FF69B4', '#FFA500', '#663300', '#333333', '#008000'];
  const index = genres.indexOf(genre)

  const textStyle = {
    color: colors[index]
  };

  return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.section}>
            <Text style={styles.title}>RATING</Text>
            <Text style={styles.subTitle}>{rating}</Text>
          </View>
          <View style={[styles.section, styles.border]}>
            <Text style={styles.title}>PAGES</Text>
            <Text style={styles.subTitle}>{pages}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>CATEGORY</Text>
            <Text style={[styles.subTitle, textStyle]}>{genre}</Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#eee'
  },
  wrapper: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
  },
  section: {
    paddingHorizontal: 30,
    paddingVertical: 8,
    alignItems: 'center',
  },
  border: {
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
    borderRightWidth: 1,
    borderRightColor: '#ddd'
  },
  title: {
    color: '#5a5a5a'
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default Tabs;