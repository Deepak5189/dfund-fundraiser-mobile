import {Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const RootLayout = () => {
  return (
    // <View className="flex flex-1 items-center justify-center">
    //   <Text>RootLayout</Text>
    //   {/* <Dummy/> */}
    // </View>
    <GestureHandlerRootView>
        <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
          <Stack.Screen name="(auth)" options={{headerShown:false}}/>
          <Stack.Screen name='index' options={{headerShown:false}}/>
      </Stack>
    </GestureHandlerRootView>
  )
}

export default RootLayout