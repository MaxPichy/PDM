import { Alert } from "react-native";
import api from "./api";

export async function listarTarefas(){
    const resposta = await api.get('/tarefas');
    return resposta.data;
}

export async function criarTarefas(tarefa: any){
    const resposta = await api.post('/tarefas', tarefa);
    return resposta
}

export async function excluirTarefa(_id: string){
    await api.delete(`/tarefas/${_id}`);
}
