import { View, Text, Image, Pressable, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import "nativewind";
import { useSelector } from "react-redux";


const ShoppingCart = () => {

const products = useSelector((state) => state.cart.items);
console.log(products);


   const renderItem = ({ item }) => (
     <>
     
       <View className="flex-row  p-1">
         <View className="w-1/2 pr-1">
           <Image
             className="w-full aspect-square"
             source={{
               uri: item.mainImage,
             }}
           />
         </View>
         <View className="w-1/2 pl-1">
           <Text className="font-bold text-lg pl-1">{item.name}</Text>

           <View className="flex-row  p-1 space-x-5">
             <Feather name="minus-circle" size={24} color="gray" />
             <Text className="mx-2.5 font-bold text-gray-500">1</Text>
             <Feather name="plus-circle" size={24} color="gray" />
           </View>
           <Text className="pl-1  text-lg ">
             {item.price?.amount} {item.price?.currency}
           </Text>
           <View className="ml-40">
             <FontAwesome5 name="trash" size={18} />
           </View>
         </View>
       </View>
     </>
   );

   return (
     <FlatList
       data={products}
       renderItem={renderItem}
       ListFooterComponent={GetTotal}
     />
   );
};

const GetTotal = () => (
         <View className="p-2 border-t border-t-gray-500">
           <View className="flex-row  p-1">
             <View>
               <Text className="font-bold text-2xl">Click Shoppy</Text>
             </View>
             <View className="mt-10 ml-16">
               <Text className="font-extrabold text-2xl p-5">Total:</Text>
             </View>
             <View className="mt-10 ml-auto">
               <Text className="font-extrabold text-2xl p-5"> 500</Text>
             </View>
           </View>
         </View>
       )

export default ShoppingCart;
