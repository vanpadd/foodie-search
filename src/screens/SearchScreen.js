import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.backgroundStyle}>
      <SearchBar value={value} onChange={(newValue) => setValue(newValue)} />
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
