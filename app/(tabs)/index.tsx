import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import ProductCard from "../../components/ProductCard";

const products = [
  { id: "1", name: "iPhone 14", price: 80000 },
  { id: "2", name: "Laptop", price: 60000 },
  { id: "3", name: "Headphones", price: 3000 },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 15,
  },
});