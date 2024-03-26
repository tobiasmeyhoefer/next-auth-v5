import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: "That was not correct :("
  }),
  password: z.string().min(1, {
    message: "you need a password to login :O"
  })
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "this is required :("
  }),
  password: z.string().min(8, {
    message: "you need a longer password to login :O"
  }),
  name: z.string().min(1, {
    message: "Name is required :/"
  })
})
