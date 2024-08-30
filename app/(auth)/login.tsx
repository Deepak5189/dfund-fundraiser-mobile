import { View, Text, StatusBar, Image, TextInput, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { router } from 'expo-router'

const LoginScreen = () => {

  const [user, setUser]=useState({
    email: '',
    password:'',
  });

  const handleFormSubmit=()=>{
    console.log(user);
    router.replace('/dashboard')
  }

  return (
    <SafeAreaView className=''>
      <StatusBar backgroundColor='#6663A6' barStyle='inverted'/>
      <ScrollView horizontal={false}>
        <View className='flex gap-0 flex-col items-center mx-auto'>
          <Image source={require('@/assets/icons/logo.png')} style={{resizeMode: 'contain', width: 100, }} className=' p-0'/>
          <Text className='text-3xl font-bold'>DFund</Text>
          <Text>Welcome Back!</Text>
          <Text>Use your creativity for Fundraising</Text>
          <View className="p-10 flex">
            <View className="flex flex-col gap-5">
              <TextInput  placeholder='johndoe123@gmail.com' className='border-[1px] p-2 w-72 rounded-lg' value={user.email} onChangeText={(text)=>setUser({...user, email:text})}/>
              <TextInput secureTextEntry placeholder='********' className='border-[1px] p-2 w-72 rounded-lg' value={user.password} onChangeText={(text)=>setUser({...user, password:text})}/>
                <TouchableOpacity onPress={handleFormSubmit} className='bg-[#6663A6] py-3 rounded-2xl'><Text className="color-white text-center font-semibold uppercase">Sign In</Text></TouchableOpacity>
            </View>
            <View className=""></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginScreen