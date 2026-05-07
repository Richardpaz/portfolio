import Provider from "./Provider";
import "@radix-ui/themes/styles.css";
import "../app/globals.css"
export const viewport = {
  width: "device-width",
  initialScale: 1
}
function Rootlayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
       <Provider>
        {children}
       </Provider>
      </body>
    </html >
  )
}

export default Rootlayout;