import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
} from 'react-native';

const TextInputPractice1 = () => {
  const [inputName, setinputName] = useState('');
  const [inputEmail, setinputEmail] = useState('');
  const checkTextInput = () => {
    if (!inputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    else if (!inputEmail.trim()) {
      alert('Please Enter Email');
      return;
    } else {
      alert('Success');
      return;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Name"
            underlineColorAndroid="transparent"
            onChangeText={inputName => {
              setinputName(inputName);
            }}
          />
        </View>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Email"
            underlineColorAndroid="transparent"
            onChangeText={inputEmail => {
              setinputEmail(inputEmail);
            }}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Button 
          title="Success" 
          color="#666362" 
          onPress={checkTextInput} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TextInputPractice1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
