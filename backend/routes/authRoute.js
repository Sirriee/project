import express from "express";
import {signup,signin} from "../controller/auth.js"
const authRouter = express.Router();

authRouter.post('/signup',signup);
authRouter.post('/signin',signin);

export default authRouter;
