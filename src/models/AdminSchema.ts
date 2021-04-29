import {model, Schema} from "mongoose";
import {CustomerSchema} from "./CustomerSchema";
import {ScheduleSchema} from "./ScheduleSchema";

const AdminSchema = new Schema(
    {
        data:{
            type: Date,
            required: [true, "Informe um dia para a tarefa!"],
            min: ["2000-01-01", "Informe uma data futura!"],
            msg: ["Sem registros para a data consultada!"],
        },
        customer: [CustomerSchema],
        schedule: [ScheduleSchema],
},
    {
        timestamps: true,
    }

);

export default model("ciclos", AdminSchema);