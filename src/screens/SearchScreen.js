import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        value={term}
        onChange={setTerm}
        onSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Results are {results.length}</Text>
      <ResultsList
        title="Cost Effective"
        filteredResults={filterResultsByPrice("$")}
      ></ResultsList>
      <ResultsList
        title="Bit Pricier"
        filteredResults={filterResultsByPrice("$$")}
      ></ResultsList>
      <ResultsList
        title="Big Spender"
        filteredResults={filterResultsByPrice("$$$")}
      ></ResultsList>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});

export default SearchScreen;
