import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State to toggle Services menu

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=600' }} // Replace with your desired background image URL
      style={styles.background}
    >
      <View style={styles.overlay}>
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

            {/* Dropdown Menu for Services */}
            {isServicesOpen && (
              <View style={styles.dropdownMenu}>
                <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('CalculateBmi'); }}>
                  <Text style={styles.dropdownItem}>Calculate BMI</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('MainCals'); }}>
                  <Text style={styles.dropdownItem}>Calculate Maintenance Calorie</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('CalorieTracker'); }}>
                  <Text style={styles.dropdownItem}>Calorie Tracker</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('Yoga'); }}>
                  <Text style={styles.dropdownItem}>Yoga</Text>
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

        {/* Home Screen Content */}
        <Text style={styles.homeText}>Welcome to Zephyr!</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the entire screen
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for readability
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  appName: {
    fontSize: 27,
    color: 'gold',
    fontWeight: 'bold',
    marginTop: -9,
  },
  navItems: {
    flexDirection: 'row',
  },
  navText: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 40,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    zIndex: 1,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  homeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});

export default HomeScreen;
