import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function Hero() {
    return (
        <section
            id="home"
            className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                We&apos;re Hiring! Join Our Team
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                                Building the
                                <span className="text-blue-600"> Future </span>
                                of Technology
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                We create innovative blockchain solutions,
                                mobile apps, and cutting-edge software that
                                transform businesses and drive digital
                                innovation.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                Start Your Project
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="group"
                            >
                                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                                Watch Demo
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                            <div>
                                <div className="text-3xl font-bold text-gray-900">
                                    500+
                                </div>
                                <div className="text-gray-600">
                                    Projects Delivered
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gray-900">
                                    98%
                                </div>
                                <div className="text-gray-600">
                                    Client Satisfaction
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gray-900">
                                    150+
                                </div>
                                <div className="text-gray-600">
                                    Team Members
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1581952373261-be0170bb0aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaGVybyUyMGJhbm5lcnxlbnwxfHx8fDE3NTg1OTA4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Modern technology workspace"
                                className="w-full h-auto rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Background decoration */}
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-4 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
