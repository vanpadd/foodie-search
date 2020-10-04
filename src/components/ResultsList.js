import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ResultsList = ({ title, filteredResults }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={filteredResults}
        horizontal
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ResultsList;
