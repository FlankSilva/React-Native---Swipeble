import { useRef } from 'react';
import { View, FlatList } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Card } from '../../components/card';
import { Option } from '../../components/option';

import { contacts } from '../../utils/contacts';
import { styles } from './styles';

export function Home() {
  const openSwipeableRef = useRef<Swipeable | null>(null);

  function onSwipeableWillOpen(
    direction: 'left' | 'right',
    current: Swipeable | null,
  ) {
    if (direction === 'left') {
    }

    if (openSwipeableRef.current) {
      openSwipeableRef.current.close();
    }

    openSwipeableRef.current = current;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          let current: Swipeable | null = null;

          return (
            <Swipeable
              ref={(swipeable) => (current = swipeable)}
              containerStyle={styles.swipeableContainer}
              overshootRight={false}
              onSwipeableWillOpen={(direction) =>
                onSwipeableWillOpen(direction, current)
              }
              friction={2}
              // onSwipeableOpen={() => console.log('onSwipeableOpen')}
              // onSwipeableClose={() => console.log('onSwipeableClose')}
              // onSwipeableWillOpen={(direction) => console.log(direction)}
              // onSwipeableWillClose={() => console.log('onSwipeableWillClose')}
              renderRightActions={() => (
                <View style={styles.rightActions}>
                  <Option icon="open-in-new" backgroundColor={'#00B960'} />
                  <Option icon="close" backgroundColor={'#3E68D7'} />
                </View>
              )}
              renderLeftActions={() => (
                <View style={styles.leftActions}>
                  <Option icon="delete" backgroundColor={'#E83D55'} />
                </View>
              )}
            >
              <Card name={item.name} email={item.email} />
            </Swipeable>
          );
        }}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
