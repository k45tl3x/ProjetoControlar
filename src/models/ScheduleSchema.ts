import {Schema} from "mongoose";

const ScheduleSchema = new Schema({
    nome: {
    type: String,
        required: [true, "O campo nome do crédito é obrigatório!"],
    },
    valor: {
    type: Number,
        min: [1, "Valor mínimo R$ 1,00"],
        required: [true, "O campo nome do crédito é obrigatório!"],
    },

},
    {
        timestamps: true,
    }

);

export {ScheduleSchema};