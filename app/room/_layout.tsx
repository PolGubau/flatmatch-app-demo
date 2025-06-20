import { Stack } from 'expo-router';
import React from 'react';


export default function TabLayout() {

  return (

    <Stack
      screenOptions={{
        // headerShown: false,
      }}
    >
      {/* <Stack.Screen name="[id]" options={{
        headerTitle: 'Room Details',
      }} /> */}
      <Stack.Screen name="create" />
    </Stack>


  );
}
