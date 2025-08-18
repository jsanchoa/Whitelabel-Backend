import { getUserInfo, getUserList } from "../services/UsersServices.js";

//* Async por que ocupo que la funcion espere una respuesta de alguien.
export const ListUsers = async(req, res) => {

    //Llamo el metodo
    const data = await getUserList();

    res.send(data);
}

export const infoUser = async(req, res) => {

    const user_id = req.params.id;

    //Llamo el metodo
    const data = await getUserInfo(user_id);

    res.send(data);
}

export const NuevoUsuario = async(req, res) => {
    try{

      const nuevoUsuario = await crearUsuario(req?.body);

      res.status(201).json({ message: "Usuario creado exitosamente", usuario: nuevoUsuario });

    } catch(error) {
        console.log(error);

        res.status(500).json({
        message: "Error al crear usuario",
        error: error.message
        });
    };
};

export const modificarUsuario = async(req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const { nombre, apellido, correo, telefono, cedula, id_rol } = data;

        if (!nombre || !apellido || !correo || !telefono || !cedula || !id_rol) {
            return res.status(400).json({ message: "Faltan datos obligatorios" });
        }

        // await modificaUsuario(id, data);

        res.status(201).json({ message: "Usuario modificado exitosamente", usuario: id });

    } catch(error) {
        res.status(500).json({
            message: "Error al modificar usuario",
            error: error.message
        });
    }
}

export const borrarUsuario = async(req, res) => {
    try {
        const idUsuario = parseInt(req.params.id);

        await deleteUsuario(idUsuario);

        res.status(201).json({ message: "Usuario eliminado exitosamente", usuario: idUsuario });
    } catch(error) {
        res.status(500).json({
        message: "Error al eliminar usuario",
        error: error.message
        });
    }
}