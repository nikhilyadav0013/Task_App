import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
    first: string,
    second: string,
    third: string,
    fourth: string
}

const Table: FC<Props> = ({ first, second, third, fourth }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.box, { width: '30%' }]}>
                <Text style={styles.text}>{first}</Text>
            </View>
            <View style={[styles.box, { width: '30%' }]}>
                <Text style={styles.text}>{second}</Text>
            </View>
            <View style={[styles.box, { width: '20%' }]}>
                <Text style={styles.text}>{third}</Text>
            </View>
            <View style={[styles.box, { width: '20%' }]}>
                <Text style={styles.text}>{fourth}</Text>
            </View>
        </View>
    )
}

export default Table

const styles = StyleSheet.create({
    container: {
        margin: 4,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    box: {
        height: '100%',
        borderWidth: 1,
    },

    text: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})