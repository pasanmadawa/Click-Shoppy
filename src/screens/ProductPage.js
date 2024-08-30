import { View, Text, FlatList, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";
import "nativewind";

const ProductPage = ({ navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const res = await fetch(
        "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json"
      );
      const data = await res.json();
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        console.log("Navigating to ProductDetails");
        navigation.navigate("ProductDetails");
      }}
      className="w-1/2 p-1"
    >
      <Image
        className="w-full aspect-square"
        source={{
          uri: item.mainImage,
        }}
      />
      <Text className="font-semibold pl-1">{item.name}</Text>
      <Text className="pl-1">{item.brandName}</Text>
      <Text className="pl-1">
        {item.price.amount}
        {item.price.currency}
      </Text>
    </Pressable>
  );

  return (
    <View>
      <FlatList data={products} renderItem={renderItem} numColumns={2} />
    </View>
  );
};

export default ProductPage;
