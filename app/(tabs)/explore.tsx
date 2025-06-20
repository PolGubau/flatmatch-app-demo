import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import Screen from '~/components/layout/Screen';
import { RoomList } from '~/src/features/rooms/ui/RoomList';

export default function TabTwoScreen() {
  return (
    <Screen>

      <View>
        <Text>Explore</Text>
      </View>

      <RoomList />





      <Link href="../room/create" className='bg-blue-700 active:bg-blue-600 p-4 rounded-full max-w-[70vw] mx-auto w-full fixed mb-8 px-10 text-neutral-50 items-center text-center '>
        <MaterialIcons name="create" size={20} color="white" className='mr-4' />
        <Text className='w-fit'>
          Crear anuncio
        </Text>
      </Link>

    </Screen>
  );
}


