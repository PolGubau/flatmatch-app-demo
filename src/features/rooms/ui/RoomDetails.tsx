import React from 'react'
import { Text, View } from 'react-native'
import { Room } from '~/src/domain/rooms/Room'

export default function RoomDetails({ room }: { room: Room }) {


  return (
    <View>
      <Text>Room Details</Text>
      <Text>ID: {room.id}</Text>
      <Text>Name: {room.name}</Text>
      <Text>Description: {room.description}</Text>


      <Text>Created At: {new Date(room.createdAt).toLocaleDateString()}</Text>

    </View>
  )
}
