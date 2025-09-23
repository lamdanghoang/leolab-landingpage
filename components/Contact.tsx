import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        content: "hello@solulab.com",
        description: "Send us an email anytime",
    },
    {
        icon: Phone,
        title: "Call Us",
        content: "+1 (555) 123-4567",
        description: "Mon-Fri from 8am to 5pm",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        content: "123 Tech Street, Silicon Valley, CA",
        description: "Come say hello at our office",
    },
    {
        icon: Clock,
        title: "Working Hours",
        content: "Mon-Fri: 8am - 6pm",
        description: "Weekend support available",
    },
];

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready to start your next project? We&apos;d love to hear
                        from you. Send us a message and we&apos;ll respond as
                        soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Contact Information
                            </h3>
                        </div>

                        {contactInfo.map((info, index) => (
                            <Card key={index} className="border-0 shadow-sm">
                                <CardContent className="p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <info.icon className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">
                                                {info.title}
                                            </h4>
                                            <p className="text-gray-900 mb-1">
                                                {info.content}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {info.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}

                        {/* Social Links */}
                        <Card className="border-0 shadow-sm">
                            <CardContent className="p-6">
                                <h4 className="font-semibold text-gray-900 mb-4">
                                    Follow Us
                                </h4>
                                <div className="flex space-x-4">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                                        <span className="text-white font-bold text-sm">
                                            Li
                                        </span>
                                    </div>
                                    <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                                        <span className="text-white font-bold text-sm">
                                            Tw
                                        </span>
                                    </div>
                                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-900 transition-colors">
                                        <span className="text-white font-bold text-sm">
                                            Gh
                                        </span>
                                    </div>
                                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                                        <span className="text-white font-bold text-sm">
                                            Yt
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="border-0 shadow-sm">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Send us a message
                                </h3>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 mb-2">
                                                First Name
                                            </label>
                                            <Input
                                                placeholder="John"
                                                className="w-full"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">
                                                Last Name
                                            </label>
                                            <Input
                                                placeholder="Doe"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 mb-2">
                                                Email
                                            </label>
                                            <Input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 mb-2">
                                                Phone
                                            </label>
                                            <Input
                                                placeholder="+1 (555) 123-4567"
                                                className="w-full"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">
                                            Project Type
                                        </label>
                                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>Select a service</option>
                                            <option>
                                                Blockchain Development
                                            </option>
                                            <option>
                                                Mobile App Development
                                            </option>
                                            <option>Web Development</option>
                                            <option>
                                                AI & Machine Learning
                                            </option>
                                            <option>Cloud Solutions</option>
                                            <option>Cybersecurity</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">
                                            Budget Range
                                        </label>
                                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>Select budget range</option>
                                            <option>$10,000 - $25,000</option>
                                            <option>$25,000 - $50,000</option>
                                            <option>$50,000 - $100,000</option>
                                            <option>$100,000+</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <Textarea
                                            placeholder="Tell us about your project..."
                                            rows={6}
                                            className="w-full"
                                        />
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full bg-blue-600 hover:bg-blue-700"
                                    >
                                        <Send className="mr-2 h-5 w-5" />
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
