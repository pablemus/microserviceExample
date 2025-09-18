// @ts-ignore
import {PrismaClient} from "../../prisma/generated/prisma"
import type {RegisterSchema} from "../Models/authModels.js";
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

export async function register (data: RegisterSchema){
    const {username, password} = data;
    try{
        //este es un ejemplo de consulta usando sintaxis de prisma
        //hace que en lugar de necesitar un SP o escribir sql directamente, podamos crear y buscar cosas mas sencillo
        // aun se pueden ejecutar sps y sql crudo con prisma.$executeRaw() para sps y prisma.$queryRaw() para querys en SQL
        const exists = await prisma.user.findUnique({
            where: {
                username: username
            }
        });
        if(exists){
            return {error: "Usuario ya registrado"}
        } else{
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await prisma.user.create({
                data: {
                    username: username,
                    password: hashedPassword
                }
            });
           if(newUser) return {message: "Usuario creado con exito"}
        }
    } catch (err){
        console.error(err);
        return err;
    }
}