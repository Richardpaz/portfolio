"use client"

import {
  TextField,
  Text,
  TextArea,
  Button,
  Flex,
  AlertDialog
} from "@radix-ui/themes"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useState } from "react"

const contactoSchema = z.object({
  nombre: z.string().min(1),
  email: z.string().email(),
  mensaje: z.string().min(1)
})

type typeContacto = z.infer<typeof contactoSchema>

export function FormContacto() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<typeContacto>()

  const [open, setOpen] = useState(false)
  const router = useRouter()

  const submit = async (data: typeContacto) => {
    try {
      const result = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (!result.ok) throw new Error("Error al enviar")

      // ✅ abrir dialog SOLO si salió bien
      setOpen(true)

    } catch (error) {
      console.log(error)
    }
  }

  const handleNav = () => {
    setOpen(false)
    router.push("/")
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Flex direction="column" width="400px" gap="2">

          <Text>Nombre :</Text>
          <TextField.Root {...register("nombre", {
            required: "El nombre es requerido"
          })}/>
          <span className="text-sm text-red-400">
            {errors.nombre?.message}
          </span>

          <Text>Email :</Text>
          <TextField.Root type="email" {...register("email", {
            required: "El email es requerido"
          })}/>
          <span className="text-sm text-red-400">
            {errors.email?.message}
          </span>

          <Text>Mensaje :</Text>
          <TextArea {...register("mensaje", {
            required: "El mensaje es requerido"
          })}/>
          <span className="text-sm text-red-400">
            {errors.mensaje?.message}
          </span>

          <Button type="submit">
            Enviar
          </Button>

        </Flex>
      </form>

      {/* ✅ ALERT DIALOG */}
      <AlertDialog.Root open={open} onOpenChange={setOpen}>
        <AlertDialog.Content maxWidth="450px">

          <AlertDialog.Title>
            Mensaje enviado
          </AlertDialog.Title>

          <AlertDialog.Description>
            Tu mensaje fue enviado correctamente ✅
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Action>
              <Button onClick={handleNav}>
                OK
              </Button>
            </AlertDialog.Action>
          </Flex>

        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  )
}