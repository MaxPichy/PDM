import { Tarefa } from "@/services/tarefas_bd";
import {useState} from 'react';

export default function Home(){
    const db = useSQLiteContext()
    const[tarefas, setTarefas] = useState<Tarefa[]>([])
    const [titulo, setTitulo] = useState('')
    const[erro, setErro] = useState('')

    return(
        <View>
            
        </View>
    );
}