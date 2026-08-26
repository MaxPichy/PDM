import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';


export default function Home() {
    function iniciarAplicacao(){
        console.log('O botão foi pressionado!')
    }

    function changeText(){
        console.log('O botão foi long pressed!')
    }

    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.card}>

                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                    <Text style={styles.titulo}>TaskFlow</Text>
                    <Text style={styles.descricao}>
                        Organize sua tarefa de forma simples
                    </Text>
                    <Pressable 
                        onPress={iniciarAplicacao}
                        onLongPress={changeText} 
                        style={({pressed}) => [styles.botao, pressed && styles.botaoPressionado]}
                    >
                        {({pressed}) => (
                            <Text style={styles.textoBotao}>
                                {pressed ? 'Carregando...' : 'Começar'}
                            </Text>
                        )}
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};