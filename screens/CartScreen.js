import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { StoreContext } from "../context/StoreContext";

export default function CartScreen() {
  const { cart } = useContext(StoreContext);

  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.name} - ₹{item.price}</Text>
        )}
      />
    </View>
  );
}