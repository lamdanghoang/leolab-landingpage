import { Card, CardHeader, CardTitle } from "./ui/card";
import {
    Fuel,
    Landmark,
    Scale,
    TvMinimalPlay,
    HandCoins,
    ShoppingCart,
    MapPinHouse,
    School,
    HeartPulse,
    Container,
} from "lucide-react";

const industires = [
    {
        icon: Container,
        title: "Supply Chain",
    },
    {
        icon: HeartPulse,
        title: "Healthcare",
    },
    {
        icon: School,
        title: "Education",
    },
    {
        icon: MapPinHouse,
        title: "Real Estate",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce",
    },
    {
        icon: HandCoins,
        title: "Finance",
    },
    {
        icon: TvMinimalPlay,
        title: "Entertainment",
    },
    {
        icon: Scale,
        title: "Legal",
    },
    {
        icon: Landmark,
        title: "Government",
    },
    {
        icon: Fuel,
        title: "Oil & Gas",
    },
];

export function Industries() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-semibold text-gray-900">
                        Industries <span className="font-bold">We serve</span>
                    </h2>
                    <div className="w-40 h-0.5 bg-red-500 mx-auto mt-2 mb-4"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5">
                    {industires.map((industry, index) => (
                        <Card
                            key={index}
                            className="p-7.5 group hover:bg-red-500 shadow-none transition-all duration-300 border-none"
                        >
                            <CardHeader className="p-0 flex flex-col items-center justify-center">
                                <industry.icon
                                    className="h-15 w-15 text-red-500 group-hover:text-white mb-4"
                                    strokeWidth={1}
                                />
                                <CardTitle className="text-sm font-bold mb-2 group-hover:text-white">
                                    {industry.title}
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                {/* <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Let&apos;s discuss your project and create something
                            amazing together. Our team is ready to bring your
                            vision to life.
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Start Your Project
                        </button>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
