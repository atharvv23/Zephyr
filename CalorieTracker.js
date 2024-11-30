import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Import from the new package
import { useNavigation } from '@react-navigation/native';
import foodData from './indian_food_calories.json'; // Adjust the path as necessary

const CalorieTracker = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [servings, setServings] = useState('');
  const [foodDiary, setFoodDiary] = useState([]);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigation = useNavigation();

  // Function to add food item to the diary
  const addToDiary = () => {
    if (selectedFood && servings) {
      const totalCalories = selectedFood.calories_per_serving * parseFloat(servings); // Calculate total calories
      const entry = {
        name: selectedFood.name,
        servings,
        totalCalories,
      };
      setFoodDiary((prevDiary) => [...prevDiary, entry]); // Add entry to diary
      setSelectedFood(null);
      setServings(''); // Clear input fields
    } else {
      alert('Please select food and enter servings.');
    }
  };

  // Function to remove an item from the diary
  const removeFromDiary = (index) => {
    setFoodDiary((prevDiary) => prevDiary.filter((_, i) => i !== index));
  };

  // Calculate the total calories
  const totalCalories = foodDiary.reduce((sum, entry) => sum + entry.totalCalories, 0);

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600',
      }}
      style={styles.container}
    >
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.appName}>Z</Text>
        <View style={styles.navItems}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleServicesMenu}>
            <Text style={styles.navText}>Services</Text>
          </TouchableOpacity>
          {isServicesOpen && (
            <View style={styles.dropdownMenu}>
              <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('CalculateBmi'); }}>
                <Text style={styles.dropdownItem}>Calculate BMI</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('MainCals'); }}>
                <Text style={styles.dropdownItem}>Calculate Maintenance Calorie</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('Yoga'); }}>
                <Text style={styles.dropdownItem}>Yoga</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('CalorieTracker'); }}>
                <Text style={styles.dropdownItem}>Calorie Tracker</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('FindGyms'); }}>
                <Text style={styles.dropdownItem}>Find Gyms</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('About'); }}>
            <Text style={styles.navText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('Contact'); }}>
            <Text style={styles.navText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <Text style={styles.title}>Calorie Tracker</Text>

      <Picker
        selectedValue={selectedFood}
        onValueChange={(itemValue) => setSelectedFood(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Food" value={null} />
        {foodData.map((food, index) => (
          <Picker.Item
            key={index}
            label={`${food.name} (${food.serving_size})`}
            value={food}
          />
        ))}
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Enter Servings"
        value={servings}
        onChangeText={(text) => setServings(text)}
        keyboardType="numeric"
        placeholderTextColor="#fff"
      />

      {/* Add to Diary Button */}
      <TouchableOpacity style={styles.addButton} onPress={addToDiary}>
        <Text style={styles.addButtonText}>Add to Diary</Text>
      </TouchableOpacity>

      {/* Food Diary */}
      <Text style={styles.diaryTitle}>Food Diary</Text>
      <FlatList
        data={foodDiary}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.diaryEntry}>
            <Text style={styles.diaryText}>
              {item.name} - {item.servings} servings - {item.totalCalories} kcal
            </Text>
            <TouchableOpacity onPress={() => removeFromDiary(index)}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Total Calories */}
      <Text style={styles.totalCalories}>Today's Total Calories: {totalCalories} kcal</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  navBar: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    marginTop: 30,
  },
  appName: {
    fontSize: 24,
    color: '#ffffff',
  },
  navItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navText: {
    fontSize: 17,
    color: '#ffffff',
    marginLeft: 20,
    fontWeight: '600',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    backgroundColor: '#222',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#444',
    zIndex: 2,
  },
  dropdownItem: {
    fontSize: 16,
    color: '#ffffff',
    paddingVertical: 8,
    marginVertical: 2,
    textAlign: 'left',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 20,
    marginTop: 60,
  },
  picker: {
    height: 50,
    width: '80%',
    color: '#fff',
    marginVertical: 10,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#fff',
    width: '80%',
    backgroundColor: '#000',
  },
  addButton: {
    backgroundColor: '#000',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  diaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 20,
  },
  diaryEntry: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 15,
    width: '100%',
  },
  diaryText: {
    fontSize: 14,
  },
  removeText: {
    fontSize: 14,
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  totalCalories: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 200,
  },
});

export default CalorieTracker;
