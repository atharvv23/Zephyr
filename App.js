import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CalculateBmi from './CalculateBmi';
import MainCals from './MainCals';
import CalorieTracker from './CalorieTracker';
import Yoga from './Yoga';
import FindGyms from './FindGyms';
import About from './About';
import Contact from './Contact';
import Login from './Login'
import SignUp from './SignUp'

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/4753921/pexels-photo-4753921.jpeg?auto=compress&cs=tinysrgb&w=600',
      }}
      style={styles.background}
    >
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Zephyr</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('Login')} // Navigate to Home for login
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => navigation.navigate('SignUp')} // Navigate to SignUp screen
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />        
        <Stack.Screen name="CalculateBmi" component={CalculateBmi} options={{ headerShown: false }} />
        <Stack.Screen name="MainCals" component={MainCals} options={{ headerShown: false }} />
        <Stack.Screen name="CalorieTracker" component={CalorieTracker} options={{ headerShown: false }} />
        <Stack.Screen name="Yoga" component={Yoga} options={{ headerShown: false }} />
        <Stack.Screen name="FindGyms" component={FindGyms} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
        <Stack.Screen name="Contact" component={Contact} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    fontSize: 40,
    color: 'white',
    marginBottom: 20,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row', // Buttons side by side
    justifyContent: 'space-between',
    width: '60%',
  },
  buttons: {
    backgroundColor: '#ff4b1f', // Background color for buttons
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 15,
    margin: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});
