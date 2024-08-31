import { View, Text, Image, ScrollView,Pressable } from "react-native";
import { useEffect, useState } from "react";
import "nativewind";

const ProductDetails = ({ items }) => {
  const [products, setProducts] = useState({ sizes: [] });

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
    <View>
      <ScrollView>
        <Image
          className="w-full aspect-square"
          source={{ uri: products.mainImage }}
        />
        <Text className="text-4xl  font-medium my-2 p-4">{products.name}</Text>
        <Text className="text-2xl p-4 font-semibold">
          Color: {products.colour}
        </Text>
        {Array.isArray(products.sizes) && (
          <View className="flex-row flex-wrap my-4">
            {products.sizes.map((size, index) => (
              <Text key={index} className="font-bold  mr-2 p-4">
                Size: {size}
              </Text>
            ))}
          </View>
        )}
        <Text className="text-2xl p-4 font-bold">
          Price: {products.price?.amount} {products.price?.currency}
        </Text>
        <Text className="font-semibold text-base my-2.5 leading-[30px] p-4">
          {products.description}
        </Text>
        <View className="py-10">

        </View>
      </ScrollView>
      <Pressable
        className="absolute bottom-8 w-[90%] bg-black 
                    self-center p-5 rounded-full items-center"
      >
        <Text className="text-white font-medium text-lg">Add to cart</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetails;
