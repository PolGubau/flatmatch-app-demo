import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function profile() {
  return (
    <SafeAreaView className='p-6'>
      <Text style={styles.name}>profile</Text>
      <TextInput
        className='border border-gray-300 rounded-md p-2'
        placeholder='Enter your name'
        style={{ fontSize: 16, marginTop: 10 }}
        autoCapitalize='words'
        autoCorrect={false}

        returnKeyType="done"
        onSubmitEditing={(e) => {
          console.log('Submitted name:', e.nativeEvent.text);
        }}
        onChangeText={(text) => {
          console.log('Name changed:', text);
        }}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    color: 'red',
  }
})