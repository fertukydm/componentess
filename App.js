import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, Switch, TouchableOpacity, ScrollView, Image, FlatList, Modal } from 'react-native';

export default function App() {
  const [resultado, setResultado] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Función para manejar la acción del botón
  const manejarPresion = () => {
    setResultado('¡Botón presionado!');
    Alert.alert('¡Botón presionado!');
  };

  // Función para manejar el Switch
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // Función para abrir y cerrar el Modal
  const toggleModal = () => setModalVisible(!modalVisible);

  // Datos para el FlatList
  const DATA = [
    { id: '1', title: 'Primer Item' },
    { id: '2', title: 'Segundo Item' },
    { id: '3', title: 'Tercer Item' },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Componentes de React Native</Text>
      <StatusBar style="auto" />

      {/* Componente Button */}
      <Text style={styles.comp}>
        Botón: El componente Button de React Native es un componente básico que permite crear botones de manera sencilla.
        Se asegura de que el botón se vea bien en cualquier plataforma (iOS, Android, etc.) y soporta un nivel mínimo de personalización.
      </Text>
      <Button title="Presiona aquí" onPress={manejarPresion} />

      {/* Componente Switch */}
      <Text style={styles.comp}>
        Switch: El componente Switch permite mostrar un interruptor para cambiar entre dos estados (activado/desactivado).
      </Text>
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles.comp}>El Switch está {isEnabled ? "Activado" : "Desactivado"}</Text>

      {/* Componente TouchableOpacity */}
      <Text style={styles.comp}>
        TouchableOpacity: El componente TouchableOpacity permite crear un área táctil que responde a las interacciones con un efecto de opacidad.
      </Text>
      <TouchableOpacity style={styles.botonPersonalizado} onPress={manejarPresion}>
        <Text style={styles.textoBoton}>Presiona el TouchableOpacity</Text>
      </TouchableOpacity>

      {/* Componente ScrollView */}
      <Text style={styles.comp}>
        ScrollView: El componente ScrollView es útil para crear una vista desplazable que puede contener varios elementos de manera vertical u horizontal.
      </Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.texto}>Este es un contenido desplazable.</Text>
        <Text style={styles.texto}>Puedes agregar más contenido aquí para ver cómo se desplaza.</Text>
        <Text style={styles.texto}>Y mucho más contenido...</Text>
      </ScrollView>

      {/* Componente Image */}
      <Text style={styles.comp}>
        Image: El componente Image es utilizado para mostrar imágenes en tu aplicación, ya sea de una URL o de recursos locales.
      </Text>
      <Image 
        style={styles.image}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />

      {/* Componente FlatList */}
      <Text style={styles.comp}>
        FlatList: El componente FlatList es altamente eficiente para mostrar listas largas de datos, ya que solo renderiza los elementos visibles en la pantalla.
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

      {/* Componente Modal */}
      <Text style={styles.comp}>
        Modal: El componente Modal muestra un cuadro de diálogo superpuesto que se puede usar para mostrar información importante o formularios.
      </Text>
      <Button title="Abrir Modal" onPress={toggleModal} />
      {modalVisible && (
        <View style={styles.modal}>
          <Text style={styles.modalText}>Este es un modal</Text>
          <Button title="Cerrar Modal" onPress={toggleModal} />
        </View>
      )}

      {/* Mostrar resultado */}
      <Text style={styles.comp}>Resultado: {resultado}</Text>
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
    fontSize: 18,
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

  // Estilos adicionales
  botonPersonalizado: {
    backgroundColor: 'purple',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },

  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },

  scrollView: {
    backgroundColor: 'lightgray',
    marginBottom: 20,
  },

  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 32,
  },

  modal: {
    position: 'absolute',
    top: '40%',
    left: '20%',
    right: '20%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },

  modalText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});
