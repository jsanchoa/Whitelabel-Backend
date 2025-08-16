//Needed to import variables from process.env
import dotenv from "dotenv";
import express from "express";
import { UsersRoutes } from "./routes/UsersRoutes.js";
import database from "./database/DatabaseConnection.js";
import * as modelos from "./models/index.js";
import cors from "cors";
import { RolesRoutes } from "./routes/RolesRoutes.js";

dotenv.config();

//Needed to start the project
const app = express();
const port = process.env.PORT || 5000;

//* Esta libreria permite que el backend permita recibir solicitudes desde el frontend u otros lugares.
app.use(cors());

//* Este indica a la aplicación que es un tipo de servidor JSON
app.use(express.json());

//* Registra las rutas de Usuarios, Roles, etc, etc.
UsersRoutes(app);
RolesRoutes(app);

app.listen(port, async () => {
    try {
        await database.authenticate();

        //* Force: true, permite que cada vez que se inicie el proyecto, se dropeen las tablas.
        await database.sync({ force: true });

        //* Esta simplemente crea las tablas, y las deja ahi.
        // await database.sync();

        console.log(`Server started on port ${port}`)
    } catch(error) {
        console.log(error)
    }
});

export default { app };

