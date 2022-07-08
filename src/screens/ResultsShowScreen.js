import React, { useState, useEffect } from "react";
import {
  Button,
  Linking,
  Image,
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import Yelp from "../api/Yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState();
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await Yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View stye={styles.container}>
      <Text style={styles.textStyle}>{result.name}</Text>
      <Text style={styles.textSmall}>{result.categories[0].title}</Text>
      <Button
        title="Explore on Yelp"
        onPress={() => {
          Linking.openURL(`${result.url}`);
        }}
      />
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  textSmall: {
    alignSelf: "center",
    fontSize: 16,
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: "center",
    marginBottom: 16,
  },
});

export default ResultsShowScreen;
