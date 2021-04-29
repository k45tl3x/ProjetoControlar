//importa a biblioteca do express do Request e do Response.
import express from "Express";
//importa as rotas do router
import {router} from "./config/routes";
import {mongoose} from "./config/database";
console.clear();

//cria uma aplicação
const app = express();
const database = mongoose;
//Middlewre para reconhecer o corpo em json das nossas requisições.
app.use(express.json());
//parte de rotas onde as mesmas estão confiiguradas.
app.use(router);




app.listen(3000, () => {
    console.log("O servidor está rodando...");
});

