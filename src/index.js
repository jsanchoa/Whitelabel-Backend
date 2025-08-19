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
import { ExpenseRoutes } from "./routes/ExpenseRoutes.js";
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
ExpenseRoutes(app);
InventoryRoutes(app);
POProductsRoutes(app);
ProductRoutes(app);
ProviderRoutes(app);

app.listen(port, async () => {
    try {
        await database.authenticate();

        //* Force: true, permite que cada vez que se inicie el proyecto, se dropeen las tablas.
        await database.sync({ force: true });

        //* Esta simplemente crea las tablas, y las deja ahi.
        // await database.sync();

        //! Creacion de usuarios de prueba cada vez que se inicia la BD pero tienen que desactivar el { force: true } en el index principal del proyecto
        //contraseña sin hashear
        const pswd = "prueba"

        //Numero de rondas para hashear la contraseña
        const saltRounds = 10;

        //Encripto la contraseña
        const encryptedpassword = await bcrypt.hash(pswd, saltRounds);

        //Creo un rol y usuario por defecto, usando el find (encuentre) or(Sino) Create(creelo).
        await Roles.findOrCreate({ where: { name: 'Administrator'}, defaults: { name: 'Administrator'} });
        await Users.findOrCreate({ where: { username: 'jsancho' }, defaults: { name: 'Jose', last_name: 'Sancho', roles_id: 1, password: encryptedpassword } });
        await Users.findOrCreate({ where: { username: 'nsegura' }, defaults: { name: 'Noelia', last_name: 'Segura', roles_id: 1, password: encryptedpassword } });
        await Users.findOrCreate({ where: { username: 'jtorres' }, defaults: { name: 'Jimena', last_name: 'Torres', roles_id: 1, password: encryptedpassword } });
        await Users.findOrCreate({ where: { username: 'mmora' }, defaults: { name: 'Manuel', last_name: 'Mora', roles_id: 1, password: encryptedpassword } });
        await Client.findOrCreate({ where: { email: "jose@example.com" }, defaults: {    
            name: "Jose",
            last_name: "Sancho",
            phone: "72761247",
            status: "A" }  // recuerda que solo acepta 'A' o 'I'
            });
        await Provider.findOrCreate({
            where: { account_number: "CR05015202001026284066" }, // condición para buscar
            defaults: {                                          // valores a insertar si no existe
                name: "Ferretería La Unión",
                business_type: "Ferretería",
                address: "San José, Costa Rica",
                status: "A"
            }
            });
        await Category.findOrCreate({
            where: { name: "Electrónica" },  // criterio único (puede ser name)
            defaults: {
                image: "electronics.png",
                description: "Dispositivos y accesorios electrónicos",
                status: "A"
            }
            });
        await Product.findOrCreate({
            where: { sku: "SKU12345" },  // condición única para buscar
            defaults: {
                category_id: 1,
                provider_id: 1,
                description: "Mouse Gamer RGB",
                price: 25.50,
                stock: 100,
                status: "A"
            }
            });

        await Product.findOrCreate({
        where: { sku: "SKU67890" },  // condición única para buscar
        defaults: {
            category_id: 1,
            provider_id: 1,
            description: "Teclado Mecánico RGB",
            price: 45.75,
            stock: 50,
            status: "A"
        }
        });

        await ClientPurchaseOrder.findOrCreate({
            where: {
                client_id: 1,        // ID del cliente
            },
            defaults: {
                status: "A"
            }
            });

        await POProducts.findOrCreate({
            where: {
                product_id: 1,               // Producto comprado
                purchase_order_id: 1 // Asociado a la orden creada
            },
            defaults: {
                quantity: 3   // Cantidad de ese producto
            }
            });


        console.log(`Server started on port ${port}`)
    } catch(error) {
        console.log(error)
    }
});

export default { app };