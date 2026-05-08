import Provider from "./Provider";
import "@radix-ui/themes/styles.css";
import {Roboto} from "next/font/google"
import "../app/globals.css"
export const viewport = {
  width: "device-width",
  initialScale: 1
}
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap"
})


function Rootlayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={roboto.className}>
       <Provider>
        {children}
       </Provider>
      </body>
    </html >
  )
}

export default Rootlayout;