'use client'

const { default: ThemeProvider } = require("./ThemeProvider")

const Providers = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers;