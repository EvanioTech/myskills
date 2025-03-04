import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { Button } from "../components/button";
import { SkillCard } from "../components/skill-card";

export default function Home() {
    const [mySkills, setMySkills] = useState([]);
    const [newSkills, setNewSkills] = useState('');

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.txt}>Bem vindo, <Text style={{ color: 'purple' }}>Matias!</Text></Text>
                <TextInput
                    style={styles.txtinpu}
                    placeholder="New skills"
                    placeholderTextColor='#555'
                    onChangeText={text => setNewSkills(text)}
                    value={newSkills}
                />
                <Button newSkills={newSkills} setMySkills={setMySkills} />

                <Text style={[styles.txt, { marginTop: 50 }]}>
                    My skills
                </Text>

                <FlatList
                    data={mySkills}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <SkillCard skills={item} />
                    )}
                />
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
    }
});