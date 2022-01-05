import React,{useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import AboutScreen from './AboutScreen'

const FirstPage = ({navigation}) => {

    const [text, onChangeText] = useState("")

    return (
        <View style = {styles.container}>
            <Text style={styles.heading}>React Native Pass Value From One Screen</Text>
            <Text style={styles.textStyle}>Please Insert your name to pass it to second screen</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                style={styles.inputStyle}
            />
            <Button
                title="Go Next"
                onPress={()=>navigation.navigate('secondPage',{input: text})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
    inputStyle: {
        width: '80%',
        height: 44,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#DBDBD6',
    },
});

export default FirstPage