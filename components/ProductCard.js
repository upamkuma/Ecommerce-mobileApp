import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StoreContext } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useContext(StoreContext);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>₹ {product.price}</Text>

      <TouchableOpacity
        style={styles.cartBtn}
        onPress={() => addToCart(product)}
      >
        <Text style={styles.btnText}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.wishlistBtn}
        onPress={() => addToWishlist(product)}
      >
        <Text style={styles.btnText}>Wishlist</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },

  price: {
    fontSize: 16,
    marginBottom: 15,
    color: "green",
  },

  cartBtn: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 6,
    marginBottom: 8,
  },

  wishlistBtn: {
    backgroundColor: "#ff4d4d",
    padding: 10,
    borderRadius: 6,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});