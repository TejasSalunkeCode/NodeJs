import {Router} from "express";
import * as authControllers from "../controllers/auth.controller.js";
const router=Router();

router.get("/register",authControllers.getRegisterPage);
router.get("/login",authControllers.getLoginPage);
router.post("/login",authControllers.postLogin);

export const authRoutes=router;