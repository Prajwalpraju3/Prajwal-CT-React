import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import DefaultPreference from 'react-native-default-preference';

const Demo = () => {
  const [storedValue, setStoredValue] = useState('');

  // Function to set a value
  const setPreference = async () => {
    try {
      await DefaultPreference.setName('yourAppName'); // Set the app name
      await DefaultPreference.set('myKey', 'Hello, World!');
      console.log('Value set successfully!');
    } catch (error) {
      console.error('Error setting value:', error);
    }
  };

  // Function to get a value
  const getPreference = async () => {
    try {
      await DefaultPreference.setName('yourAppName'); // Set the app name
      const value = await DefaultPreference.get('myKey');
      console.log('Retrieved value:', value);
      setStoredValue(value);
    } catch (error) {
      console.error('Error getting value:', error);
    }
  };

  useEffect(() => {
    // Example: Get the value when the component mounts
    getPreference();
  }, []);

  return (
    <View>
      <Text>Stored Value: {storedValue}</Text>
      <Button title="Set Value" onPress={setPreference} />
      <Button title="Get Value" onPress={getPreference} />
    </View>
  );
};

export default Demo;
