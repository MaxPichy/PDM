import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

interface TCProps{
    titulo: string;
    descricao: string;
    prioridade: string;
    concluida?: boolean;
    excluir?: () => void;
}

export default function TarefaCard({titulo, descricao, prioridade, concluida, excluir}: TCProps){

    return(
        <View style={[
            styles.tarefa,
            prioridade === "Alta" && { borderLeftColor: '#b72032ff' },
            prioridade === "Media" && { borderLeftColor: '#c1c113ff' },
            prioridade === "Baixa" && { borderLeftColor: '#13c11fff' }
            ]}>

            <View style={{alignSelf: 'flex-end'}}>
                <Pressable onPress={excluir}>
                    <Ionicons name='trash-outline' size={20} color='red'/>
                </Pressable>
            </View>

            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.descricao}>{descricao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tarefa:{
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#cacacaff',
        borderRadius: 8,
        padding: 15,
        borderLeftWidth: 4,
        margin: 5,
    },
    titulo:{
        fontSize: 20,
        fontWeight:'bold'
    },
    descricao:{
        fontSize: 13
    },
    excluir:{
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    }
});