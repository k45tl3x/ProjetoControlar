import {model, Schema} from "mongoose";
import {BudgetSchema} from "./BudgetSchema";
import {ScheduleSchema} from "./ScheduleSchema";

const AdminSchema = new Schema(
    {
        data:{
            type: Date,
            required: [true, "O campo data é obrigatório!"],
            min: ["2000-01-01", "Data mínima permitida: 01/01/2000"],
        },
        budget: [BudgetSchema],
        scheduledebitos: [ScheduleSchema],
},
    {
        timestamps: true,
    }

);

export default model("ciclos", AdminSchema);