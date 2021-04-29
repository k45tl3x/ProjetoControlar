import { Request, Response } from "express";
import AdminSchema from "../models/AdminSchema";

//todas as ações referente lista, cadastro, buscas, validações.
class AdminController {
    list(request: Request, response: Response) {
        response.json(AdminSchema.find());
    };

    listById(request: Request, response: Response){
        //Definição da constante para rg e telefone recebendo os parametros do request
        const { param1, param2 } = request.params;
        //criação do objeto onde está inserido os dados que queremos
        const objeto = {
            data:2020-10-10,
            tarefa: "Orçamento",
            cliente: "Tiburcio",
            local: "Rua Antonio Bartapeli",
            ambiente: "quarto",
            contato: "+5541999066650"
        };
        //resposta do objeto em json
        response.json(objeto);
    }

    create(request: Request, response: Response){
        const admin = request.body;
        console.log(admin);
        AdminSchema.create(admin);
        response.json(admin);
    };

    atualizar(request: Request, response: Response){
        const admin = request.body;
        console.log(admin);
        AdminSchema.updateMany(admin);
        response.json(admin);
    };


}

export{AdminController};