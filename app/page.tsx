import Image from "next/image";
import { Flex, Text } from "@radix-ui/themes"
import Link from "next/link";

function Home() {
    const icons = [
        { name: "github", color: "yellow", link: "https://github.com/Richardpaz" },
        { name: "linkedin", color: "white", link: "https://www.linkedin.com/in/richard-rafael-paz-a87404197/" },
    ]
    return (
        <Flex direction={"column"} justify={"center"}>
            <Text size={"9"}>
                Hola soy Richard Paz
            </Text>
            <Text>
                Soy Analista de Sistemas con orientación en aplicaciones web modernas.
                Cuento con experiencia en desarrollo Full Stack, análisis funcional y diseño de sistemas, integrando frontend, backend y bases de datos.
            </Text>
            <Flex gap={"2"}>
                {icons?.map((icon) =>
                    <Link href={icon.link} target={"_blank"} key={icon.name}>
                        <Image
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon.name}/${icon.name}-original.svg`}
                            width={40}
                            height={40}
                            alt={icon.name}
                            className={"ri-home-line text-red-500"}
                        />
                    </Link>
                )
                }
            </Flex>
        </Flex>

    )
}
export default Home;