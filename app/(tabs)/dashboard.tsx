import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import ExplorePost from '@/components/ExplorePost'
import ForYouPost from '@/components/ForYouPost'

const Dashboard = () => {

  const [whatActive, setWhatActive]=useState('for-you');

  const handleWhatActive=(activeValue)=>{
    setWhatActive(activeValue);
  }
  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#6663A6' style='inverted'/>
      <View className='flex flex-row items-center justify-between h-20 px-5 bg-[#cfcdf6] '>
        <View className='flex flex-row items-center py-0 m-0'>
          <Image source={require('@/assets/icons/logo.png')} style={{resizeMode: 'contain', width: 50, }} className='m-0 h-20'/>
          <Text className='text-xl font-bold ml-3'>DFund</Text>
        </View>
        <View className='flex flex-row gap-5 items-center'>
        <TouchableOpacity className='flex items-center'>
          <TabBarIcon
            name='wallet-outline'
            color='#000000'
            size={25}
          />
          <Text className='text-xs absolute -left-2 w-12 -bottom-5'>$2.50</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <TabBarIcon
            name='person-circle-outline'
            color='#000000'
            size={40}
          />
        </TouchableOpacity>
        </View>
      </View>
      <View className='flex flex-row shadow-lg py-3 border-b-2 justify-around'>
        <TouchableOpacity  className={whatActive==='for-you'?'bg-[#cfcdf6] py-2 px-14 rounded-lg':'py-2 px-14'} onPress={()=>handleWhatActive('for-you')}><Text className='font-semibold'>For You</Text></TouchableOpacity>
        <TouchableOpacity className={whatActive==='explore'?'bg-[#cfcdf6] py-2 px-14 rounded-lg':'py-2 px-14'} onPress={()=>handleWhatActive('explore')}><Text className='font-semibold'>Explore</Text></TouchableOpacity>
      </View>
      {whatActive==='for-you' && <ForYouPost/>}
      {whatActive==='explore' && <ExplorePost/>}
    </SafeAreaView>
  )
}

export default Dashboard