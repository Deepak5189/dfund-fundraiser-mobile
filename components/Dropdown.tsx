import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { TabBarIcon } from './navigation/TabBarIcon'

const Dropdown = () => {
  return (
    <View>
      <View className='border border-slate-500 w-36 rounded bg-slate-200 flex flex-row px-1 items-center justify-between'>
        <Text className=''>Select</Text>
        <TabBarIcon name='chevron-down' size={15}/>
      </View>
    </View>
  )
}

export default Dropdown