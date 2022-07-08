import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import Yelp from "../api/Yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === "$" || "$$" || "$$$" || "$$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Budget-Friendly Dates"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Mid-Price Dates"
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender Dates"
        />
        {/* <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Most Expensive Dates"
        /> */}
        <Text style={styles.Spacer}> </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Spacer: {
    paddingBottom: 20,
  },
});

export default SearchScreen;
