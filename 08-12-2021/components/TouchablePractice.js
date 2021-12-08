import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const TouchablePractice = () => {
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const checkTextInput = () => {
    if (!email.trim()) {
      alert('Please Enter Email');
      return;
    } else if (!password.trim()) {
      alert('Please Enter Password');
      return;
    } else {
      alert('Email: ' + email + '\nPassword: ' + password);
      return;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Email"
            underlineColorAndroid="transparent"
            onChangeText={email => {
              setemail(email);
            }}
          />
        </View>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{flex: 1}}
            placeholder="Password"
            underlineColorAndroid="transparent"
            onChangeText={password => {
              setpassword(password);
            }}
          />
        </View>
        <View style={{marginTop: 15}}>
          <TouchableOpacity
            style={styles.buttonSubmit}
            activeOpacity={0.5}
            onPress={checkTextInput}>
            <Text style={styles.buttonTextStyle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TouchablePractice;

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
    borderColor: '#DC143C',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonSubmit: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DC143C',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
  },
});
