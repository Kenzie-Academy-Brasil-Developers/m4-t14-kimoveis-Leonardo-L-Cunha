import { z } from 'zod'

const UserSchema = z.object({
    id: z.number(),
    name: z.string().min(3).max(45),
    email: z.string().email().max(45),
    admin: z.boolean().optional().default(false),
    password: z.string().max(120),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
})

const CreateUserSchema = UserSchema.omit({
    id:true,
    createdAt: true,
    updatedAt:true,
    deletedAt: true
})
const returnUserSchema = UserSchema.omit({
    password: true
})

const returnAllUserSchema = returnUserSchema.array()
const UpdateUsersShema = CreateUserSchema.omit({
    admin: true,
    
}).partial()
export {
    UserSchema,
    CreateUserSchema,
    returnUserSchema,
    returnAllUserSchema,
    UpdateUsersShema
}