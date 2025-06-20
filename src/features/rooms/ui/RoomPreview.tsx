import { Link } from 'expo-router'
import React, { useEffect, useRef } from 'react'
import { Animated, Pressable, Text } from 'react-native'
import { Room } from '~/src/domain/rooms/Room'
type Props = {
  index: number
  room: Room
}
const RoomPreview = ({ room }: Props) => {
  const opacity = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [opacity])
  return (
    <Link href={{ pathname: "/room/[id]", params: { id: room.id } }} asChild>

      <Pressable className='active:opacity-70 active:bg-neutral-400/20 rounded-lg'>
        <Animated.View className='flex flex-col py-4 gap-2 border-b border-neutral-200' style={{ opacity }}>

          <Text className='text-xl font-bold'>{room.name}</Text>
          <Text>{room.description}</Text>
        </Animated.View>
      </Pressable>
    </Link>
  )
}



export const AnimatedRoomPreview = (props: Props) => {
  const opacity = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      delay: props.index * 200,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [opacity])
  return <RoomPreview {...props} />
}
