export interface Course {
    curso_id?: number;
    nome: string;
    categoria: string;
    aulas?: [{nomeAula: string, aulaLink: string}]

}