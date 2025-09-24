import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Globe, Database, Shield, Cpu, Zap } from "lucide-react";

const services = [
    {
        icon: Database,
        title: "Blockchain Development",
        description:
            "Build secure, scalable blockchain solutions with smart contracts, DeFi platforms, and cryptocurrency applications.",
        technologies: ["Ethereum", "Solidity", "Web3", "NFTs"],
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description:
            "Create stunning iOS and Android applications with native performance and seamless user experiences.",
        technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
        icon: Globe,
        title: "Web Development",
        description:
            "Develop modern web applications with cutting-edge technologies and responsive designs.",
        technologies: ["React", "Node.js", "TypeScript", "Next.js"],
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description:
            "Protect your digital assets with comprehensive security audits and penetration testing.",
        technologies: ["Security Audit", "Penetration Testing", "Compliance"],
    },
    {
        icon: Cpu,
        title: "AI & Machine Learning",
        description:
            "Leverage artificial intelligence to automate processes and gain insights from your data.",
        technologies: ["Python", "TensorFlow", "ML Models", "Data Science"],
    },
    {
        icon: Zap,
        title: "Cloud Solutions",
        description:
            "Scale your applications with robust cloud infrastructure and DevOps practices.",
        technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
    },
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Unlock the Future of Tomorrow With Our Comprehensive
                        Services
                    </h2>
                    <div className="w-40 h-0.5 bg-red-500 mx-auto mt-2 mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        We offer comprehensive technology solutions to help your
                        business thrive in the digital age
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="group hover:bg-red-500 hover:shadow-xl transition-all duration-300 border shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:-translate-y-2"
                        >
                            <CardHeader className="pb-4 flex flex-col items-center justify-center">
                                <div
                                    className={`w-16 h-16 rounded-xl bg-red-500 group-hover:bg-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <service.icon className="h-8 w-8 text-white group-hover:text-red-500" />
                                </div>
                                <CardTitle className="text-xl mb-2 group-hover:text-white">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-800 leading-relaxed text-center group-hover:text-white">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.map(
                                        (tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="secondary"
                                                className="text-xs group-hover:text-red-500 group-hover:bg-white"
                                            >
                                                {tech}
                                            </Badge>
                                        )
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
