import type { SQLiteDatabase } from 'expo-sqlite';

export type Tarefa = {
  id: number;
  titulo: string;
  concluida: number;
};

// create
export async function criarTarefa(
  db: SQLiteDatabase,
  titulo: string,
): Promise<void> {
  await db.runAsync('INSERT INTO tarefas(titulo) VALUES(?)', titulo);
}

// read
export async function listarTarefas(db: SQLiteDatabase): Promise<Tarefa[]> {
  return db.getAllAsync<Tarefa>('SELECT * FROM tarefas ORDER BY id DESC');
}

// update titulo
export async function atualizarTitulo(
  db: SQLiteDatabase,
  id: number,
  titulo: string,
): Promise<void> {
  await db.runAsync('UPDATE tarefas SET titulo = ? WHERE id = ?', titulo, id);
}

// update concluida
export async function atualizarConclusao(
  db: SQLiteDatabase,
  id: number,
  concluida: number,
): Promise<void> {
  await db.runAsync(
    'UPDATE tarefas SET titulo = ? WHERE id = ?',
    concluida,
    id,
  );
}

// delete
export async function excluirTarefa(
  db: SQLiteDatabase,
  id: number,
): Promise<void> {
  await db.runAsync('DELETE FROM tarefas WHERE id = ?', id);
}
