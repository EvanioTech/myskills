import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function SkillCard({ skills }) {
    return (
        <TouchableOpacity key={skills} style={styles.buttonSkill}>
            <Text style={styles.txtskill}>
                {skills}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txtskill: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        padding: 10,
        backgroundColor: '#1f1e25',
        borderRadius: 50,
    }
});