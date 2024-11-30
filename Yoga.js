import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Yoga() {
  const navigation = useNavigation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/3894112/pexels-photo-3894112.jpeg?auto=compress&cs=tinysrgb&w=600',
      }}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
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
                <TouchableOpacity onPress={() => { setIsServicesOpen(false); navigation.navigate('Workout'); }}>
                  <Text style={styles.dropdownItem}>Workout</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.dropdownItem}>Yoga</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.dropdownItem}>Find Gyms</Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity>
              <Text style={styles.navText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navText}>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Yoga Section */}
        <Text style={styles.title}>Yoga</Text>

        {/* Introduction */}
        {/* <Text style={styles.sectionTitle}>Why Does Our Body Need Yoga?</Text> */}
        <Text style={styles.paragraph}>
          Yoga is a practice that unites the body, mind, and spirit, promoting physical strength, mental clarity, and emotional balance. 
          Regular yoga practice helps reduce stress, improves flexibility, and builds resilience.
        </Text>

        {/* Yoga Poses */}
        {yogaPoses.map((pose, index) => (
          <View key={index} style={styles.poseContainer}>
            <Text style={styles.poseTitle}>{pose.name}</Text>
            <Image style={styles.poseImage} source={{ uri: pose.image }} />
            <Text style={styles.poseInstructions}>{pose.instructions}</Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

// Yoga Poses Data
const yogaPoses = [
  {
    name: 'Tadasana',
    image: 'https://tse2.mm.bing.net/th?id=OIP.xc8MVI4s5JqQa0HFZNoo6wHaFE&pid=Api&P=0&h=180',
    instructions: 'Stand tall with feet together, shoulders relaxed, and arms at sides. Inhale deeply and reach your arms overhead, stretching from your heels to your fingertips.',
  },
  {
    name: 'Adho Mukha Svanasana',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0uXhPs2V5m37xNU3FQItyQF6rqnp60e6hig&s',
    instructions: 'Start on all fours. Lift your hips up, straighten your knees, and form an inverted V shape with your body. Keep your hands shoulder-width apart and feet hip-width apart.',
  },
  {
    name: 'Virabhadrasana I',
    image: 'https://tse3.mm.bing.net/th?id=OIP.0bsLWIBMLVjHg9ziDo107QHaE7&pid=Api&P=0&h=180',
    instructions: 'Step one foot forward into a lunge position. Turn your back foot out slightly and raise your arms above your head. Look forward and hold the pose.',
  },
  {
    name: 'Vrksasana',
    image: 'https://tse4.mm.bing.net/th?id=OIP.1bRIvyHYiYjLRJiAyMFcwgHaE8&pid=Api&P=0&h=180',
    instructions: 'Stand with arms at your sides. Shift weight onto one foot, and bring the sole of the opposite foot to your inner thigh. Balance and bring your hands to prayer position.',
  },
  {
    name: 'Setu Bandhasana',
    image: 'https://tse4.mm.bing.net/th?id=OIP.nHB4UyNc0mlr5gamg7l0oAHaEK&pid=Api&P=0&h=180',
    instructions: 'Lie on your back with knees bent and feet flat. Lift your hips and chest, clasping your hands under your back. Hold the pose, then release slowly.',
  },
  {
    name: 'Balasana',
    image: 'https://tse2.mm.bing.net/th?id=OIP.v3p_A4xgnKpzdsIu5ZOfhQHaE8&pid=Api&P=0&h=180',
    instructions: 'Kneel on the floor, sit back on your heels, and lean forward. Stretch your arms out in front and rest your forehead on the mat.',
  },
  {
    name: 'Bhujangasana',
    image: 'https://tse4.mm.bing.net/th?id=OIP.xuNFkXBaJxoPX4BuxLYxgQHaFj&pid=Api&P=0&h=180',
    instructions: 'Lie on your stomach, place your hands under your shoulders, and lift your chest by straightening your arms. Keep your elbows slightly bent.',
  },
  {
    name: 'Paschimottanasana',
    image: 'https://tse4.mm.bing.net/th?id=OIP.Vfj0kvi5fu9jdN-S6qLUdgHaEK&pid=Api&P=0&h=180',
    instructions: 'Sit with your legs extended in front of you. Reach forward to grasp your feet and gently pull your upper body toward your legs, maintaining a flat back.',
  },
];

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  navBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0,
    zIndex: 1,
    marginTop: 30,
    marginLeft: 10,
  },
  appName: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 20,
  },
  navItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 25,
    
  },
  navText: {
    color: 'black',
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
    color: '#3E5C4B',
    fontWeight: 'bold',
    marginTop: 100,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    color: '#8C6A4B',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    color: '#3E5C4B',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  poseContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  poseTitle: {
    fontSize: 20,
    color: '#003366',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  poseImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  poseInstructions: {
    color: '#003366',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
