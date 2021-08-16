import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from 'uuid'; // para pegar vários números aleatórios

// entidade Usuário, temos uma tabela Usuário

// Entidade < - > ORM < - > BD (users)

@Entity("users") // pegando o nome da tabela
class User {
  // Estrutura da nossa Entidade
  @PrimaryColumn()
  readonly id: string; // Sera somente Leitura

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // new User()
  constructor(){ // se o id não vim Preenchido quer dizer que sera novo
            // Se o id vim Preenchido quer dizer que pode ser alguma Alteração
    if(!this.id){ 
      this.id = uuid();
    }
  }
}

export { User };
