import Botao from "@/components/Botao";
import { Tarefa, criarTarefa, listarTarefas } from "@/services/tarefas_bd";
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home(){
    const db = useSQLiteContext()
    const[tarefas, setTarefas] = useState<Tarefa[]>([])
    const [titulo, setTitulo] = useState('')
    const[erro, setErro] = useState('')

    async function carregarTarefas(){
        try{
            const resultado = await listarTarefas(db);
            setTarefas(resultado);
        }catch(error){
            setErro('Não foi possível carregar as tarefas!');
        }
    }

    useEffect(() => {
        void listarTarefas(db)
    }, []);

    async function salvarTarefas(){
        const texto = titulo.trim()

        try{
            setErro('');
            await criarTarefa(db, texto);

            setTitulo('');
            await carregarTarefas();
        }catch(error){
            Alert.alert('Erro', 'Não foi possível salvar tarefa!');
        }
    }

    return(
        <View style={styles.container}>
            <Text>TaskFlow</Text>
            <Text>Organize suas tarefas localmente</Text>

            <View style={styles.formulario}>
                <TextInput 
                  style={styles.input}
                  placeholder="Digite o título da tarefa"
                  value={titulo}
                  onChangeText={setTitulo}
                  maxLength={120}
                />

                <Botao texto='Salvar' onPress={() => void salvarTarefas()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0055ff',
        paddingTop: 55,
        paddingHorizontal: 20,
    },
    formulario: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 14,
        marginBottom: 21,
    },
    input: {
        borderWidth: 1,
        borderColor: '#0055ff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        fontSize: 16,
    }
});