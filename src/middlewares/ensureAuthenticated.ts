import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber o Token
  const authToken = request.headers.authorization;

  // Validar se token esta preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [bearer, token] = authToken.split(" "); // Separando A Mensagem bearer que vem junto com a requisição e o token que precisamos

  // Validar se Token é valido

  try {
    const {sub} = verify(token, "95fea8c1dfb01c7edeea24c52d1531ac") as IPayload

    request.user_id = sub // o sub por padrão pode ser uma função ou string, como user_id é obrigatório receber uma string, estamos forçando o sub retornar uma string.
    return next();
  } catch (error) {
    return response.status(401).json({ message: "Token Invalid" });
  }

  // Recuperar Informação do Usuário




}
