import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Libro = (props) => {
    const [visualizza, setVisualizza] = useState(false)

    const toggle = () => {
        setVisualizza(!visualizza)
    }

    return (
        <View style={styles.sfondoDiv} onTouchEnd={toggle}>
            <View style={styles.center}>
                <Text>Titolo:</Text>
                {/* <Text style={styles.testoCard}>{props.libro.titolo}</Text> */}
                <Text style={styles.testoCard}>{props.libro.titolo}</Text>
            </View>
            <View style={styles.center}>
                <Text>Autore:</Text>
                <Text style={styles.testoCard}>{props.libro.autore}</Text>
            </View>
            <View style={styles.center}>
                {visualizza ? (<Text>Descrizione</Text>) : (<Text>Clicca la card per la descrizione</Text>)}
                {visualizza ? (<Text style={styles.testoCard}>{props.libro.descrizione}</Text>) : (<Text></Text>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sfondoDiv: {
        width: 325,
        margin: 20,
        padding: 25,
        backgroundColor: '#3b8ee5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 5,
    },
    testoCard: {
        color: 'white'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})