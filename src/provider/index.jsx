'use client'

import AuthProvider from "./AuthProvider";

const { default: ThemeProvider } = require("./ThemeProvider")

const Providers = ({ children }) => {
    return <ThemeProvider><AuthProvider>{children}</AuthProvider></ThemeProvider>
}

export default Providers;