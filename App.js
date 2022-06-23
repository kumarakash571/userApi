import { StyleSheet, Text, View ,Button} from 'react-native'
import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import User from './components/User'


const App = () => {
  const [details,setDetails] = useState(null)

  const fetchDetails  = async() =>{
     try {

      const {data} = await Axios.get('https://randomuser.me/api/')
      const detail = data.results[0]
      setDetails(detail)
      console.log(detail)
      
     } catch (error) {
      console.log(error)
     }
  }
  useEffect(()=>{
    fetchDetails()
  },[])
  if(!details){
    return(<View style={styles.container}>
    
    <Text>Loading...</Text>

    </View>)
  }else{
    return (
      <View style={styles.container}>
      <View>
      <User details={details}/>
      <Button
      style={styles.button}
      title='New User'
      onPress={()=>fetchDetails()}>

      </Button>
    
      
      
    </View>
        <Text>App</Text>
      </View>
    )
  }
  
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#222835',
    margin:20
  },
  button:{
    marginTop:20,
    paddingHorizontal:30,
    backgroundColor:'red'
  }
})