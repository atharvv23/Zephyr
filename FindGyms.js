import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import gymsData from './gyms.json'; // Import the static gyms data
import { Picker } from '@react-native-picker/picker';

const FindGyms = ({ navigation }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [gyms, setGyms] = useState([]);

  const handleSearchGym = () => {
    if (selectedCity) {
      const cityGyms = gymsData[selectedCity];
      setGyms(cityGyms || []);
    } else {
      alert('Please select a city');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.pexels.com/photos/6389506/pexels-photo-6389506.jpeg?auto=compress&cs=tinysrgb&w=600' }} // Replace with your desired navbar background image URL
      style={styles.background}
    >
      {/* Navbar */}
      <View style={styles.navBar}>
        <Text style={styles.navTitle}>Z</Text>
        <View style={styles.navItems}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Services')}>
            <Text style={styles.navText}>Services</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('About')}>
            <Text style={styles.navText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.navText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.container}>
        <Text style={styles.title}>Find the Best Gyms in Your City</Text>

        {/* City Selector */}
        <Picker
          selectedValue={selectedCity}
          onValueChange={(itemValue) => setSelectedCity(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select City" value={null} />
          {Object.keys(gymsData).map((city, index) => (
            <Picker.Item key={index} label={city} value={city} />
          ))}
        </Picker>

        {/* Search Button */}
        <TouchableOpacity style={styles.button} onPress={handleSearchGym}>
      <Text style={styles.buttonText}>Search Gym</Text>
    </TouchableOpacity>

        {/* Display Top 5 Gyms */}
        {gyms.length > 0 && (
          <View style={styles.gymListContainer}>
            <Text style={styles.gymListTitle}>Top 5 Gyms in {selectedCity}</Text>
            <FlatList
              data={gyms}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.gymItem}>
                  <Text style={styles.gymName}>{item.name}</Text>
                  <Text style={styles.gymDetails}>Location: {item.location}</Text>
                  <Text style={styles.gymDetails}>Rating: {item.rating} / 5</Text>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  navBar: {
    // backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 30,
  },
  navTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gold',
  },
  navItems: {
    flexDirection: 'row',
  },
  navText: {
    fontSize: 16,
    color: 'white',
    marginHorizontal: 10,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  picker: {
    height: 50,
    width: '80%',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 5,
    marginBottom: 20,
  },
  gymListContainer: {
    marginTop: 20,
    width: '100%',
  },
  gymListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  gymItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20, // rounded edges
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  gymName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gymDetails: {
    fontSize: 14,
  },
});

export default FindGyms;
