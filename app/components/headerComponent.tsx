import { Flex, TabNav } from "@radix-ui/themes";
import Link from "next/link";

export function HeaderComponent() {
    return (
        <Flex >
            <TabNav.Root className="w-200 flex flex-row justify-around gap-20 align-middle items-center">
                <TabNav.Link asChild>
                    <Link href={"/"}>
                        Inicio
                    </Link>
                </TabNav.Link>
                <TabNav.Link asChild>
                    <Link href={"/Proyectos"}>
                        Proyectos
                    </Link>
                    </TabNav.Link>
                <TabNav.Link asChild>
                    <Link href={"/Habilidades"}>
                        Habilidades
                    </Link>
                </TabNav.Link>
                <TabNav.Link asChild>
                    <Link href={"/Contacto"}>
                        Contacto
                    </Link>
                    </TabNav.Link>
            </TabNav.Root>
        </Flex>
    )
}