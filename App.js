import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Navigation from "./src/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/States/store";
import ProductPage from "./src/screens/ProductPage";
import ProductDetails from "./src/screens/ProductDetails";
import ShoppingCart from "./src/screens/ShoppingCart";
import LoadingPage from "./src/screens/LoadingPage";

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex-1">
        <Navigation />
        {/* <ProductPage/> */}
        {/* <ProductDetails/> */}
        {/* <ShoppingCart/> */}
        {/* <LoadingPage/> */}
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
