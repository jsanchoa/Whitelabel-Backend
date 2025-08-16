import { getRoles } from "../services/RolesServices.js"

export const ListRol = async(req, res) => {
    const data = await getRoles();

    res.send(data);
}