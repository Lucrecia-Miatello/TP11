import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { TextInput, Button, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [texto, setTexto] = useState("");
  const [islotes, setIslotes] = useState(0);

  const handleIslotes = () => {
    const regex = /(\w)\w*\1/gi;
    const matches = texto.match(regex);

    if (matches) {
      setIslotes(matches.length);
    } else {
      setIslotes(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Cantidad de islotes: {islotes}</Text>

      <TextInput 
        style={styles.textInput} 
        placeholder="Ingrese la frase" 
        value={texto} 
        onChangeText={(text) => setTexto(text)}
      />

      <Button
        title="Ver islotes"
        onPress={handleIslotes}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    margin: 10,
    borderColor: "pink",
    borderWidth: 3,
    height: 40,
    width: "70%",
    backgroundColor: "lightyellow"
  },
});

export default App;
