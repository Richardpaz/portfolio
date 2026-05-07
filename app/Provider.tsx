import { Theme } from "@radix-ui/themes";
import "../app/globals.css"
import { HeaderComponent } from "./components/headerComponent"
function Provider({ children }: { children: React.ReactNode }) {
  return (
    <Theme appearance="dark">
      <div className="contenedor">
        <header className="header">
          <HeaderComponent />
        </header>
        <main className="main">{children}</main>
        <footer className="footer">footer</footer>
      </div>

    </Theme>

  )
}

export default Provider;