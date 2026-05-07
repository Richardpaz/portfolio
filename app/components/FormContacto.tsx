"use client"
import { TextField, Text, TextArea, Button, Flex } from "@radix-ui/themes";
import { z } from "zod"
import { useForm } from "react-hook-form"

const contactoSchema = z.object({
    nombre: z.string().min(1),
    email: z.string().email(),
    mensaje: z.string().min(1)
})

type typeContacto = z.infer<typeof contactoSchema>

export function FormContacto() {
    const { register, handleSubmit, formState: { errors } } = useForm<typeContacto>()

    const submit = (data: typeContacto) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Flex direction={"column"} width={"400px"} gap={"2"}>
                <Text>Nombre : </Text>
                <TextField.Root type="text" {...register("nombre", {
                    required: {
                        value: true,
                        message: "El nombre es requerido"
                    }
                })}></TextField.Root>
                <span className="text-sm text-red-400">{errors.nombre?.message}</span> 
                <Text>Email : </Text>
                <TextField.Root type="email" {...register("email", {
                    required: {
                        value: true,
                        message: "El email es requerido"
                    }
                })}></TextField.Root>
                <span className="text-sm text-red-400">{errors.email?.message}</span>
            <Text>Mensaje : </Text>
            <TextArea {...register("mensaje", {
                required: {
                    value: true,
                    message: "El mensaje es requerido"
                }
            })}></TextArea>
            <span className="text-sm text-red-400">{errors.mensaje?.message}</span>
            
            <Button>Enviar</Button>
        </Flex>
        </form >
    )

}
