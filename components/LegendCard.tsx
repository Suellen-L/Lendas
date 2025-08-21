import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Legend } from '../types/Legend';

interface Props {
  legend: Legend;
}

export default function LegendCard({ legend }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{legend.name}</Text>
      <Text style={styles.preview}>{legend.description.slice(0, 100)}...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  preview: {
    fontSize: 14,
    color: '#555',
  },
});
