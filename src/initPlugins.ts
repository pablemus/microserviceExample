import type {FastifyInstance} from "fastify";
import {fastifyRedis} from "@fastify/redis";
import {fastifyCors} from "@fastify/cors";

const REDIS_URL = process.env.REDIS_URL;

export async function initPlugins(fastify: FastifyInstance){
    try{
        //la variable de env usualmente es redis://redis:6379 para que acceda por la version de redis dockerizada
        //si van a hacerlo local, no pongan la url en el env, se usara el localhost
        await fastify.register(fastifyRedis, {
            url: REDIS_URL ?? "redis://127.0.0.1:6379"
        });
        await fastify.register(fastifyCors, {
            origin: "*",
            methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
        });
    } catch (err){
        console.error(`Hubo un error inicializando los plugins ${err}`);
    }

}