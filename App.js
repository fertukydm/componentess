import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, Switch, TouchableOpacity, ScrollView, Image, FlatList, Modal, ActivityIndicator, Pressable, SectionList } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [resultado, setResultado] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState('javascript');

  const manejarPresion = () => {
    setResultado('¡Botón presionado!');
    Alert.alert('¡Botón presionado!');
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleModal = () => setModalVisible(!modalVisible);
  const mostrarAlerta = () => Alert.alert("Alerta", "Este es un mensaje de alerta con más opciones", [{ text: "OK" }]);

  const DATA = [
    { id: '1', title: 'Kenia Os' },
    { id: '2', title: 'The Neighbourhood' },
    { id: '3', title: 'Rauw Alejandro' },
  ];

  const SECTIONS = [
    { title: 'Frutas', data: ['Manzana', 'Banano'] },
    { title: 'Verduras', data: ['Zanahoria', 'Brócoli'] },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Componentes de React Native</Text>
      <StatusBar style="auto" />

      {/* Button */}
      <Text style={styles.comp}>Button: Botón básico multiplataforma con acción al presionar.</Text>
      <Button title="Presiona aquí" onPress={manejarPresion} />

      {/* Switch */}
      <Text style={styles.comp}>Switch: Permite alternar entre dos estados (ON/OFF).</Text>
      <Switch onValueChange={toggleSwitch} value={isEnabled} />
      <Text style={styles.comp}>El Switch está {isEnabled ? "Activado" : "Desactivado"}</Text>

      {/* TouchableOpacity */}
      <Text style={styles.comp}>TouchableOpacity: Área táctil con efecto de opacidad al presionar.</Text>
      <TouchableOpacity style={styles.botonPersonalizado} onPress={manejarPresion}>
        <Text style={styles.textoBoton}>Presiona el TouchableOpacity</Text>
      </TouchableOpacity>

      {/* TextInput */}
      <Text style={styles.comp}>TextInput: Campo de entrada para escribir texto.</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo aquí"
        value={textInputValue}
        onChangeText={setTextInputValue}
      />
      <Text style={styles.comp}>Valor escrito: {textInputValue}</Text>

      {/* ScrollView */}
      <Text style={styles.comp}>ScrollView: Vista desplazable vertical u horizontal.</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.texto}>Este es un contenido desplazable.</Text>
        <Text style={styles.texto}>Puedes agregar más contenido aquí para ver cómo se desplaza.</Text>
        <Text style={styles.texto}>Y mucho más contenido...</Text>
      </ScrollView>

      {/* Image */}
      <Text style={styles.comp}>Image: Muestra imágenes de red o locales.</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />

      {/* FlatList */}
      <Text style={styles.comp}>FlatList: Lista optimizada para grandes volúmenes de datos.</Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

      {/* Modal */}
      <Text style={styles.comp}>Modal: Ventana emergente sobre la pantalla actual.</Text>
      <Button title="Abrir Modal" onPress={toggleModal} />
      {modalVisible && (
        <View style={styles.modal}>
          <Text style={styles.modalText}>Este es un modal</Text>
          <Button title="Cerrar Modal" onPress={toggleModal} />
        </View>
      )}

      {/* ActivityIndicator */}
      <Text style={styles.comp}>ActivityIndicator: Indicador de carga animado.</Text>
      <Button title="Mostrar Cargando" onPress={() => setLoading(true)} />
      {loading && <ActivityIndicator size="large" color="purple" />}

      {/* Pressable */}
      <Text style={styles.comp}>Pressable: Similar a Touchable, con más control del estado de presión.</Text>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightgray' : 'purple',
            padding: 10,
            borderRadius: 8,
            marginTop: 10,
          }
        ]}
        onPress={mostrarAlerta}
      >
        <Text style={{ color: 'white', textAlign: 'center' }}>Presiona el Pressable</Text>
      </Pressable>

      {/* SectionList */}
      <Text style={styles.comp}>SectionList: Lista con secciones agrupadas.</Text>
      <SectionList
        sections={SECTIONS}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.texto}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{title}</Text>
        )}
      />

      {/* Picker */}
      <Text style={styles.comp}>Picker: Menú desplegable para seleccionar una opción.</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={{ height: 50, marginBottom: 20 }}
      >
        <Picker.Item label="JavaScript" value="javascript" />
        <Picker.Item label="Python" value="python" />
        <Picker.Item label="Java" value="java" />
      </Picker>
      <Text style={styles.comp}>Lenguaje seleccionado: {selectedValue}</Text>

      {/* Resultado final */}
      <Text style={styles.comp}>Resultado: {resultado}</Text>
    </ScrollView>
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
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

