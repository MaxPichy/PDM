import api from "./api";

export async function listarTarefas(){
    const resposta = await api.get('/tarefas');
    return resposta.data;
}

export async function buscarTarefa(id: any){
    const resposta = await api.get(`/tarefas'/${id}`);
    return resposta.data;
}

export async function criarTarefa(tarefa: any){
    const resposta = await api.post('/tarefas', tarefa);
    return resposta.data;
}

export async function atualizarTarefa(id: string, tarefa: any){
    const resposta = await api.get(`/tarefas/${id}`, tarefa);
    return resposta.data;
}

export async function excluirTarefa(_id: string){
    await api.delete(`/tarefas/${_id}`);
}
