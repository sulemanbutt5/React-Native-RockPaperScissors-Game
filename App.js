import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PlayScreen from './src/PlayScreen'

export default function App() {
  const [play, setPlay] = useState(false)
  return play ?   
    (<PlayScreen/>): (

    <View style={styles.container}>
      <Text style={{fontSize: 35}}>Rock Paper Scissors</Text>
      <Text style={{marginTop:50,fontSize: 70}}>✊ ✋ ✌️</Text>
      <View style={{marginTop:50,width: 240}}>
        <Button onPress={()=>setPlay(true)}  title="Play"/>
      </View>
      <StatusBar style="auto" />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
