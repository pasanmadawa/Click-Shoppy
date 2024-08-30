import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ProductPage from './screens/ProductPage'
import ProductDetails from './screens/ProductDetails'
import ShoppingCart from './screens/ShoppingCart'
import { Modal } from 'react-native'

const Stack = createStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen name="Products" component={ProductPage} />
        <Stack.Screen name="ProductDetails" component={ProductDetails}
            options={{presentation:Modal}}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;