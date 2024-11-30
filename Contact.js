import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Linking, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Contact = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');

  const handleSendMail = () => {
    if (!name || !email || !issue) {
      Alert.alert('Error', 'Please fill all fields before sending.');
      return;
    }

    const subject = `Issue Report from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nIssue:\n${issue}`;
    const mailtoUrl = `mailto:zephyrrfitness@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl).catch((err) => {
      Alert.alert('Error', 'Unable to open mail app. Please try again later.');
      console.error(err);
    });
  };

  return (
    <View style={styles.container}>
      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <Text style={styles.appName}>Z</Text>
        <View style={styles.navItems}>
          <TouchableOpacity onPress={() => { navigation.navigate('Home'); }}>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('About'); }}>
            <Text style={styles.navText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { navigation.navigate('Contact'); }}>
            <Text style={styles.navText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Get In Touch Form */}
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Get In Touch</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={[styles.input, styles.issueInput]}
          placeholder="Describe the issue"
          placeholderTextColor="#ccc"
          multiline={true}
          numberOfLines={4}
          value={issue}
          onChangeText={(text) => setIssue(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSendMail}>
          <Text style={styles.buttonText}>Send Mail</Text>
        </TouchableOpacity>
        <View style={styles.socialIcons}>
          <FontAwesome
            name="facebook"
            size={32}
            color="#eb9928"
            onPress={() => Linking.openURL('https://facebook.com')}
            style={styles.iconSpacing2}
          />
          <FontAwesome
            name="instagram"
            size={32}
            color="#eb9928"
            onPress={() => Linking.openURL('https://instagram.com')}
            style={styles.iconSpacing2}
          />
          <FontAwesome
            name="twitter"
            size={32}
            color="#eb9928"
            onPress={() => Linking.openURL('https://twitter.com')}
            style={styles.iconSpacing3}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f4858',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 35,
  },
  appName: {
    fontSize: 24,
    color: 'gold',
    fontWeight: 'bold',
  },
  navItems: {
    flexDirection: 'row',
  },
  navText: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 16,
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffebcc',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#444',
    borderRadius: 25, // Increased for more rounded corners
    width: '100%',
    padding: 15,
    marginBottom: 15,
    color: 'white',
    fontSize: 16,
  },
  issueInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#5f788a',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffebcc',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  iconSpacing2: {
    marginLeft: 5,
    marginRight: 15,
  },
  iconSpacing3: {
    marginLeft: 4,
  },
});


export default Contact;
