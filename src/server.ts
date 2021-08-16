import "reflect-metadata"
import express from 'express';
import { router } from './routes'

import "./database";

const app = express();

app.use(express.json()); // por padrão ele pega vários tipos, e causa alguns erros na aplicação por isso, é preciso indicar o tipo que quero.

app.use(router); // todas minhas rotas vão fazer parte do meu Projeto

// http://localhost:3000
app.listen(3000, () => console.log('Server Running'))