import {Schema} from "mongoose";

const ScheduleSchema = new Schema({
    
    data: {
         type: Date, default: Date.now,
            required: [true, "Informe uma data futura para a realização da tarefa..."],
        },
    
    tarefa: {
    type: String,
        required: [true, "É preciso informar a tarefa!"],
    },
    
    local: {
        type: String,
            required: [true, "Informe a localização da tarefa a ser realizada..."],
        },

},
    {
        timestamps: true,
    }

);

export {ScheduleSchema};