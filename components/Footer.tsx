import { Separator } from "@/components/ui/separator";

const footerSections = [
    {
        title: "Services",
        links: [
            "Blockchain Development",
            "Mobile App Development",
            "Web Development",
            "AI & Machine Learning",
            "Cloud Solutions",
            "Cybersecurity",
        ],
    },
    {
        title: "Company",
        links: [
            "About Us",
            "Our Team",
            "Careers",
            "Blog",
            "Case Studies",
            "Contact",
        ],
    },
    {
        title: "Resources",
        links: [
            "Documentation",
            "API Reference",
            "Support Center",
            "Community",
            "Tutorials",
            "Whitepapers",
        ],
    },
    {
        title: "Legal",
        links: [
            "Privacy Policy",
            "Terms of Service",
            "Cookie Policy",
            "GDPR Compliance",
            "Security",
            "Disclaimer",
        ],
    },
];

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center mb-6">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">S</span>
                            </div>
                            <span className="ml-2 text-xl font-bold">
                                SoluLab
                            </span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Building the future of technology with innovative
                            blockchain solutions, mobile applications, and
                            cutting-edge software development.
                        </p>

                        {/* Social Media */}
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                                <span className="text-white font-bold text-sm">
                                    Li
                                </span>
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-400 transition-colors">
                                <span className="text-white font-bold text-sm">
                                    Tw
                                </span>
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                                <span className="text-white font-bold text-sm">
                                    Gh
                                </span>
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-red-600 transition-colors">
                                <span className="text-white font-bold text-sm">
                                    Yt
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Sections */}
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white transition-colors text-sm"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator className="my-8 bg-gray-800" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-gray-300 text-sm">
                        © 2024 SoluLab. All rights reserved.
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-300">
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                        >
                            Cookie Settings
                        </a>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-300">
                        <div>
                            <h4 className="font-semibold text-white mb-2">
                                Headquarters
                            </h4>
                            <p>
                                123 Tech Street
                                <br />
                                Silicon Valley, CA 94043
                                <br />
                                United States
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-2">
                                Development Centers
                            </h4>
                            <p>
                                London, UK
                                <br />
                                Toronto, Canada
                                <br />
                                Mumbai, India
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-2">
                                Certifications
                            </h4>
                            <p>
                                ISO 27001 Certified
                                <br />
                                SOC 2 Type II
                                <br />
                                GDPR Compliant
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
