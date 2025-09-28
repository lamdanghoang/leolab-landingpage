"use client";

import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Twitter,
    Linkedin,
    Github,
    Send,
} from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button"; // Assuming your Button component is styled for social icons

export function Footer() {
    return (
        // Adjusted padding to match the compact feel of the image
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Two-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* LEFT COLUMN: Contact Info */}
                    <div className="space-y-6">
                        {/* Company Logo/Name (Kept from original for context, can be removed) */}
                        <div className="flex items-center mb-6">
                            <div className="w-5">
                                <Image
                                    src="/leolab-logo.png"
                                    alt="LeoLab logo"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <span className="ml-2 text-xl bg-gradient-to-r from-leolab-red to-leolab-orange bg-clip-text text-transparent font-bold">
                                LeoLab
                            </span>
                        </div>

                        {/* Location */}
                        <div className="flex items-start">
                            <MapPin className="w-5 h-5 mr-4 flex-shrink-0 text-white" />
                            <p className="text-gray-300 text-base">
                                Ho Chi Minh City
                                <br />
                                Vietnam
                            </p>
                        </div>

                        {/* Phone */}
                        {/* <div className="flex items-center">
                            <Phone className="w-5 h-5 mr-4 flex-shrink-0 text-white" />
                            <p className="text-gray-300 text-base">
                                +1 555 123456
                            </p>
                        </div> */}

                        {/* Email */}
                        <div className="flex items-center">
                            <Mail className="w-5 h-5 mr-4 flex-shrink-0 text-white" />
                            <a
                                href="mailto:nimpham@leofi.xyz"
                                className="text-blue-400 hover:text-blue-300 transition-colors text-base"
                            >
                                nimpham@leofi.xyz
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: About and Social Links */}
                    <div className="md:pl-12">
                        <h3 className="text-xl font-bold mb-6">About LeoLab</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Building the future of technology with innovative
                            blockchain solutions, AI workflow, mobile
                            applications, and cutting-edge software development.
                        </p>

                        {/* Social Media Buttons (Square, Dark background) */}
                        <div className="flex space-x-3">
                            {/* NOTE: You should adjust the Button styling (bg-gray-800) 
                                   to match the image's dark, square button style */}

                            <Button
                                onClick={() =>
                                    window.open("https://t.me/DatPQD", "_blank")
                                }
                                className="w-10 h-10 p-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md"
                            >
                                <Send className="w-6 h-6 text-white" />
                            </Button>

                            {/* <Button className="w-10 h-10 p-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md">
                                <Twitter className="w-6 h-6 text-white" />
                            </Button>

                            <Button className="w-10 h-10 p-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md">
                                <Linkedin className="w-6 h-6 text-white" />
                            </Button>

                            <Button className="w-10 h-10 p-2 bg-gray-800 hover:bg-gray-700 transition-colors rounded-md">
                                <Github className="w-6 h-6 text-white" />
                            </Button> */}
                        </div>
                    </div>
                </div>

                {/* Copyright/Bottom Section (Keeping it simple for now) */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <div className="text-gray-300 text-sm">
                        © 2025 LeoLab. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
