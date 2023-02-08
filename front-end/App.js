import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import Navigation from "./components/Navigation"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-800">
      <Text className="text-xl font-bold text-white">Hi, Mom!</Text>
      <StatusBar style="auto" />
      <Navigation/>
    </View>
  );
}

