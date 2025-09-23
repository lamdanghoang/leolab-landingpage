import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const projects = [
    {
        title: "DeFi Trading Platform",
        description:
            "A comprehensive decentralized finance platform enabling secure cryptocurrency trading with advanced analytics and liquidity pools.",
        image: "https://images.unsplash.com/photo-1565882694798-4c9d004e65b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwZGV2ZWxvcG1lbnQlMjB0ZWFtfGVufDF8fHx8MTc1ODY0ODU5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["Solidity", "React", "Web3.js", "Node.js"],
        category: "Blockchain",
        status: "Live",
    },
    {
        title: "Smart Fitness Mobile App",
        description:
            "AI-powered fitness application with personalized workout plans, nutrition tracking, and social features for fitness enthusiasts.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTg1ODU3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["React Native", "TensorFlow", "Firebase", "Python"],
        category: "Mobile App",
        status: "In Development",
    },
    {
        title: "E-commerce Analytics Dashboard",
        description:
            "Real-time analytics platform for e-commerce businesses with advanced reporting, inventory management, and sales forecasting.",
        image: "https://images.unsplash.com/photo-1581952373261-be0170bb0aaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaGVybyUyMGJhbm5lcnxlbnwxfHx8fDE3NTg1OTA4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
        category: "Web Platform",
        status: "Live",
    },
    {
        title: "NFT Marketplace",
        description:
            "Full-featured NFT marketplace with minting, trading, and auction capabilities built on Ethereum blockchain.",
        image: "https://images.unsplash.com/photo-1643881079052-11e752e3ae16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwb2ZmaWNlfGVufDF8fHx8MTc1ODY0ODU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["Solidity", "IPFS", "React", "Ethers.js"],
        category: "Blockchain",
        status: "Live",
    },
    {
        title: "Telemedicine Platform",
        description:
            "Secure healthcare platform connecting patients with doctors through video consultations and health monitoring tools.",
        image: "https://images.unsplash.com/photo-1565882694798-4c9d004e65b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwZGV2ZWxvcG1lbnQlMjB0ZWFtfGVufDF8fHx8MTc1ODY0ODU5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["React", "Node.js", "WebRTC", "MongoDB"],
        category: "Healthcare",
        status: "Beta",
    },
    {
        title: "Supply Chain Tracker",
        description:
            "Blockchain-based supply chain management system providing transparency and traceability for global logistics.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTg1ODU3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        technologies: ["Hyperledger", "Vue.js", "Docker", "Kubernetes"],
        category: "Enterprise",
        status: "Live",
    },
];

const categories = [
    "All",
    "Blockchain",
    "Mobile App",
    "Web Platform",
    "Healthcare",
    "Enterprise",
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Portfolio
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Explore our latest projects and see how we&apos;ve
                        helped businesses transform their digital presence
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map((category, index) => (
                            <Button
                                key={index}
                                variant={index === 0 ? "default" : "outline"}
                                size="sm"
                                className={
                                    index === 0
                                        ? "bg-blue-600 hover:bg-blue-700"
                                        : ""
                                }
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="relative overflow-hidden">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 right-4">
                                    <Badge
                                        variant={
                                            project.status === "Live"
                                                ? "default"
                                                : project.status === "Beta"
                                                ? "secondary"
                                                : "outline"
                                        }
                                        className={
                                            project.status === "Live"
                                                ? "bg-green-500"
                                                : ""
                                        }
                                    >
                                        {project.status}
                                    </Badge>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <Badge
                                        variant="outline"
                                        className="bg-white/90"
                                    >
                                        {project.category}
                                    </Badge>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies
                                        .slice(0, 3)
                                        .map((tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="secondary"
                                                className="text-xs"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    {project.technologies.length > 3 && (
                                        <Badge
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            +{project.technologies.length - 3}
                                        </Badge>
                                    )}
                                </div>

                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="flex-1"
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2" />
                                        View Live
                                    </Button>
                                    <Button size="sm" variant="outline">
                                        <Github className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" variant="outline">
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
}
