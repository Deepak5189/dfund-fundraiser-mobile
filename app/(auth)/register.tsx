import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

const RegisterScreen = () => {

  const [user, setUser]=useState({
    email: '',
    username: '',
    password:'',
    confirmpassword:'',
  });
  const [passMatch, setPassMatch]=useState(true);

  const handleFormSubmit=()=>{
    if(user.password!==user.confirmpassword){
      setPassMatch(false);
    }else{
      console.log("Form Submitted!!");
      router.push('/(auth)/login');
    }
  }

  return (
    <SafeAreaView className=''>
      <StatusBar backgroundColor='#6663A6'/>
      <ScrollView horizontal={false}>
        <View className='flex gap-0 flex-col items-center mx-auto'>
          <Image source={require('@/assets/icons/logo.png')} style={{resizeMode: 'contain', width: 100, }} className=' p-0'/>
          <Text className='text-3xl font-bold'>DFund</Text>
          <Text>Welcome Abroad!</Text>
          <Text>Use your creativity for Fundraising</Text>
          <View className="p-10 flex">
            <View className="flex flex-col gap-5">
              <TextInput placeholder='JohnDoe123' className='border-[1px] p-2 w-72 rounded-lg' value={user.username} onChangeText={(text)=>setUser({...user, username:text})} enterKeyHint='next'/>
              <TextInput  placeholder='johndoe123@gmail.com' className='border-[1px] p-2 w-72 rounded-lg' value={user.email} onChangeText={(text)=>setUser({...user, email:text})}/>
              <TextInput secureTextEntry placeholder='********' className='border-[1px] p-2 w-72 rounded-lg' value={user.password} onChangeText={(text)=>setUser({...user, password:text})}/>
              <TextInput secureTextEntry placeholder='********' className='border-[1px] p-2 w-72 rounded-lg' value={user.confirmpassword} onChangeText={(text)=>setUser({...user, confirmpassword:text})}/>
                {!passMatch && <Text className='text-red-500 text-[12px]'>Passwords didn't match.</Text>}
                <TouchableOpacity disabled={!passMatch} onPress={handleFormSubmit} className='bg-[#6663A6] py-3 rounded-2xl'><Text className="color-white text-center font-semibold uppercase">Sign Up</Text></TouchableOpacity>
            </View>
            {/* <View className="textinput">
              <Text className="label"></Text>
              <TextInput/>
            </View>
            <View className="textinput">
              <Text className="label"></Text>
              <TextInput/>
            </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen