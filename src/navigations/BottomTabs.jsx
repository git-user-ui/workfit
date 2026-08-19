import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeFilled from '../assets/icons/home-filled.svg';
import HomeOutline from '../assets/icons/home-outline.svg';
// Screens
import HomeScreen from '../screens/Home/HomeScreen';

const HistoryScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>History</Text>
  </View>
);

const ExercisesScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>Exercises</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.placeholder}>
    <Text style={styles.placeholderText}>Profile</Text>
  </View>
);

const AddScreen = () => null;

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Exercises" component={ExercisesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  const getIcon = (routeName, focused) => {
    const color = focused ? '#9B6CFF' : '#777D8A';

    switch (routeName) {
      case 'Home':
        return <HomeOutline width={21} height={21} color="#FFFFFF" />;

      case 'History':
        return <HomeOutline width={21} height={21} color="#FFFFFF" />;

      case 'Exercises':
        return <HomeOutline width={21} height={21} color="#FFFFFF" />;

      case 'Profile':
        return <HomeOutline width={21} height={21} color="#FFFFFF" />;

      default:
        return null;
    }
  };

  const handleAddPress = () => {
    // Put your create/start workout action here.
    console.log('Add workout pressed');
  };

  return (
    <View style={[styles.tabWrapper]}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          // Center + button
          if (route.name === 'Add') {
            return (
              <View key={route.key} style={styles.centerTabContainer}>
                <TouchableOpacity
                  style={styles.addButton}
                  activeOpacity={0.85}
                  onPress={handleAddPress}
                  accessibilityRole="button"
                  accessibilityLabel="Create workout"
                >
                  <View style={styles.addButtonInner}>
                    <HomeOutline color="#FFFFFF" width={28} height={28} />
                  </View>
                </TouchableOpacity>
              </View>
            );
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const label =
            descriptors[route.key]?.options?.tabBarLabel ??
            descriptors[route.key]?.options?.title ??
            route.name;

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="tab"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={String(label)}
              activeOpacity={0.75}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
            >
              <View
                style={[
                  styles.iconContainer,
                  isFocused && styles.activeIconContainer,
                ]}
              >
                {getIcon(route.name, isFocused)}
              </View>

              <Text
                style={[styles.tabLabel, isFocused && styles.activeTabLabel]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 8,
    backgroundColor: 'transparent',
  },

  tabBar: {
    height: 64,
    backgroundColor: '#151A24',
    borderWidth: 1,
    borderColor: '#2B303B',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,

    elevation: 12,
  },

  tabItem: {
    flex: 1,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    width: 32,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  activeIconContainer: {
    backgroundColor: 'rgba(112, 65, 232, 0.12)',
  },

  tabLabel: {
    color: '#737A88',
    fontSize: 9,
    fontWeight: '500',
    marginTop: 2,
  },

  activeTabLabel: {
    color: '#9B6CFF',
    fontWeight: '700',
  },

  centerTabContainer: {
    width: 72,
    height: 64,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -24,
    zIndex: 20,
  },

  addButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#151A24',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#3A3159',
    shadowColor: '#7041E8',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,

    elevation: 12,
  },

  addButtonInner: {
    width: 47,
    height: 47,
    borderRadius: 24,
    backgroundColor: '#7041E8',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9671F0',
    shadowColor: '#8D61F4',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.45,
    shadowRadius: 7,
    elevation: 7,
  },

  placeholder: {
    flex: 1,
    backgroundColor: '#090D15',
    alignItems: 'center',
    justifyContent: 'center',
  },

  placeholderText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
});
