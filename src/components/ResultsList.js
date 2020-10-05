import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsItem from "./ResultsItem";

const ResultsList = ({ title, filteredResults }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={filteredResults}
        horizontal
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsItem result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 15,
  },
});

export default ResultsList;
