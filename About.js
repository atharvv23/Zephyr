import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function About() {
  const navigation = useNavigation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.appName}>Z</Text>
        <View style={styles.navItems}>
          <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('Home'); }}>
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
              <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('FindGyms'); }}>
                <Text style={styles.dropdownItem}>Find Gyms</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity>
            <Text style={styles.navText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('Contact'); }}>
            <Text style={styles.navText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* About Section */}
      <Text style={styles.title}>About Zephyr</Text>
      <Text style={styles.paragraph}>
        Zephyr is a comprehensive health and fitness app designed to help users achieve their wellness goals with ease and flexibility. 
        From beginners to advanced fitness enthusiasts, Zephyr provides a range of features to cater to everyone’s fitness needs.
      </Text>
      <Text style={styles.paragraph}>
        Our app offers tools for calculating your BMI, assessing your maintenance calorie needs, and finding workouts tailored to your 
        experience level. Whether you're just starting your fitness journey or looking to take it to the next level, Zephyr has a personalized
        workout plan for you.
      </Text>
      <Text style={styles.paragraph}>
        Additionally, Zephyr includes a yoga section and a locator for nearby gyms, ensuring that users have access to holistic fitness 
        options. Our goal is to create an all-in-one wellness platform that integrates smoothly into your lifestyle, providing flexibility and 
        convenience in maintaining a healthy body and mind.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 20,
  },
  navBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    // backgroundColor: '#333',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    marginTop: 15,
  },
  appName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 20,
  },
  navItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: '10',
  },
  navText: {
    color: '#ffffff',
    fontSize: 16,
    marginHorizontal: 10,
    fontWeight: '600',
    
  },
  dropdownMenu: {
    position: 'absolute',
    top: 30,
    left: 70,
    backgroundColor: '#444',
    borderRadius: 5,
    padding: 10,
  },
  dropdownItem: {
    color: '#ffffff',
    fontSize: 14,
    paddingVertical: 5,
  },
  title: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
});
