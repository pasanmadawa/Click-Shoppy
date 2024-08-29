import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductPage from './src/screens/ProductPage';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ProductPage/>
      <StatusBar style="auto" />
    </View>
  );
}

