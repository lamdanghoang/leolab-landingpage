import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Globe } from "lucide-react";

const achievements = [
    {
        icon: Award,
        number: "10+",
        label: "Years Experience",
        description: "Leading the industry with proven expertise",
    },
    {
        icon: Users,
        number: "500+",
        label: "Happy Clients",
        description: "Trusted by businesses worldwide",
    },
    {
        icon: Globe,
        number: "50+",
        label: "Countries Served",
        description: "Global reach with local expertise",
    },
];

const features = [
    "Agile development methodology",
    "24/7 technical support",
    "End-to-end project management",
    "Quality assurance testing",
    "Post-launch maintenance",
    "Scalable architecture design",
];

export function About() {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold text-gray-900">
                                About SoluLab
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                We are a leading technology company specializing
                                in blockchain development, mobile applications,
                                and innovative software solutions that drive
                                business growth.
                            </p>
                        </div>

                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            Contact Us
                        </Button>
                    </div>

                    {/* Image and Stats */}
                    <div className="space-y-8">
                        <div className="relative">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1643881079052-11e752e3ae16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwb2ZmaWNlfGVufDF8fHx8MTc1ODY0ODU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Our development team at work"
                                className="w-full h-auto rounded-lg shadow-lg"
                            />

                            {/* Floating card */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <CheckCircle className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">
                                            ISO Certified
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            Quality Management
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Achievement Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <achievement.icon className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 mb-1">
                                        {achievement.number}
                                    </div>
                                    <div className="font-semibold text-gray-700 mb-1">
                                        {achievement.label}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {achievement.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
