import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user_data');
      if (jsonValue != null) {
        const storedUser = JSON.parse(jsonValue);

        if (storedUser.email === email && storedUser.password === password) {
          Alert.alert("Login Successful", "Welcome back!");
          navigation.navigate('Home'); // Navigate to HomeScreen
        } else {
          Alert.alert("Login Failed", "Invalid email or password.");
        }
      } else {
        Alert.alert("Login Failed", "No user data found. Please sign up first.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "An error occurred while logging in.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zephyr</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c1c1c',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    width: '100%',
    backgroundColor: '#333333',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#ff4b1f',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});
