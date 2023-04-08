import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Search from './screens/Search';
import BookDetail from './screens/BookDetail';
import CategoryScreen from './screens/CategoryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
        <Stack.Screen name="Book Detail" component={BookDetail} options={{ headerTransparent: true, title: null }} />
        <Stack.Screen name="Category" component={CategoryScreen} options={({ route }) => ({ title: `${route.params.type}s`, 'headerTitleAlign': 'center' })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
