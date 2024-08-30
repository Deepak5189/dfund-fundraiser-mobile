import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import FriendRequests from '@/components/FriendRequests'
import FriendSuggestions from '@/components/FriendSuggestions'

const FriendScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#6663A6"/>
      <View className='mx-auto'>
        <View className='flex w-screen flex-row items-center justify-around py-3 mx-auto'>
          <View className='flex flex-row items-center border pr-5 py-2 rounded-xl gap-x-5 ml-3'>
            <TextInput placeholder='search for friends...'/>
            <TouchableOpacity>
              <TabBarIcon name='search'/>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <TabBarIcon name='notifications-circle' size={40} color='#9856c8'/>
              <Text className='absolute text-xs rounded-full bg-black text-white w-5 h-5 text-center top-0 right-0'>5</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className='mx-5'>
          <View className='py-5'>
            <View className='flex flex-row items-center justify-between'>
              <Text className='font-bold text-xl'>Friends Requests</Text>
              <Text className='text-[#6663A6] font-semibold'>See All</Text>
            </View>
            <FriendRequests/>
          <View className='py-5'>
            <View className='flex flex-row items-center justify-between'>
              <Text className='font-bold text-xl'>Friends Suggestions</Text>
              <Text className='text-[#6663A6] font-semibold'>See All</Text>
            </View>
            <FriendSuggestions/>
          </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default FriendScreen