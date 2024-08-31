import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import "nativewind";

const ProductDetails = ({items}) => {
  const [products, setProducts] = useState('');

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const res = await fetch(
        "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json"
      );
      const data = await res.json();
      const randomIndex = Math.floor(Math.random() * data.data.length);
      const randomProduct = data.data[randomIndex];
      setProducts(randomProduct);
      
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  
  return (
    <View >
      <ScrollView>
        <Image
          className="w-full aspect-square"
          source={{ uri: products.mainImage }}
        />
        <Text> {products.name}</Text>
      </ScrollView>

      <Pressable
        className="absolute bottom-0 w-[90%] bg-black 
                    self-center p-5 rounded-full items-center"
      >
        <Text className="text-white font-medium text-base">Add to cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetails;