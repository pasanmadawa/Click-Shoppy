import { View, Text } from 'react-native'

const LoadingPage = () => {
  console.log('logging');
  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems:'center'}}>
      <Text style = {{fontSize: 24}}>LoadingPage</Text>
    </View>
  )
}

export default LoadingPage