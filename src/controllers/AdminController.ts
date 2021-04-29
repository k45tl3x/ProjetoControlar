
import { Request, Response } from "express";
import AdminSchema from "../models/AdminSchema";

//todas as ações referente lista, cadastro, buscas, validações.
class AdminController {
    listar(request: Request, response: Response) {
        response.json(AdminSchema.find());
    };

    listarPorId(request: Request, response: Response){
        //Definição da constante para rg e telefone recebendo os parametros do request
        const { param1, param2 } = request.params;
        //criação do objeto onde está inserido os dados que queremos
        const objeto = {
            nome: "Alex",
            idade: 42,
            endereço: "Rua Antonio Bartapeli",
            param1: "",
            param2: ""
        };
        //resposta do objeto em json
        response.json(objeto);
    }

    cadastrar(request: Request, response: Response){
        const admin = request.body;
        console.log(admin);
        AdminSchema.create(admin);
        response.json(admin);
    };
}

export{AdminController};