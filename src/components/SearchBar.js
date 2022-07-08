import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// parameters being passed in from SearchScreen

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" size={24} color="black" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#EBE9E9",
    height: 40,
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 22,
    marginBottom: 8,
    paddingVertical: 7,
    paddingHorizontal: 7,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default SearchBar;
