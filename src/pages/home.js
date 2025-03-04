import React , {useState}from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";


export default function Home() {
    const [mySkills, setMySkills] = useState([]);
    const [newSkills, setNewSkills] = useState('');

    function handleAddNewSkill() {
        setMySkills(oldState => [...oldState, newSkills]);
    }
  return (
    <>
      <View style=
      {styles.container}>
        <Text style={styles.txt}>Bem vindo,
            <Text style={{color:'purple'}}> Matias!</Text>
        </Text>
        <TextInput
          style={styles.txtinpu}
          placeholder="New skills"
          placeholderTextColor='#555'
            onChangeText={text => setNewSkills(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={handleAddNewSkill}>
            <Text style={styles.btnTxt}>Add</Text>
        </TouchableOpacity>
        <Text style={[styles.txt, {marginTop: 50}]}>
            My skills
        </Text>
        {
            mySkills.map(skills => (
            <TouchableOpacity key={skills} style={styles.buttonSkill}>
            <Text style={styles.txtskill}>
                {skills}
            </Text>
            </TouchableOpacity>
            ))
        }
        
       
      </View>
      
    </>
    
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121015',
      padding: 20,
    },
    txt: {
      color: '#fff',
      fontSize: 30,
        textAlign: 'center',
        marginTop: 30
    },
    txtinpu: {
      color: '#fff',
      fontSize: 30,
        textAlign: 'center',
        marginTop: 30,
         borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
          
    },
    btn: {
        backgroundColor: 'purple',
        marginTop: 20,
        justifyContent: 'center',
        display: 'flex',
        borderRadius: 7,
        alignItems: 'center',
        width: '80%',
        alignSelf: 'center',
       
    },
    btnTxt: {
        color: '#fff',
        fontSize: 20,
        padding: 10,
    },
    txtskill: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#1f1e25',
        borderRadius
        : 50,
    },
    
  });