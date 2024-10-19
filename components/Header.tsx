"use client";

import { useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (
        <header className="border-b sticky top-0 bg-background z-10">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    InterviewAI
                </Link>
                <nav className="space-x-4 flex items-center">
                    <Link
                        href="#features"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Features
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        How it works
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-sm font-medium hover:text-primary transition-colors"
                    >
                        Pricing
                    </Link>
                    <div className="flex items-center space-x-2">
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Switch
                            id="dark-mode"
                            checked={isDarkMode}
                            onCheckedChange={toggleDarkMode}
                        />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <Label htmlFor="dark-mode" className="sr-only">
                            Toggle dark mode
                        </Label>
                    </div>
                </nav>
            </div>
        </header>
    );
}
