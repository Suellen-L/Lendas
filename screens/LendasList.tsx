import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Legend } from '../types/Legend';
import LegendCard from '../components/LegendCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';

const legends: Legend[] = [
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

export default function LegendsListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={legends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('LegendDetail', { id: item.id })}>
            <LegendCard legend={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
});
