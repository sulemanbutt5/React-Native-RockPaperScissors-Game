import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { Dimensions,Image,Button, StyleSheet, Text, View } from 'react-native';

export default function PlayScreen() {
  
    const rock = require('./signs/roc.png')
    const scissors = require('./signs/sci.png')
    const paper = require('./signs/pap.png')
    const signs=[rock,paper,scissors]
    const colors=['#8e44ad','#e67e22','#16a085','#000']

    const [counter, setCounter] = useState(3)
    useEffect(() => {
        if (counter===0) return
        const timer=setTimeout(()=>{
            setCounter(counter-1)

        },750)
        return () => {
            clearTimeout(timer)
        }
    }, [counter])
    return (
    <View style={StyleSheet.compose(styles.container,{backgroundColor:colors[counter-1]})}>
    {
        counter>0
    ?<Text style={{fontSize: 250,color:'#fff'}}>{counter}</Text>
    :<>
        <Image 
        style={{width:300,height:350}} 
        source={signs[Math.floor(Math.random()*3)]}/>
        <View style={{position: "absolute",bottom:35,marginTop:50,width:200}}>
            <Button onPress={()=>setCounter(3)} title="Play Again"/>
        </View>
    </>
    }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

