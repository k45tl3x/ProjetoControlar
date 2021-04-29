import {model, Schema} from "mongoose";

const BudgetSchema = new Schema({
    nome: {
    type: String,
        required: [true, "O campo nome do débito é obrigatório!"],
    },
    valor: {
    type: Number,
        min: [1, "Valor mínimo R$ 1,00"],
        required: [true, "O campo nome do débito é obrigatório!"],
    },

    status: {
        type: String,
        enum: ["PAGO", "AGENDADO", "PENDENTE"],
        uppercase: true,
    }
},
    {
        timestamps: true,
    }

);

export {BudgetSchema};