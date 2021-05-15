import  React,{useState,useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  const [eq , seteq] = useState(null)
  const [ll , setll] = useState(1)
  const [ul , setul] = useState(1)
  const [click , setClick] = useState(false)
  const [info , setInfo] = useState([])
  useEffect(() =>{
    // fetch("https://disease.sh/v3/covid-19/all").then((Response) => Response.json()).then((data) =>{alert(data.cases)})
    const getData = async() =>{
      const Response = await fetch(`http://192.168.43.187:5000/integrationw/${eq}/${ll}/${ul}`)
      const data = await Response.json()
      setInfo(data.number)
     // alert(info)
      setClick(false)
    }
 
    getData();
   },[click])
  return (<>
  <StatusBar translucent />
   <View style={styles.container}>
     <View style={styles.wrapper}>
     <View  style={styles.first}>
     <TextInput style={{backgroundColor:"white",padding:3,width:20,margin:1,borderRadius:50,borderColor:"#5759da",borderWidth:1
        ,
        }}  
        onChangeText={(e)=>{setul(e)}}  />
        <MaterialCommunityIcons name="math-integral" size={80} color="#B8B3B8" />
        <TextInput style={{backgroundColor:"white",padding:3,width:20,borderRadius:50,margin:1,borderColor:"#5759da",borderWidth:1
        ,
        }} onChangeText={(e)=>{setll(e)}} />
        
     </View>
     <View style={styles.second}>
     <TextInput style={{backgroundColor:"white",padding:10,borderRadius:20,width:200,margin:10,borderColor:"#5759da",borderWidth:1
        ,
        }} placeholder={"equation"} 
        onChangeText={(e)=>{seteq(e)}} />
        <TouchableOpacity style={{backgroundColor:"white",borderRadius:20,height:25,width:25,alignItems:"center",justifyContent:"center"}}
        onPress={()=>setClick(true)}
        >
        <AntDesign name="rightcircle" size={24} color="black" />
        </TouchableOpacity>
     </View>
     <View style={styles.third}>
        <Text style={{
          fontSize:24,
          fontWeight:"bold"
        }}>d(x)</Text>

        
       

     </View>
    
     
     </View>
     <View style={{
        height:height-590,
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
    flexDirection:"column"
    
  },
  first:{
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"
  },
  second:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:30

},
  third:{

},
wrapper:{
flexDirection:"row",
alignItems:"center",
justifyContent:"center",

},
 
});
