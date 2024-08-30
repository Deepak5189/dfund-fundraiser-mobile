import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { TabBarIcon } from '@/components/navigation/TabBarIcon'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#6663A6",
        tabBarInactiveTintColor: "#9856c8",
        tabBarShowLabel: false,
        tabBarAllowFontScaling:true,
        tabBarStyle: {
          backgroundColor: "#CDCDE0",
          borderTopWidth: 1,
          borderTopColor: "#CDCDE0",
          height: 84,
          borderTopLeftRadius:30,
          borderTopRightRadius:30
        },
    }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <TabBarIcon
              color={color}
              name='home'
              size={focused?size*1.5:size}
            />
          ),
        }}
      />
        <Tabs.Screen
          name="friends"
          options={{tabBarHideOnKeyboard:true,
            title: "Add Friends",
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabBarIcon
                color={color}
                name='person-add'
                size={focused?size*1.5:size}
              />
            ),
          }}
        />
      <Tabs.Screen
        name="add-post"
        options={{
          title: "Create Post",
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <TabBarIcon
              color={color}
              name='add-circle'
              size={focused?size*1.5:size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Messages",
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <TabBarIcon
              color={color}
              name='chatbox-ellipses'
              size={focused?size*1.5:size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Setting",
          headerShown: false,
          tabBarIcon: ({ color, focused, size }) => (
            <TabBarIcon
              color={color}
              name='settings'
              size={focused?size*1.5:size}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default TabsLayout