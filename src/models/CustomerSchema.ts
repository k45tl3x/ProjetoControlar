import {Schema} from "mongoose";

const CustomerSchema = new Schema({
    cliente: {
        type: String,
                required: [true, "Nome do cliente é um campo obrigatório!"],
        },

    contato: {
        type: Number,
                required: ["Por favor informe o valor orçado!"],
        },

    ambiente: {
        type: String,
                required: ["Informe o ambiente em que a tarefa será realizada..."],
    },

    
},
    {
        timestamps: true,
    }

);

export {CustomerSchema};