import { Link, Stack, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { useRoom } from '~/src/features/rooms/model/useRoom'
import RoomDetails from '~/src/features/rooms/ui/RoomDetails'
export default function RoomDetailsScreen() {
  const { id } = useLocalSearchParams()
  const { room, loading } = useRoom(id.toString())

  if (loading) {
    return <View>
      <Stack.Screen
        options={{
          // headerShown: true,
          title: "Loading...",
        }}
      />
      <View className='flex-1 items-center justify-center h-full mt-20'>

        <ActivityIndicator size='large' />
      </View>
    </View>
  }

  if (!room) {
    return <Text>Room not found</Text>
  }
  return (

    <>
      <Stack.Screen
        options={{
          title: room.name ?? "Room Details",
        }}
      />

      <ScrollView className='p-6'>


        <Link href='/'> Go to Explore
        </Link>

        <View className='mb-20'>
          <RoomDetails room={room} />
          <RoomDetails room={room} />
          <RoomDetails room={room} />
          <RoomDetails room={room} />
          <RoomDetails room={room} />
          <RoomDetails room={room} />
          <RoomDetails room={room} />
          <RoomDetails room={room} />
          <RoomDetails room={room} />
          <RoomDetails room={room} />
        </View>
      </ScrollView>

    </>

  )
}