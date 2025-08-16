import { infoUser, ListUsers } from "../controllers/UsersController.js";


export const UsersRoutes = (app) => {

    const version = process.env.VERSION || "vtest";

    app.get(`/${version}/users/list`, ListUsers);
    app.get(`/${version}/users/info/:id`, infoUser)

}