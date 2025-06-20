/* eslint-disable react-native/no-inline-styles */
import { AntDesign } from '@expo/vector-icons';
import React, { useCallback, useRef } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacityProps,
  View
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list';

import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Room } from '~/src/domain/rooms/Room';



const ICON_SIZE = 24;
type Props = {
  rooms: Room[];
};
export const RoomSwiper = ({ rooms }: Props) => {
  const ref = useRef<SwiperCardRefType>(null);
  const renderCard = useCallback((room: Room) => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    return (
      <View style={styles.renderCardContainer} className='bg-neutral-300'>
        {/* <Image
          source={image}
          style={styles.renderCardImage}
          resizeMode="cover"
        /> */}
        <Text>{room.name}</Text>

        <Text>{currentImageIndex}</Text>
        <Pressable
          onPress={() => {
            setCurrentImageIndex((prev) => prev + 1);
          }}
        >
          <Text>Next</Text>
        </Pressable>


        <Link
          href={{
            pathname: '/room/[id]',
            params: { id: room.id }
          }}
        >
          View Room
        </Link>
      </View>
    );
  }, []);
  const OverlayLabelRight = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: 'green',
          },
        ]}
      />
    );
  }, []);
  const OverlayLabelLeft = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: 'red',
          },
        ]}
      />
    );
  }, []);
  const OverlayLabelTop = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: 'blue',
          },
        ]}
      />
    );
  }, []);
  const OverlayLabelBottom = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: 'orange',
          },
        ]}
      />
    );
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.subContainer}>
        <Swiper
          ref={ref}


          prerenderItems={2}
          keyExtractor={(item: Room) => item.id.toString()}
          cardStyle={styles.cardStyle}
          data={rooms}
          renderCard={renderCard}
          // onIndexChange={(index) => {
          //   console.log('Current Active index', index);
          // }}
          // onSwipeRight={(cardIndex) => {
          //   console.log('cardIndex', cardIndex);
          // }}
          // onPress={() => {
          //   console.log('onPress');
          // }}
          // onSwipedAll={() => {
          //   console.log('onSwipedAll');
          // }}
          // onSwipeLeft={(cardIndex) => {
          //   console.log('onSwipeLeft', cardIndex);
          // }}
          // onSwipeTop={(cardIndex) => {
          //   console.log('onSwipeTop', cardIndex);
          // }}
          // onSwipeBottom={(cardIndex) => {
          //   console.log('onSwipeBottom', cardIndex);
          // }}
          OverlayLabelRight={OverlayLabelRight}
          OverlayLabelLeft={OverlayLabelLeft}
          OverlayLabelTop={OverlayLabelTop}
          OverlayLabelBottom={OverlayLabelBottom}
        // onSwipeActive={() => {
        //   console.log('onSwipeActive');
        // }}
        // onSwipeStart={() => {
        //   console.log('onSwipeStart');
        // }}
        // onSwipeEnd={() => {
        //   console.log('onSwipeEnd');
        // }}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <ActionButton
          style={styles.button}
          onTap={() => {
            ref.current?.swipeBack();
          }}
        >
          <AntDesign name="reload1" size={ICON_SIZE} color="white" />
        </ActionButton>
        <ActionButton
          style={styles.button}
          onTap={() => {
            ref.current?.swipeLeft();
          }}
        >
          <AntDesign name="close" size={ICON_SIZE} color="white" />
        </ActionButton>
        <ActionButton
          style={styles.button}
          onTap={() => {
            ref.current?.swipeBottom();
          }}
        >
          <AntDesign name="arrowdown" size={ICON_SIZE} color="white" />
        </ActionButton>
        <ActionButton
          style={styles.button}
          onTap={() => {
            ref.current?.swipeTop();
          }}
        >
          <AntDesign name="arrowup" size={ICON_SIZE} color="white" />
        </ActionButton>
        <ActionButton
          style={styles.button}
          onTap={() => {
            ref.current?.swipeRight();
          }}
        >
          <AntDesign name="heart" size={ICON_SIZE} color="white" />
        </ActionButton>
      </View>
    </GestureHandlerRootView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    bottom: 34,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  button: {
    height: 50,
    borderRadius: 40,
    aspectRatio: 1,
    backgroundColor: '#3A3D45',
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardStyle: {
    width: '95%',
    height: '80%',
    borderRadius: 15,
    marginVertical: 20,
  },
  renderCardContainer: {
    flex: 1,
    borderRadius: 15,
    height: '75%',
    width: '100%',
  },
  renderCardImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayLabelContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});
type ActionButtonProps = TouchableOpacityProps & {
  onTap?: () => void;
};

const ActionButton = React.memo(
  ({ onTap, style, children, ...rest }: ActionButtonProps) => {
    return (
      <TouchableOpacity onPress={onTap} {...rest} style={style}>
        {children}
      </TouchableOpacity>
    );
  }
);

