import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, TextInput, Button } from 'react-native';
import { Libro } from './components/Libro';

export default function App() {
  const [libri, setLibri] = useState([])
  const [pagina, setPagina] = useState(true)
  const [titolo, setTitolo] = useState("")
  const [autore, setAutore] = useState("")
  const [descrizione, setDescrizione] = useState("")

  useEffect(() => {
    fetch('http://192.168.102.193:4000/libreria/lista')
      .then((response) => response.json())
      .then((json) => {
        setLibri(json)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  const toggle = () => {
    setPagina(!pagina)
  }

  const invio = () => {
    let libro = {
      autore,
      titolo,
      descrizione
    }
    fetch('http://192.168.102.193:4000/libreria/addLibro', {method: 'POST',headers: 
    {
      'Content-Type': 'application/json',
    }, body: JSON.stringify(libro)})
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
      })
      .catch((error) => {
        console.error(error);
      })
    setTitolo("")
    setAutore("")
    setDescrizione("")
    setPagina(!pagina)
  }

  return (
    <View style={styles.container}>
      {pagina ? (<ScrollView contentContainerStyle={styles.containerScroll}>
        {libri.map((libro, index) => (<Libro key={index} libro={libro}></Libro>))}
        <StatusBar style="auto" />
      </ScrollView>) : (<ScrollView contentContainerStyle={styles.containerScroll}>
        <Text style={styles.white}>Autore:</Text>
        <TextInput style={styles.inputText}
          value={autore}
          onChangeText={setAutore} />
        <Text style={styles.white}>Titolo:</Text>
        <TextInput style={styles.inputText}
          value={titolo}
          onChangeText={setTitolo} />
        <Text style={styles.white}>Descrizione:</Text>
        <TextInput style={styles.inputText}
          value={descrizione}
          onChangeText={setDescrizione} />
        <StatusBar style="auto" />
        <Button style={styles.btn} title='Invio' onPress={invio}></Button>
      </ScrollView>)}
      <View style={styles.navContainer}>
        <View style={styles.navBar}>
          {pagina ? (<Pressable onPress={toggle} style={styles.Icon}>
            <Text style={styles.icona}>Inserimento</Text>
          </Pressable>) : (<Pressable onPress={toggle} style={styles.Icon}>
            <Text style={styles.icona}>Lista</Text>
          </Pressable>)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#26578b',
    alignItems: 'center'
  },
  containerScroll: {
    marginTop: 100,
    marginBottom: 100,
  },
  navContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 20
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: "white",
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: 20
  },
  icona: {
    padding: 14
  },
  inputText: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20,
    height: 30,
    width: 200
  },
  white: {
    color: 'white'
  },
  btn: {
    backgroundColor: 'white',

  }
});
