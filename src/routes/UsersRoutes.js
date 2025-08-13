import { borrarUsuario, infoUsuario, ListaUsuarios, modificarUsuario, NuevoUsuario } from "../controllers/UsersController.js";
import { getUsuarioInfo } from "../services/UsuariosServices.js";


export const UsersRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/usuarios/lista`, ListaUsuarios);
    app.get(`/${version}/usuarios/info/:id`, infoUsuario);
    app.post(`/${version}/usuarios/nuevo`, NuevoUsuario);
    app.patch(`/${version}/usuarios/modificar/:id`, modificarUsuario);
    app.delete(`/${version}/usuarios/borrar/:id`, borrarUsuario);

}