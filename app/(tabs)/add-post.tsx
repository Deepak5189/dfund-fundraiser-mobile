import { View, Text, StatusBar, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Dropdown from '@/components/Dropdown'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

const AddPost = () => {
  const categories=[
    {value: 'Category 1'},
    {value: 'Category 2'},
    {value: 'Category 3'},
  ];

  const [isFundable, setIsFundable]= useState(false);

  const handleFundable=()=>{
    setIsFundable(!isFundable);
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#6663A6' barStyle='default'/>
      <View className='p-5'>
        <Text className='font-bold text-xl'> Create New Post </Text>
        <View className='mx-5 flex flex-col'>
          <Text className='text-lg'>Title</Text>
          <TextInput placeholder='A beautiful Day!' className='border px-1 py-1 rounded-lg border-slate-500'/>
          <Text className='text-lg mt-2'>Description</Text>
          <TextInput placeholder='Chilling in my room...' className='border p-1 rounded-lg border-slate-500' multiline={true}/>
          <View className='mt-2 flex flex-row justify-between items-center'>
            <View className='flex flex-col'>
              <Text className='text-md font-semibold'>Category</Text>
              <Dropdown/>
            </View>
            <View className='flex flex-row gap-x-2 items-center'>
              <Text>Fundable?</Text>
              <TouchableOpacity className='border w-8 h-8 flex justify-center items-center rounded-lg' onPress={handleFundable}>{isFundable && <TabBarIcon name='checkmark' />}</TouchableOpacity>
            </View>
          </View>
          <View className=''>
            <Text className='text-lg mt-2'>Image</Text>
            <View className='border p-2 rounded-lg border-slate-500'>
              <TabBarIcon name='images-outline' size={300} color='#64748b'/>
              <Text className='font-bold text-2xl bg-slate-500 text-white w-70 text-center absolute top-28 left-5 py-5 rounded-lg px-10'>Browse Image</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AddPost