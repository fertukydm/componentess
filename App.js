import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  const [resultado, setResultado] = useState('');

  // Función para manejar la acción del botón
  const manejarPresion = () => {
    setResultado('¡Botón presionado!');
    Alert.alert('¡Botón presionado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Componentes</Text>
      <StatusBar style="auto" />

      <Text style={styles.comp}>
        Botón: El componente Button de React Native es un componente básico que permite crear botones de manera sencilla.
        Se asegura de que el botón se vea bien en cualquier plataforma (iOS, Android, etc.) y soporta un nivel mínimo de personalización.
      </Text>

      <Button
        title="Presiona aquí"
        onPress={manejarPresion}
      />

<Text style={styles.comp}>
   El componente FlatList en React Native es un componente altamente eficiente para mostrar listas largas de datos. A diferencia de un ScrollView, FlatList solo renderiza los elementos visibles en la pantalla, lo que mejora significativamente el rendimiento cuando se manejan listas grandes. 
  Es la opción recomendada cuando necesitas manejar listas dinámicas y potencialmente largas de datos en tu aplicación.
      </Text>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 50,
    padding: 20,
  },

  titulo: {
    fontSize: 20,
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  comp: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  texto: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 10,
  },
});
