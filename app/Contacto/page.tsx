import { FormContacto } from "../components/FormContacto";
import { Flex ,Text} from "@radix-ui/themes";
function Contacto() {
    return (
        <Flex direction={"column"} gap={"4"}>
            <Text size={"6"}>Contacto</Text>
            <FormContacto />
        </Flex>
    )
}
export default Contacto;