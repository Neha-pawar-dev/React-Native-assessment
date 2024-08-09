import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoriesScreen from './screens/CategoriesScreen';
import SubCategoriesScreen from './screens/SubCategoriesScreen';
import SearchScreen from './screens/SearchScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="SubCategories" component={SubCategoriesScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}

function App() {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={MainStack}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{title: 'Search'}}
        />
      </Tab.Navigator> */}
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            switch (route.name) {
              case 'Orders':
                iconName = 'cart-outline';
                break;
              case 'Products':
                iconName = 'pricetag-outline';
                break;
              case 'Overview':
                iconName = 'wallet-outline';
                break;
              case 'Profile':
                iconName = 'person-outline';
                break;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarHideOnKeyboard: true,
          headerShown: false,
        })}>
        <Tab.Screen name="Orders" component={MainStack} />
        <Tab.Screen name="Products" component={MainStack} />
        <Tab.Screen name="Overview" component={MainStack} />
        <Tab.Screen name="Profile" component={MainStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
