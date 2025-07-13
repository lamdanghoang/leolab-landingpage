import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Globe,
    Smartphone,
    Zap,
    Blocks,
    CheckCircle,
    Clock,
    Award,
    Target,
} from "lucide-react";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-gray-900">
                                UNADA.
                            </span>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <Link
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                Home
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                Services
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                Metaverses
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                Careers
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                Blog
                            </Link>
                        </nav>
                        <Button className="bg-[#33d3d4] hover:bg-[#3dfeff] text-white">
                            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-white to-[#f7fcff]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-[#33d3d4] text-sm font-semibold tracking-wide uppercase mb-4">
                                A TRUSTED COMPANY
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Next-Gen Software Services to Businesses.
                            </h1>
                            <p className="text-gray-600 text-lg mb-8 max-w-lg">
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim.
                            </p>
                            <Button className="bg-[#33d3d4] hover:bg-[#3dfeff] text-white px-8 py-3 text-lg">
                                Get Started{" "}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <div className="flex space-x-4 mt-8">
                                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/placeholder.svg?height=500&width=500"
                                alt="Developer illustration"
                                width={500}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Companies */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-500 mb-8">
                        Trusted By 3,000+ Companies
                    </p>
                    <div className="flex justify-center items-center space-x-12 opacity-60">
                        <Image
                            src="/placeholder.svg?height=40&width=120"
                            alt="Spotify"
                            width={120}
                            height={40}
                        />
                        <Image
                            src="/placeholder.svg?height=40&width=120"
                            alt="Slack"
                            width={120}
                            height={40}
                        />
                        <Image
                            src="/placeholder.svg?height=40&width=120"
                            alt="Dropbox"
                            width={120}
                            height={40}
                        />
                        <Image
                            src="/placeholder.svg?height=40&width=120"
                            alt="Zoom"
                            width={120}
                            height={40}
                        />
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-[#f7fcff]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-[#c7edff] rounded-lg flex items-center justify-center mb-4">
                                    <Globe className="h-6 w-6 text-[#33d3d4]" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Web Development
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim.
                                </p>
                                <Link
                                    href="#"
                                    className="text-[#33d3d4] text-sm font-medium flex items-center"
                                >
                                    Learn More{" "}
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-[#d1f0ff] rounded-lg flex items-center justify-center mb-4">
                                    <Smartphone className="h-6 w-6 text-[#33d3d4]" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    App Development
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim.
                                </p>
                                <Link
                                    href="#"
                                    className="text-[#33d3d4] text-sm font-medium flex items-center"
                                >
                                    Learn More{" "}
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-[#c7edff] rounded-lg flex items-center justify-center mb-4">
                                    <Zap className="h-6 w-6 text-[#33d3d4]" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    AR/VR Development
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim.
                                </p>
                                <Link
                                    href="#"
                                    className="text-[#33d3d4] text-sm font-medium flex items-center"
                                >
                                    Learn More{" "}
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 bg-[#d1f0ff] rounded-lg flex items-center justify-center mb-4">
                                    <Blocks className="h-6 w-6 text-[#33d3d4]" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Blockchain Development
                                </h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim.
                                </p>
                                <Link
                                    href="#"
                                    className="text-[#33d3d4] text-sm font-medium flex items-center"
                                >
                                    Learn More{" "}
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* End-to-End Development */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        End-To-End Development Services
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                        Sometimes, we need to check the time, wondering when our
                        work or meeting will finish, without getting caught by
                        others.
                    </p>
                    <div className="relative">
                        <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Development team illustration"
                            width={600}
                            height={400}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-[#f7fcff]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-16">
                        Sometimes, we need to check the time, wondering when our
                        work or meeting will finish, without getting caught by
                        others.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Image
                                src="/placeholder.svg?height=400&width=500"
                                alt="Team working"
                                width={500}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#c7edff] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="h-6 w-6 text-[#33d3d4]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Attention to Details
                                    </h3>
                                    <p className="text-gray-600">
                                        Quality work with attention to every
                                        detail and requirement.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#d1f0ff] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Target className="h-6 w-6 text-[#33d3d4]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        A Plan for Success
                                    </h3>
                                    <p className="text-gray-600">
                                        Strategic planning and execution for
                                        guaranteed success.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#c7edff] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Clock className="h-6 w-6 text-[#33d3d4]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Meeting Deadlines
                                    </h3>
                                    <p className="text-gray-600">
                                        Always delivering projects on time,
                                        every time.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-[#d1f0ff] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Award className="h-6 w-6 text-[#33d3d4]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Award-Winning
                                    </h3>
                                    <p className="text-gray-600">
                                        Recognized excellence in software
                                        development services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Feedback */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
                        Feedback from our clients
                    </h2>
                    <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-16">
                        Our WORK speaks louder than our WORD. Find out how we
                        helped clients overcome challenges and succeed.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-white border border-l-4 border-l-[#33d3d4] shadow-sm">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            Jhony D
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            Client
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">
                                    "Aliqua id fugiat nostrud irure ex duis ea
                                    quis id quis ad et. Sunt qui esse pariatur
                                    duis deserunt mollit dolore cillum minim
                                    tempor enim. Elit aute irure tempor
                                    cupidatat incididunt sint deserunt ut
                                    voluptate aute id deserunt nisi."
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border border-l-4 border-l-[#33d3d4] shadow-sm">
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">
                                            Jhony D
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            Client
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">
                                    "Aliqua id fugiat nostrud irure ex duis ea
                                    quis id quis ad et. Sunt qui esse pariatur
                                    duis deserunt mollit dolore cillum minim
                                    tempor enim. Elit aute irure tempor
                                    cupidatat incididunt sint deserunt ut
                                    voluptate aute id deserunt nisi."
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
