import Botao from '@/components/Botao';
import { carregarTarefas, salvarTarefas } from '@/utils/armazenamento';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';

export default function AddTarefas() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('');

  async function salvar() {
    if (titulo.trim() === '') {
      Alert.alert('Atenção', 'Digite o titulo da tarefa');
      return;
    }
    if (descricao.trim() === '') {
      Alert.alert('Atenção', 'Digite a descrição da tarefa!');
      return;
    }
    if (prioridade.trim() === '') {
      setPrioridade('Baixa');
    }

    const novaTarefa = {
      id: Date.now().toString(),
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      prioridade: prioridade.trim(),
    };

    const tarefas = await carregarTarefas();

    const novaLista = [...tarefas, novaTarefa];

    await salvarTarefas(novaLista);

    Alert.alert('Sucesso!', 'Validação ok, dados salvos com sucesso!');
    router.replace('/tarefas/tarefas');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título *</Text>
      <TextInput
        value={titulo}
        style={styles.campo}
        onChangeText={(texto) => {
          setTitulo(texto);
        }}
        placeholder="Digite o título da tarefa"
      />
      <Text style={styles.label}>Descrição *</Text>
      <TextInput
        value={descricao}
        style={styles.campo}
        onChangeText={(texto) => {
          setDescricao(texto);
        }}
        placeholder="Digite a descricao da tarefa"
        multiline
      />
      <Text style={styles.label}>Prioridade</Text>

      <View style={styles.selectItem}>
        <Picker
          selectedValue={prioridade}
          onValueChange={(texto) => setPrioridade(texto)}
        >
          <Picker.Item label="Selecione..." value="" />
          <Picker.Item label="Baixa" value="Baixa" />
          <Picker.Item label="Média" value="Media" />
          <Picker.Item label="Alta" value="Alta" />
        </Picker>
      </View>

      <View style={{ alignSelf: 'flex-end' }}>
        <Botao texto="Salvar" onPress={salvar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  campo: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  selectItem: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
