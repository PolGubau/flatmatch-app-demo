import type { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


type Props = PropsWithChildren;

export default function Screen({
  children,
}: Props) {
  return (
    <SafeAreaView>
      <View style={styles.container} className='bg-neutral-50 text-neutral-900'>
        <View style={styles.content}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: '100%',
  },

  content: {
    flex: 1,
    padding: 24,
    gap: 16,
    overflow: 'hidden',
  },
});
