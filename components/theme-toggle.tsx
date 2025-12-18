"use client"

import * as React from "react"
import { IconSun, IconMoon } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon-sm" className="w-8 h-8 rounded-full border border-border/50">
                <span className="sr-only">Toggle theme</span>
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="icon-sm"
            className="w-8 h-8 rounded-full border border-border/50"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <IconSun className="h-4 w-4 text-orange-400" />
            ) : (
                <IconMoon className="h-4 w-4 text-navy-900" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
