import Botao from '@/components/Botao';
import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <Text>Minhas Configurações</Text>
      <Botao texto="Voltar" onPress={router.back}></Botao>
      <Botao texto="Tarefas" onPress={() => router.push('../tarefas')}></Botao>
    </View>
  );
}
