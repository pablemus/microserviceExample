import z from 'zod'

export const FastifyRegisterSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6)
});

export type RegisterSchema = z.infer<typeof FastifyRegisterSchema>;