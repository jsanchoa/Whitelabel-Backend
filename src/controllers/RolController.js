import { getRoles } from "../services/RolesServices.js"

export const ListaRol = async(req, res) => {
    const data = await getRoles();

    res.send(data);
}