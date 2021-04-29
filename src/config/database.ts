import mongoose from "mongoose";
mongoose
.connect("mongodb+srv://alex:alex@topicosavancados.e0gkx.mongodb.net/alex?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
        console.log("Models connected to the database");
    })
    .catch((erro) => {
        console.log(`Database connection fail: ${erro}`)
    });

    export {mongoose};