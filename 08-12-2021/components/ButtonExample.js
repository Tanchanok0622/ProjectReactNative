import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';

const ButtonExample = () => {
  const onPressAert = () => {
    alert('Hello');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Button Example</Text>
        <Button
        onPress = {onPressAert}
        title = "Click Me"
        color = "#DC143C"
        />
      </View>
    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
