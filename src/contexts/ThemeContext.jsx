import { createContext, useState, useContext, useEffect } from "react"

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "system")

    useEffect(() => {
        const root = document.documentElement

        if (theme === "system") {
            delete root.dataset.theme
            localStorage.removeItem("theme")
        } else {
            root.dataset.theme = theme
            localStorage.setItem("theme", theme)
        }
    }, [theme])

    const value = { theme, setTheme }

    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}