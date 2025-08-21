import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/StackNavigator';

const legends = [
  {
    id: '1',
    name: 'A Lenda da Floresta Encantada',
    description: 'Há muito tempo, uma floresta mágica escondia segredos dos elfos...',
  },
  {
    id: '2',
    name: 'O Cristal dos Anciões',
    description: 'Um cristal poderoso guardado por elfos sábios em montanhas distantes...',
  },
];

export default function LegendDetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'LegendDetail'>>();
  const legend = legends.find((l) => l.id === route.params.id);

  if (!legend) {
    return (
      <View style={styles.container}>
        <Text>Lenda não encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{legend.name}</Text>
      <Text style={styles.description}>{legend.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  description: { fontSize: 16 },
});
