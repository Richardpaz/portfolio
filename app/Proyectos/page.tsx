import { Badge, Card, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { string, z } from "zod"

const badgeColors = [
    "green",
    "brown",
    "blue",
    "red",
    "ruby",
    "gray",
    "gold",
    "bronze",
    "yellow",
    "amber",
    "orange",
    "tomato",
    "crimson",
    "pink",
    "plum",
    "purple",
    "violet",
    "iris",
    "indigo",
    "cyan",
    "teal",
    "jade",
    "grass",
    "lime",
    "mint",
    "sky",
] as const;

const techSchema = z.object({
    name: z.string(),
    color: z.enum(badgeColors)
})

type typeTech = z.infer<typeof techSchema>

const tecnologia: typeTech[] = [
    { name: "nodejs", color: 'green' },
    { name: "nextjs", color: 'brown' },
    { name: "tailwindcss", color: 'blue' },
    { name: "supabase", color: 'green' },
    { name: "zod", color: 'red' },
    { name: "typescript", color: 'blue' },
    { name: "zustand", color: 'brown' }
] 

function Proyectos() {
    return (
        <Flex justify={"center"} direction={"column"} gap={"2"} style={{ padding: "0 50px" }}>
            <Card variant="classic" className="border-1 border-gray-400 h-50">
                <Flex direction={"column"} gap={"4"}>
                    <Text weight={"medium"}>Gestión de Tareas</Text>
                    <Text>
                        La aplicación permite realizar un CRUD ( Create,Read,Update,Delete) de tareas mediante una interfaz intuitiva, rápida y completamente responsive.
                    </Text>

                    <Flex gap={"2"}>
                        {tecnologia?.map((t) => <Badge variant={"outline"} color={t.color} key={t.name}>{t.name}</Badge>)}
                    </Flex>
                    <Link href={"https://richardpaz-todo-app.vercel.app/"} target={"_blank"}>
                        <Image
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${"github"}/${"github"}-original.svg`}
                            width={30}
                            height={30}
                            alt={"github"}
                            className={"ri-home-line text-red-500"}
                        />
                    </Link>

                </Flex>
            </Card>
           
        </Flex >

    )
}
export default Proyectos;