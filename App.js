import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import ProductPage from './src/screens/ProductPage';
import ProductDetails from './src/screens/ProductDetails';
import ShoppingCart from './src/screens/ShoppingCart';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      {/* <Navigation /> */}
      {/* <ProductPage/> */}
      {/* <ProductDetails/> */}
      <ShoppingCart/>
      <StatusBar style="auto" />
    </View>
  );
}

