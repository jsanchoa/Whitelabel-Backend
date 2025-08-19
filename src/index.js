//Needed to import variables from process.env
import dotenv from "dotenv";
import express from "express";
import { UsersRoutes } from "./routes/UsersRoutes.js";
import database from "./database/DatabaseConnection.js";
import * as modelos from "./models/index.js";
import cors from "cors";
import { RolesRoutes } from "./routes/RolesRoutes.js";
import { AuthRoutes } from "./routes/AuthRoutes.js";
import cookieParser from "cookie-parser";
import { CategoryRoutes } from "./routes/CategoryRoutes.js";
import { ClientsRoutes } from "./routes/ClientRoutes.js";
import { ClientPurchaseOrderRoutes } from "./routes/ClientPurchaseOrderRoutes.js";
import { IncomeRoutes } from "./routes/IncomeRoutes.js";
import { InventoryRoutes } from "./routes/InventoryRoutes.js";
import { POProductsRoutes } from "./routes/POProductsRoutes.js";
import { ProductRoutes } from "./routes/ProductRoutes.js";
import { ProviderRoutes } from "./routes/ProviderRoutes.js";

dotenv.config();

//Needed to start the project
const app = express();
const port = process.env.PORT || 5000;

//* Esta libreria permite que el backend permita recibir solicitudes desde el frontend.
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(cookieParser());

//* Este indica a la aplicación que es un tipo de servidor JSON
app.use(express.json());

//* Registra las rutas de Usuarios, Roles, etc, etc.
UsersRoutes(app);
RolesRoutes(app);
AuthRoutes(app);
ClientsRoutes(app);
ClientPurchaseOrderRoutes(app);
CategoryRoutes(app);
IncomeRoutes(app);
InventoryRoutes(app);
POProductsRoutes(app);
ProductRoutes(app);
ProviderRoutes(app);


