import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { Button, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  const [eq , seteq] = useState(1)
  const [click , setClick] = useState(false)
  const [info , setInfo] = useState([])
  useEffect(() =>{
    // fetch("https://disease.sh/v3/covid-19/all").then((Response) => Response.json()).then((data) =>{alert(data.cases)})
    const getData = async() =>{
      const Response = await fetch(`http://192.168.43.187:5000/derivation/${eq}`)
      const data = await Response.json()
      setInfo(data.number)
      //alert(eq)
      setClick(false)
    }
 
    getData();
   },[click])
  return (
    <>
    <StatusBar translucent/>
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={{alignItems:"center",justifyContent:"center"}} >
        <Text style={{
          fontSize:24,
          fontWeight:"bold"
        
        }}>
          d
        </Text
          
        >
        <Text style={{
          fontSize:16,
          fontWeight:"bold"
        
        }}>
         -----
        </Text>
        <Text
          style={{
            fontSize:24,
            fontWeight:"bold"
          
          }}
        >
          d(x)
        </Text>
        </View>
        <View>
          <TextInput style={{backgroundColor:"white",padding:10,borderRadius:20,width:200,margin:10,borderColor:"#5759da",borderWidth:1
        ,
        }} placeholder={"equation"} onChangeText={(e)=>{seteq(e)}}/>

        </View>
        <TouchableOpacity style={{backgroundColor:"white",borderRadius:20,height:25,width:25,alignItems:"center",justifyContent:"center"}}
        onPress={()=>setClick(true)}
        >
        <AntDesign name="rightcircle" size={24} color="black" />
        </TouchableOpacity>


      </View>
      <View style={{
        height:height-490,
        alignItems:"center",
        justifyContent:"center",
        width:300,
        borderRadius:20
      }}>
         <Text style={{
          fontSize:20,
          fontWeight:"700"
        }}>Answer:</Text>
        <Text style={{
          fontSize:20,
          fontWeight:"700",
          marginTop:10
        }}>{info}</Text>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
   
  },
  main:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"center",
    borderRadius:10,
    margin:10,
    padding:10
  
    
  },
 
});
