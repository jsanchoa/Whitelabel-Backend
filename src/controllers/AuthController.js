import { getUsername } from "../services/AuthServices.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const LoginController = async(req, res) => {
    
    //Desestructuro la informacion enviada por el frontend
    const { username, password } = req.body;

    if(!username)
        return res.status(400).json({ success: false, message: "Bad request" });

    if(!password)
        return res.status(400).json({ success: false, message: "Bad request" });

    try {

        //Preguntar si el usuario esta en la base de datos
        const user = await getUsername(username);

        if(!user) 
            return res.status(404).json({ success: false, message: "Usuario no encontrado!" });

        //Comparo las contraseñas encriptadas
        const pass = await bcrypt.compare(password, user.password);
        
        if(!pass)
            return res.status(401).json({ success: false, message: "Contraseña incorrecta!" });

        const accessToken = jwt.sign(
            { id: user.users_id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "15m" } // expira en 15 minutos
        );

        // Guardar accessToken en cookie segura
        res.cookie("accessToken", accessToken, {
            httpOnly: true,      // no accesible desde JS
            secure: true,        // true en producción con HTTPS
            sameSite: "strict",  // evitar CSRF
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 días
        });

        return res.status(200).json({
            success: true,
            message: "Login exitoso!",
        });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Error en el servidor" });
    }

}


export const infoProfile = async(req, res) => {
  const token = req.cookies.accessToken; // token enviado en cookie httpOnly

  if (!token) {
    // Usuario no logueado
    return res.status(200).json({ loggedIn: false, user: null });
  }

  try {
    // Verificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //obtengo la informacion del usuario
    const { name, last_name, username } = await getUsername(decoded.username);

    // Retornar datos del usuario
    return res.status(200).json({ loggedIn: true, user: { name: name, last_name: last_name, username: username } });
  } catch (err) {
    // Token inválido o expirado
    return res.status(200).json({ loggedIn: false, user: null });
  }
};


export const logoutProfile = async(req, res) => {
    //Limpia la cookie
    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: true,       // true si estás en producción con HTTPS
        sameSite: "strict"  // igual que al crearla
    });

    return res.status(200).json({ success: true, message: "Logout successfully" });
};