import { Aula } from './Aula';

export class Course {
    curso_id?: number;
    nome: string;
    categoria: string;

    aulas : Array<Aula>;

    //aulase?: [{nomeAula: string, aulaLink: string}]

}