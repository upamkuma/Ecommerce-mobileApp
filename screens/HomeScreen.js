import React from "react";
import { View, FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

const products = [
  { id: "1", name: "iPhone 14", price: 80000 },
  { id: "2", name: "Laptop", price: 60000 },
  { id: "3", name: "Headphones", price: 3000 },
];

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
}