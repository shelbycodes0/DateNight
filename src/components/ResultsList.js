import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 25,
  },
});

export default withNavigation(ResultsList);
