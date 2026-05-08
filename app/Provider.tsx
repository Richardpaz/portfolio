"use client"
import { Theme } from "@radix-ui/themes";
import "../app/globals.css"
import { HeaderComponent } from "./components/headerComponent"
import { useThemeStore } from "./store/theme.store";
function Provider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme)
  return (
    <Theme appearance={theme}>
      <div className="contenedor">
        <header className="header">
          <HeaderComponent />
        </header>
        <main className="main">{children}</main>
      </div>

    </Theme>

  )
}

export default Provider;