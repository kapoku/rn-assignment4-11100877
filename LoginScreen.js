import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Jobizz</Text>
        <Text style={styles.subtitle}>Welcome Back 👋</Text>
        <Text style={styles.description}>Let's log in. Apply to jobs!</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, styles.inputMargin]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={[styles.loginButton, styles.inputMargin]} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <View style={[styles.lineContainer, styles.inputMargin]}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or continue with</Text>
        <View style={styles.line} />
      </View>
      <View style={[styles.footer, styles.inputMargin]}>
        <TouchableOpacity>
          <Image source={require('./Images/apple-logo.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./Images/google.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('./Images/facebook.png')} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Haven't an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 30, // Add some space between the header and the inputs
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E90FF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 60, // Increased space
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  inputMargin: {
    marginBottom: 40, // Increased space between inputs and button
  },
  loginButton: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40, // Increased space
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#555',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40, // Increased space
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 20, // Increased space between icons
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#555',
  },
  registerLink: {
    color: 'blue',
  },
});

export default LoginScreen;
