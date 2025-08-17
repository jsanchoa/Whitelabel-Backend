import { infoProfile, LoginController, logoutProfile } from "../controllers/AuthController.js";

export const AuthRoutes = (app) => {
    const version = process.env.VERSION || "vtest";

    app.post(`/${version}/login`, LoginController);
    app.get(`/${version}/profile`, infoProfile);
    app.post(`/${version}/logout`, logoutProfile);
}