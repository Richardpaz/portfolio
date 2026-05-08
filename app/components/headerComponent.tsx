"use client"
import { Flex, TabNav, Text } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Half2Icon } from "@radix-ui/react-icons"
import { useThemeStore } from "../store/theme.store"
export function HeaderComponent() {
    const pathname = usePathname();
    const theme = useThemeStore(state => state.theme)
    
    const handleTheme = () => {
        if (theme === "light") {
            useThemeStore.setState({ theme: "dark" })
        } else {
            useThemeStore.setState({ theme: "light" })
        }
    }


    return (
        <Flex align={"center"}>
            <TabNav.Root className="w-200 flex flex-row justify-around gap-20 align-middle items-center">
                <TabNav.Link asChild active={pathname === "/"}>
                    <Link href={"/"}>
                        <Text size={"4"} weight={"medium"} >Inicio
                        </Text>
                    </Link>
                </TabNav.Link>
                <TabNav.Link asChild active={pathname === "/Proyectos"}>
                    <Link href={"/Proyectos"}>
                        <Text size={"4"} weight={"medium"} >Proyectos</Text>
                    </Link>
                </TabNav.Link>
                <TabNav.Link asChild active={pathname === "/Habilidades"}>
                    <Link href={"/Habilidades"}>
                        <Text size={"4"} weight={"medium"} >Habilidades</Text>
                    </Link>
                </TabNav.Link>
                <TabNav.Link asChild active={pathname === "/Contacto"}>
                    <Link href={"/Contacto"}>
                        <Text size={"4"} weight={"medium"} >Contactos</Text>
                    </Link>
                </TabNav.Link>
            </TabNav.Root>
            <Half2Icon onClick={handleTheme} />
        </Flex>
    )
}