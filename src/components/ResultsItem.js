import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsItem = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  container: {
    marginLeft: 15,
    marginBottom: 10,
  },
});

export default ResultsItem;
