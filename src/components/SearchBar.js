import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ value, onChange }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.searchStyle} name="search" size={30}></Feather>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        onChangeText={onChange}
        value={value}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row",
    backgroundColor: "#F0EEEE",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  searchStyle: {
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
