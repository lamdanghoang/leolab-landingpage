import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Smartphone,
    Globe,
    Database,
    Shield,
    Cpu,
    Zap,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        icon: Database,
        title: "Blockchain Development",
        description:
            "Build secure, scalable blockchain solutions with smart contracts, DeFi platforms, and cryptocurrency applications.",
        technologies: ["Ethereum", "Solidity", "Web3", "NFTs"],
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
            "Create stunning iOS and Android applications with native performance and seamless user experiences.",
        technologies: ["React Native", "Flutter", "iOS", "Android"],
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Globe,
        title: "Web Development",
        description:
            "Develop modern web applications with cutting-edge technologies and responsive designs.",
        technologies: ["React", "Node.js", "TypeScript", "Next.js"],
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description:
            "Protect your digital assets with comprehensive security audits and penetration testing.",
        technologies: ["Security Audit", "Penetration Testing", "Compliance"],
        color: "from-red-500 to-orange-500",
    },
    {
        icon: Cpu,
        title: "AI & Machine Learning",
        description:
            "Leverage artificial intelligence to automate processes and gain insights from your data.",
        technologies: ["Python", "TensorFlow", "ML Models", "Data Science"],
        color: "from-indigo-500 to-purple-500",
    },
    {
        icon: Zap,
        title: "Cloud Solutions",
        description:
            "Scale your applications with robust cloud infrastructure and DevOps practices.",
        technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
        color: "from-yellow-500 to-orange-500",
    },
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We offer comprehensive technology solutions to help your
                        business thrive in the digital age
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2"
                        >
                            <CardHeader className="pb-4">
                                <div
                                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <service.icon className="h-8 w-8 text-white" />
                                </div>
                                <CardTitle className="text-xl mb-2">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map(
                                        (tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="secondary"
                                                className="text-xs"
                                            >
                                                {tech}
                                            </Badge>
                                        )
                                    )}
                                </div>

                                <div className="flex items-center text-blue-600 group-hover:text-blue-700 cursor-pointer pt-2">
                                    <span className="mr-2">Learn More</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
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
                </div>
            </div>
        </section>
    );
}
