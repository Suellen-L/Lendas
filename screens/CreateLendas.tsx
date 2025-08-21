import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Legend } from '../types/Legend';

export default function CreateLegendScreen() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    const newLegend: Legend = {
      id: Date.now().toString(),
      name,
      description,
    };
    console.log('Lenda salva:', newLegend);
    setName('');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome da Lenda</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />

      <Button title="Salvar Lenda" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontWeight: 'bold', marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});
