import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export function Button({ newSkills, setMySkills }) {
    function handleAddNewSkill() {
        if (newSkills.trim() !== "") {
            setMySkills(oldState => [...oldState, newSkills]);
        }
    }

    return (
        <TouchableOpacity style={styles.btn} onPress={handleAddNewSkill}>
            <Text style={styles.btnTxt}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
    }
});