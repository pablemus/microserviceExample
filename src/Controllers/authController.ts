import type {FastifyRequest, FastifyReply} from "fastify";
import {register} from "../Services/authService.ts";
import type {RegisterSchema} from "../Models/authModels.js";

export async function registerController( req:FastifyRequest<{Body: RegisterSchema}>, rep:FastifyReply){
    const data = req.body;
    try{
        const response = await register(data);
        return rep.code(200).send(response);
    } catch (err){
        console.error(err);
      return rep.code(200).send(err);
    }
}