import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateLegendScreen from '../screens/CreateLendas';
import LegendsListScreen from '../screens/LendasList';
import LegendDetailScreen from '../screens/LendasDetalis';

export type RootStackParamList = {
  CreateLegend: undefined;
  LegendsList: undefined;
  LegendDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="LegendsList">
      <Stack.Screen name="CreateLegend" component={CreateLegendScreen} options={{ title: 'Cadastrar Lenda' }} />
      <Stack.Screen name="LegendsList" component={LegendsListScreen} options={{ title: 'Lendas Élficas' }} />
      <Stack.Screen name="LegendDetail" component={LegendDetailScreen} options={{ title: 'Detalhes da Lenda' }} />
    </Stack.Navigator>
  );
}
