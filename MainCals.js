import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the back button icon
import { Picker } from '@react-native-picker/picker'; // Updated import for Picker

export default function MainCals() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('1.2');
  const [calories, setCalories] = useState(null);
  const navigation = useNavigation(); // Initialize navigation

  const calculateCalories = () => {
    if (weight && height && age) {
      // Mifflin-St Jeor Equation for BMR
      let bmr;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      // Calculate TDEE based on activity level
      const tdee = bmr * parseFloat(activityLevel);
      setCalories(tdee.toFixed(0));
    }
  };

  return (
    <View style={styles.container}>
      {/* Go back icon */}
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Maintenance Calories Calculator</Text>

      {/* Weight Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter weight (kg)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      {/* Height Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter height (cm)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      {/* Age Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter age (years)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      {/* Gender Picker */}
      <Picker
        selectedValue={gender}
        style={styles.picker}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      {/* Activity Level Picker */}
      <Picker
        selectedValue={activityLevel}
        style={styles.picker}
        onValueChange={(itemValue) => setActivityLevel(itemValue)}
      >
        <Picker.Item label="Sedentary (little to no exercise)" value="1.2" />
        <Picker.Item label="Lightly Active (light exercise 1-3 days/week)" value="1.375" />
        <Picker.Item label="Moderately Active (moderate exercise 3-5 days/week)" value="1.55" />
        <Picker.Item label="Very Active (hard exercise 6-7 days/week)" value="1.725" />
        <Picker.Item label="Super Active (very hard exercise & physical job)" value="1.9" />
      </Picker>

      {/* Calculate Button */}
      <TouchableOpacity style={styles.button} onPress={calculateCalories}>
        <Text style={styles.buttonText}>Calculate Maintenance Calories</Text>
      </TouchableOpacity>

      {/* Result */}
      {calories && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your Maintenance Calories: {calories} kcal/day</Text>
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
    paddingTop: 100,
  },
  goBackButton: {
    position: 'absolute',
    top: 40,
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
    marginTop: 60,
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
  picker: {
    width: '80%',
    height: 50,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 10,
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
    fontSize: 17,
    color: '#ffffff',
  },
});
