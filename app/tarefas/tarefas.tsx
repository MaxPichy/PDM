import {listarTarefas, atualizarTarefa, excluirTarefa} from '@/services/tarefas';
import { FlatList, Text, View, Alert, ActivityIndicator } from 'react-native';
import { carregarUsuario } from '@/utils/armazenamento';
import TarefaCard from '@/components/TarefaCard';
import { useEffect, useState } from 'react';
import { styles } from '@/globals/styles';
import Botao from '@/components/Botao';
import { router } from 'expo-router';

type Tarefa = {
  _id: string;
  titulo: string;
  descricao: string;
  prioridade: string;
  concluida?: boolean;
};

type Usuario = {
  username: string;
};

export default function Tarefas() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarrengando] = useState(true);
  const [erro, setErro] = useState(false);

  async function excluirTarefa(_id: string) {
    Alert.alert('EXCLUIR TAREFA', 'Tem certeza que deseja excluir a tarefa?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          try {
            await excluirTarefa(_id);

            const tarefasAtualizadas = await listarTarefas();
            setTarefas(tarefasAtualizadas);
          } catch (error: any) {
            Alert.alert('Erro', 'Não foi possível excluir a tarefa!');
            console.log(error);
          }
        },
      },
    ]);
  }

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await listarTarefas();
        setTarefas(dados);
      } catch (error) {
        console.log('Falha ao biscar as tarefas', error);
        Alert.alert('Erro', 'Não foi possível listar as tarefas');
        setErro(true);
      } finally {
        setCarrengando(false);
      }

      const user = await carregarUsuario();
      setUsuario(user);
    }
    carregar();
  }, []);

  if (carregando) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size={50} />
      </View>
    );
  }

  if (erro) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Erro ao buscar tarefas</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>
        Seja bem vindo, {usuario ? usuario.username : ''}
      </Text>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      <FlatList
        data={tarefas}
        contentContainerStyle={{ padding: 25 }}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <>
            <TarefaCard
              titulo={item.titulo}
              descricao={item.descricao}
              prioridade={item.prioridade}
              excluir={() => excluirTarefa(item._id)}
              atualizar={() =>
                atualizarTarefa(
                  router.push({
                    pathname: '/tarefas/addTarefas',
                    params: { id: item._id },
                  }),
                )
              }
            />
          </>
        )}

        ListEmptyComponent={<Text>Nenhuma tarefa na lista</Text>}
      />

      <Botao texto="Add +" onPress={() => router.push('/tarefas/addTarefas')} />
      <Botao
        texto="Configurações"
        onPress={() => router.push('/configuracoes')}
      />
    </View>
  );
}
