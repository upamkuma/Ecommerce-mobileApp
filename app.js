import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StoreProvider } from "./context/StoreContext";
import BottomTabs from "./navigation/BottomTabs";

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </StoreProvider>
  );
}