import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'

const App = () => {
  


  const devNavigate=()=>{
    // router.push('/add-post');
  }
  
  return (
    <SafeAreaView>

      {/* <View><TouchableOpacity onPress={devNavigate}><Text>Go to dashboard</Text></TouchableOpacity></View> */}
      <StatusBar backgroundColor='#6663A6' translucent/>
      <View className='flex h-screen gap-10 my-0 justify-center items-center'>
        <Text className='text-3xl font-bold'>Welcome To Dfund</Text>
        <Text className='text-center'>India's First Social Media CrowdFunding Platform.</Text>
        <View className='flex '>
          <TouchableOpacity className='bg-[#6663A6] px-3 py-2 rounded-lg' onPress={()=>router.push('/(auth)/register')} activeOpacity={0.2}><Text className='uppercase text-center text-white font-semibold'>Get Started</Text></TouchableOpacity>
          <View className='flex flex-row gap-5'>
            <Text className='text-sm'>Already a member?</Text>
            <Link href='/(auth)/login' className='text-blue-500 underline'>Login</Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App