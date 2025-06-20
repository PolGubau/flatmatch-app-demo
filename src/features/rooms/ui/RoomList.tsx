import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useRooms } from '../model/useRooms'
import { RoomSwiper } from './RoomSwiper'

export const RoomList = () => {
  const { rooms, loading } = useRooms()
  if (loading) {
    return <ActivityIndicator size='large' />
  }
  return (
    <>
      {/* <FlatList
        keyExtractor={(item) => item.id}
        data={rooms} renderItem={({ item, index }) => <AnimatedRoomPreview room={item} index={index} />}
      /> */}
      <RoomSwiper rooms={ rooms} />
    </>
  )
}
