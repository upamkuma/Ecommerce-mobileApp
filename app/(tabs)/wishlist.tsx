import React, { useContext } from "react";
import { View, Text } from "react-native";
import { StoreContext } from "../../context/StoreContext";

export default function Wishlist() {

  const { wishlist } = useContext(StoreContext);

  return (
    <View>
      {wishlist.map((item, index) => (
        <Text key={index}>
          {item.name} - ₹{item.price}
        </Text>
      ))}
    </View>
  );
}