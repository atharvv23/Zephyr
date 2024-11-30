import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill all fields!");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password,
    };

    try {
      await AsyncStorage.setItem('@user_data', JSON.stringify(user));
      Alert.alert("Success", "Successfully Signed Up!", [
        { text: "OK", onPress: () => navigation.navigate("Login") },
      ]);

      // Clear the input fields after signup
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Failed to save user data.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zephyr</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c1c1c', // Dark background
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    color: '#ffffff', // White title
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    width: '100%',
    backgroundColor: '#333333', // Darker input background
    borderRadius: 20, // Rounded corners
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#ffffff', // White text
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#ff4b1f', // Bright red button
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25, // Rounded button
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff', // White text
    fontSize: 18,
    textAlign: 'center',
  },
});
