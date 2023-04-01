import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

function Tabs() {
  return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.section}>
            <Text style={styles.title}>RATING</Text>
            <Text style={styles.subTitle}>4.46</Text>
          </View>
          <View style={[styles.section, styles.border]}>
            <Text style={styles.title}>PAGES</Text>
            <Text style={styles.subTitle}>768</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>STATUS</Text>
            <Text style={styles.subTitle}>Complete</Text>
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