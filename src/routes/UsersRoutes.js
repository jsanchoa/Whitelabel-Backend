import { infoUser, ListUsers } from "../controllers/UsersController.js";
import { verifyToken } from "../middlewares/verifyToken.js";


export const UsersRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/users/list`, verifyToken, ListUsers);
    app.get(`/${version}/users/info/:id`, verifyToken, infoUser)

}