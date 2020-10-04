import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Hi there!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Auckland", //required field
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar
        value={term}
        onChange={setTerm}
        onSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Results are {results.length}</Text>
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
