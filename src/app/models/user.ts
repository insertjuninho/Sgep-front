export class User{
    id: string;
    id_gestor: string;
    nome: string;
    sobrenome: string;
    matricula: string;
    empresa: string;
    cargo: string;
    status: string;
    email: string;
    cpf: string;
}

export interface UserSignin {
    email: string;
    senha: string;
  }