"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">S</span>
                            </div>
                            <span className="ml-2 text-xl font-bold text-gray-900">
                                SoluLab
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a
                            href="#home"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#services"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Services
                        </a>
                        <a
                            href="#about"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#portfolio"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Portfolio
                        </a>
                        <a
                            href="#team"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Team
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                            <a
                                href="#home"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                            >
                                Home
                            </a>
                            <a
                                href="#services"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                            >
                                Services
                            </a>
                            <a
                                href="#about"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                            >
                                About
                            </a>
                            <a
                                href="#portfolio"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                            >
                                Portfolio
                            </a>
                            <a
                                href="#team"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                            >
                                Team
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                            >
                                Contact
                            </a>
                            <div className="px-3 py-2">
                                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
