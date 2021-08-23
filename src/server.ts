import "reflect-metadata"
import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors"
import { router } from './routes'
import cors from 'cors'

import "./database";

const app = express();
app.use(cors())

app.use(express.json()); // por padrão ele pega vários tipos, e causa alguns erros na aplicação por isso, é preciso indicar o tipo que quero.

app.use(router); // todas minhas rotas vão fazer parte do meu Projeto

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error){
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: "Error",
    message: "Internal Server Error"
  })
})

// http://localhost:3000
app.listen(3000, () => console.log('Server Running'))