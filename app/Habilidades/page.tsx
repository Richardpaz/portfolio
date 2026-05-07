import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

// data/stack.ts

export const stackLenguajes = [
    "html5",
    "css3",
    "javascript",
    "typescript",
]

export const stackFrameworks = [
    "react",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "materialui",
    "bootstrap"
];

export const backendIcons = [
    "nodejs",
    "express",
    "mongodb",
    "postgresql",
    "mysql",
    "firebase",
    "supabase",
    "cloudflare",
    "prisma",
    "sqlite",
];

export const toolsIcons = [
    "git",
    "github",
    "gitlab",
    "vscode",
    "postman",
    "docker",
    "npm",
    "yarn",
    "figma",
    "photoshop",
    "linux",
    "bash",
    "webpack",
    "vite",
    "reactrouter",
    "redux" ,
 "zustand" ,
 "socketio" ,
 "vitest" ,
  "eslint" ,
];



function Habilidades() {
    return (
        <Flex gap={"6"} direction={"column"}>
            <Flex direction={"column"} gap={"4"}>
                <Text>
                    Frontend
                </Text>
                <Flex gap={"4"} >
                    {stackLenguajes?.map((item) =>
                        <Flex direction={"column"} key={item} align={"center"} gap={"4"}>
                            <Image
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}/${item}-original.svg`}
                                width={50}
                                height={50}
                                alt={item}
                            />
                            <Text>{item}</Text>
                        </Flex>
                    )}
                    {stackFrameworks?.map((item) =>
                        <Flex direction={"column"} key={item} align={"center"} gap={"4"}>
                            <Image
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}/${item}-original.svg`}
                                width={50}
                                height={50}
                                alt={item}
                            />
                            <Text>{item}</Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
            <Flex direction={"column"} gap={"4"}>
                <Text>
                    Backend
                </Text>
                <Flex gap={"4"} >
                    {backendIcons?.map((item) =>
                        <Flex direction={"column"} key={item} align={"center"} gap={"4"}>
                            <Image
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}/${item}-original.svg`}
                                width={50}
                                height={50}
                                alt={item}
                            />
                            <Text>{item}</Text>
                        </Flex>
                    )}
                </Flex>
            </Flex>
            <Flex direction={"column"} gap={"4"} wrap={"wrap"}>
                <Text>
                    Herramientas
                </Text>
                <Flex gap={"4"} wrap={"wrap"}>
                    {toolsIcons?.map((item) =>
                        <Flex direction={"column"} key={item} align={"center"}>
                            <Image
                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}/${item}-original.svg`}
                                width={50}
                                height={50}
                                alt={item}
                            />
                            <Text>{item}</Text>
                        </Flex>
                    )}
                    
                </Flex>
            </Flex>
        </Flex >
    )

}
export default Habilidades;
