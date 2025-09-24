"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigations = [
    {
        label: "About us",
        href: "#about",
    },
    {
        label: "Services",
        href: "#services",
    },
    {
        label: "Hire Developers",
        href: "#hire",
    },
    {
        label: "Industries",
        href: "#industries",
    },
    {
        label: "Case Studies",
        href: "#case",
    },
    {
        label: "Blog",
        href: "#blog",
    },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            <div className="w-8">
                                <Image
                                    src="/leolab-logo.png"
                                    alt="LeoLab logo"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <span className="ml-2 text-3xl bg-gradient-to-r from-leolab-red to-leolab-orange bg-clip-text text-transparent font-bold">
                                LeoLab
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex">
                        {navigations.map((nav, i) => (
                            <Link
                                key={i}
                                href={nav.href}
                                className="px-4 text-lg text-black font-semibold hover:text-red-600 transition-colors"
                            >
                                {nav.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <Button className="px-6 bg-transparent text-red-600 border-2 border-red-600 text-base hover:bg-red-600 hover:text-white rounded-none">
                            Inquire
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
                            {navigations.map((nav, i) => (
                                <Link
                                    key={i}
                                    href={nav.href}
                                    className="block px-4 text-lg text-black font-semibold hover:text-red-600 transition-colors"
                                >
                                    {nav.label}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <Button className="w-full px-6 bg-transparent text-red-600 border-2 border-red-600 text-base hover:bg-red-600 hover:text-white rounded-none">
                                    Inquire
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
