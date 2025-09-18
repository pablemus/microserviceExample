import Fastify from 'fastify';
import type {ZodTypeProvider} from "fastify-type-provider-zod";
import {serializerCompiler, validatorCompiler} from "fastify-type-provider-zod";
import {configDotenv} from "dotenv";
import {initPlugins} from "./initPlugins.js";
import {authRoutes} from "./Routes/routes.js";
configDotenv();
const PORT = Number(process.env.PORT);
const fastify = Fastify({
    logger: true
}).withTypeProvider<ZodTypeProvider>();
fastify.setSerializerCompiler(serializerCompiler);
fastify.setValidatorCompiler(validatorCompiler);

await initPlugins(fastify);
await fastify.register(authRoutes, {prefix: "/api/v2"});

fastify.listen({port: PORT, host:'0.0.0.0'}, (err) =>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
});


