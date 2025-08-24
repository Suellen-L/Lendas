import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Legend } from '../types/Legend';
import LegendCard from '../components/LegendCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';

type Legend = {
  id: string;
  name: string;
  description: string;
};

export default function LendasList() {
  const [legends, setLegends] = useState<Legend[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddLegend = () => {
    if (name.trim() && description.trim()) {
      const newLegend: Legend = {
        id: Date.now().toString(),
        name,
        description,
      };
      setLegends(prev => [...prev, newLegend]);
      setName('');
      setDescription('');
    }
  };


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
