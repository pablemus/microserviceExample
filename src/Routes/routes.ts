import type {FastifyInstance} from "fastify";
import  {FastifyRegisterSchema} from "../Models/authModels.js";
import {registerController} from "../Controllers/authController.js";

export async function authRoutes(fastify:FastifyInstance){
    fastify.post("/register",{schema: {body: FastifyRegisterSchema}}, registerController);
}