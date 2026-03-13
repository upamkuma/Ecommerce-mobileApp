import { Tabs } from "expo-router";
import { StoreProvider } from "../../context/StoreContext";

export default function TabLayout() {
  return (
    <StoreProvider>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Products" }} />
        <Tabs.Screen name="cart" options={{ title: "Cart" }} />
        <Tabs.Screen name="wishlist" options={{ title: "Wishlist" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
    </StoreProvider>
  );
}