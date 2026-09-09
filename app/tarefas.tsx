import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';

export default function Tarefas() {
  return (
    <View style={styles.container}>
      <Text>Minhas Tarefas</Text>
      <Button title="Voltar" onPress={router.back}></Button>
    </View>
  );
}
