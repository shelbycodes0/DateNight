import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.textStyle}>
        {result.rating}
        <Entypo name="star-outlined" size={15} color="black" />{" "}
        {result.review_count} Reviews (
        <Text style={styles.priceStyle}>{result.price}</Text>)
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
    borderRadius: 6,
    marginLeft: 20,
  },
  nameStyle: {
    fontWeight: "bold",
    marginLeft: 20,
    paddingVertical: 5,
  },
  textStyle: {
    marginHorizontal: 20,
  },
  priceStyle: {
    color: "green",
  },
});

export default ResultsDetail;
