import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function Hero() {
    return (
        <section id="home" className="hero pt-20 pb-20 relative">
            {/* Overlay background */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-3xl font-bold text-white leading-tight">
                                Your Partner in
                                <span className="text-blue-600">
                                    {" "}
                                    Blockchain & AI workflow{" "}
                                </span>
                                for Enterprise Development
                            </h1>
                            <p className="text-lg text-gray-50 font-medium leading-relaxed">
                                We create innovative blockchain solutions,
                                mobile apps, and cutting-edge software that
                                transform businesses and drive digital
                                innovation.
                            </p>
                        </div>

                        <Button
                            size="lg"
                            className="px7 py-2.5 bg-red-600 text-white hover:bg-white text-base font-bold hover:text-red-600 border-2 border-red-600 rounded-4xl uppercase"
                        >
                            Consult Our Experts
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
