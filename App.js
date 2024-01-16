import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
const App = () => {
  const [value, setValue] = useState(false);


  return (
    <View style={[styles.container, value && styles.back]}>
      <View style={[styles.container_switch, value && styles.container_switch_cambio]}>
      <Text style={[styles.text, value && styles.cambio_Texto]}>Mode</Text>
      <Switch style={{marginLeft : 210}}  value={value} onValueChange={setValue} disabled={false}  trackColor="green" />
      </View>
      <View style={styles.container_text}>
        <Text style={value && styles.text_ms}>night mode</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex : 1,
    marginTop : 25
  },
  text: {
    fontSize: 16,
    color: "white",margin : 20
  },
  back: {
    backgroundColor: "black",
  
  },cambio_Texto:{
    fontSize: 16,
    color: "black",
  },container_switch:{
    width: "100%" , height : 70 , backgroundColor : 'gray', 
    justifyContent: 'center', alignItems : 'center', flexDirection : 'row' 
  },container_switch_cambio:{
    width: "100%" , height : 70 , backgroundColor : 'white', 
    justifyContent: 'center', alignItems : 'center', flexDirection : 'row' 
  },container_text:{
    height: 200 , width: '100%',
    justifyContent: 'center', alignItems : 'center'
  },text_ms:{
    color : 'white'
  }

  
});
export default App;