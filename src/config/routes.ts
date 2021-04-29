//importação do AdminController, ".. é para voltar a pasta anterior"
import {AdminController} from "../controllers/AdminController"
//importação da biblioteca do express do router, do request, e do response.
import { Router, Request, Response } from "express";
//cria a configuração de rota
const router = Router();
//criação do objeto AdminController para linkar com a class AdminController
const adminController = new AdminController();
//Definição da rota e os métodos usados
router.get("/admin/listar", adminController.listar); //chamando o Admin controller do objeto, que está chamando da classe criada na pasta Admin controllers.
//Definição da rota e os métodos usados
router.get("/admin/listar/:param1/:param2", adminController.listarPorId);

//Métodos HTTP -> GET, POST e etc...
//GET -> Solicitar recursos/dados do servidor
//POST -> Enviar recursos/dados/entidades para o servidor
router.post("/", adminController.cadastrar);

export { router };
