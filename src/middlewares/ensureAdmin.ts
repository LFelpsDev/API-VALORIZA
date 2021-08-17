// função para verificar os dados que estamos recebendo, e verificando se a pessoa é admin

import { Request, Response, NextFunction } from "express";

export function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Verificar se o usuário Admin

  // como não temos a questão de Autenticação vamos fazer uma Simulação
  const admin = true;

  if (admin) {
    return next(); // se ele for admin ele vai poder seguir com o resto do fluxo
  }

  return response
    .status(401) // ERRO DE NÃO AUTORIZADO
    .json({
      error: "Sai Dai Meu Fi, voce não tem Perm de (ADM)"
    });
}
