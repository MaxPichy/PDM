import Botao from '@/components/Botao';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

const exercicios = [
  {
    nome: 'Ex da Aula 10',
    rota: '/atividades/ex_aula10',
  },
  {
    nome: 'Ex fetch',
    rota: '/atividades/ex_fetch',
  },
  {
    nome: 'Ex axios',
    rota: '/atividades/ex_axios',
  },
  {
    nome: 'Seleção de Imagens',
<<<<<<< HEAD
    rota: '/atividades/libraryImage',
  },
  {
    nome: 'Aula SQLite',
    rota: '/atividades/aula_sqlite',
  },
=======
    rota: '/atividades/libraryImage'
  },
  {
    nome: 'Reposição 19/10/2026',
    rota: '/atividades/reposicao'
  }
>>>>>>> 37b9bf1abd1eaac6e9692884580f9a1cd8f17966
] as const;

export default function Atividades() {
  return (
    <View style={styles.container}>
      {exercicios.map((exercicio) => (
        <Botao
          key={exercicio.rota}
          texto={exercicio.nome}
          onPress={() => router.push(exercicio.rota)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    padding: 10,
  },
});
