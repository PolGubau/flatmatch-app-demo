import React from 'react'
import { View } from 'react-native'
import Screen from '~/components/layout/Screen'
import { ThemedText } from '~/components/ThemedText'

export default function chat() {
  return (
    <Screen>

      <View  >
        <ThemedText type="title">Chat</ThemedText>
      </View>
    </Screen>
  )
}

