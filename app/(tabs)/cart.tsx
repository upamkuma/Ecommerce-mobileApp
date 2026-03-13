import React, { useContext } from "react";
import { View, Text } from "react-native";
import { StoreContext } from "../../context/StoreContext";

export default function Cart() {

  const { cart } = useContext(StoreContext);

  return (
    <View>
      {cart.map((item, index) => (
        <Text key={index}>
          {item.name} - ₹{item.price}
        </Text>
      ))}
    </View>
  );
}