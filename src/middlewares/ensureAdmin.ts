// função para verificar os dados que estamos recebendo, e verificando se a pessoa é admin

import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {

  const { user_id } = request;

  const usersRepositores = getCustomRepository(UsersRepositories);

  const { admin } = await usersRepositores.findOne(user_id);

  // Verificar se o usuário Admin

  // como não temos a questão de Autenticação vamos fazer uma Simulação

  if (admin) {
    return next(); // se ele for admin ele vai poder seguir com o resto do fluxo
  }

  return response
    .status(401) // ERRO DE NÃO AUTORIZADO
    .json({
      error: "Sai Dai Meu Fi, voce não tem Perm de (ADM)"
    });
}
