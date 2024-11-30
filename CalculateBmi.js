import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons for the back button icon

export default function CalculateBmi() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const navigation = useNavigation(); // Initialize navigation

  const calculateBmi = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setBmiCategory('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setBmiCategory('Normal weight');
      else if (bmiValue >= 25 && bmiValue < 29.9) setBmiCategory('Overweight');
      else setBmiCategory('Obesity');
    }
  };

  return (
    <View style={styles.container}>
      {/* Zephyr Label at the top left */}
      {/* <Text style={styles.zephyrLabel}>Zephyr</Text> */}

      {/* Go back icon above the BMI Calculator title */}
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>BMI Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter weight (kg)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter height (cm)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <TouchableOpacity style={styles.button} onPress={calculateBmi}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>

      {bmi && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your BMI: {bmi}</Text>
          <Text style={styles.categoryText}>Category: {bmiCategory}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 100, // Add top padding to make space for the Zephyr label and GoBack icon
  },
  zephyrLabel: {
    position: 'absolute',
    top: 40,
    left: 20,
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  goBackButton: {
    position: 'absolute',
    top: 60, // Adjust the position of the goBack icon
    left: 20,
    padding: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
    marginTop: 50, // Add some spacing between the goBack icon and the title
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 10,
    color: '#ffffff',
    paddingHorizontal: 15,
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#ff4d4d',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    color: '#ffffff',
  },
  categoryText: {
    fontSize: 18,
    color: '#ff4d4d',
    marginTop: 10,
  },
});
