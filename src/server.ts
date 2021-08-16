import "reflect-metadata"
import express from 'express';

import "./database";
// @types/express
const app = express();

app.get('/testing', (request, response) => {
  // Request => Entrando
  // Response => Saindo
  return response.send("Ola Mundo Diego Trem bala")
})

app.post('/test-post', (request, response) => {
  return response.send('Ola mundo Nlw, Método Post')
})

// http://localhost:3000
app.listen(3000, () => console.log('Server Running'))