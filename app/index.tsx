import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function Home() {
  const [iniciado, setIniciado] = useState(false);
  // const [modo, setModo] = useState("inicial");

  function iniciarAplicacao() {
    setIniciado(true);
    // setModo("iniciado");
    router.push('/tarefas');
  }

  // function encerrarAplicacao(){
  //     // setModo("concluido");
  // }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          {iniciado ? (
            <Text style={styles.titulo}>Tarefas</Text>
          ) : (
            <Text style={styles.titulo}>TaskFlow</Text>
          )}

          {iniciado ? (
            <Text style={styles.descricao}>Bem vindo as TaskFlow!</Text>
          ) : (
            <Text style={styles.descricao}>
              Organize sua tarefas de forma simples
            </Text>
          )}

          <Pressable
            onPress={iniciarAplicacao}
            style={({ pressed }) => [
              styles.botao,
              pressed && styles.botaoPressionado,
            ]}
          >
            <Text style={styles.textoBotao}>
              {iniciado ? 'Continuar' : 'Começar'}
            </Text>
          </Pressable>
          {/* <Pressable
                    style={styles.botao}
                    onPress={encerrarAplicacao}
                    >
                        <Text style={styles.textoBotao}>
                            Encerrar
                        </Text>
                    </Pressable> */}

          {/* {modo === "inicial" ? (
                            <Text> App carregando... </Text>
                        ) : ('')}

                        {modo === "iniciado" ? (
                            <Text>App Iniciado.</Text>
                        ):('')}

                        {modo === "concluido" ? (
                            <Text>App Encerrado.</Text>
                        ):('')} */}
        </View>
      </View>
    </SafeAreaView>
  );
}
