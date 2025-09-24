import { Button } from "./ui/button";

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
                                <span className="bg-gradient-to-r from-leolab-red to-leolab-orange bg-clip-text text-transparent font-bold">
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
                            className="px7 py-2.5 bg-leolab-red text-white hover:bg-white text-base font-bold hover:text-leolab-red border-2 border-leolab-red rounded-4xl uppercase"
                        >
                            Consult Our Experts
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
