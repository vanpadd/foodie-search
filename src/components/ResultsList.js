import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsItem from "./ResultsItem";

const ResultsList = ({ title, filteredResults, navigation }) => {
  if (!filteredResults.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={filteredResults}
        horizontal
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ShowResult", { id: item.id })}
            >
              <ResultsItem result={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(ResultsList);
