//app.ts - Arquivo com as config gerais da aplicação

import express from 'express'; //express - lib para construção de backend
import linksRouter from './routes/links'; // importa o arquivo de rotas
import cors from 'cors'; //cors link o back com o front

const app = express(); //cria o app com express
app.use(express.json()); //define o formato de dados como json
app.use(cors()); //habilita o cors
app.use(linksRouter); //define as rotas

export default app;