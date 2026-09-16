import { router } from 'expo-router';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Botao from '@/components/Botao';
import Titulo from '@/components/Titulo';
//import Caixa from '@/components/Caixa';

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

          <Titulo texto={iniciado ? ('Tarefas') : ('TaskFlow')}/>      

          {iniciado ? (
            <Text style={styles.descricao}>Bem vindo as TaskFlow!</Text>
          ) : (
            <Text style={styles.descricao}>
              Organize sua tarefas de forma simples
            </Text>
          )}

          <Botao
            texto={iniciado ? 'Continuar' : 'Começar'}
            onPress={()=>{}}
          >
          </Botao>
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
          <Botao
            texto='Tarefas'
            onPress={iniciarAplicacao}
          /> 

          {/* <Caixa>
            <Text>Texto dentro da caixa</Text>
            <Botao
              texto='CAIXA'
              onPress={()=>{}}
            />

          </Caixa> */}
        
        </View>
      </View>
    </SafeAreaView>
  );
}
