import { Router } from "express";
import { login, signup } from "../../controller/auth/auth_controller.js";

const router = Router();

router.post("/login", login);

router.post("/singup", signup);

// router.route("/user").get(login).post(login);
export default router;
