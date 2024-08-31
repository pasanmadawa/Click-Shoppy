import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoadingPage from "./screens/LoadingPage";
import ProductPage from "./screens/ProductPage";
import ProductDetails from "./screens/ProductDetails";
import ShoppingCart from "./screens/ShoppingCart";
import { Pressable,Text } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductPage}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                className="flex-row"
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text className="ml-2 font-medium">1</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetails}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                className="flex-row"
              >
                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                <Text className="ml-2 font-medium">1</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
