"use client";

import { useState } from "react";
import ProcessStep from "./ProcessStep";
import { FaFlask, FaClipboardList, FaCode, FaVial } from "react-icons/fa";

const processData = [
    {
        icon: FaFlask,
        title: "Discovery Workshop",
        description:
            "Here, we understand your business, goals, pain points and priorities. These multiple brainstorming sessions help us to map out the existing workflows and your future goals.",
    },
    {
        icon: FaClipboardList,
        title: "Strategy and Solution Design",
        description:
            "At this stage, once we gather your requirements in a whiteboard session, we begin designing, prototyping, and user testing your platform or product.",
    },
    {
        icon: FaCode,
        title: "Development",
        description:
            "Programming and coding based on the designs approved by you takes place in this stage. Our development lifecycle consists of 3-stages: Alpha phase, Beta phase and Release phase.",
    },
    {
        icon: FaVial,
        title: "Testing and QA",
        description:
            "We continue our data-derived validation process, carry out in-depth QA testing, for each release of your product or platform to ensure that the final product, that is ready for the market.",
    },
];

export const ExecutionProcess: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(1);

    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Our Execution Process
                    </h2>
                    <div className="w-40 h-0.5 bg-leolab-red mx-auto mt-2 mb-4"></div>
                </div>
                <div className="relative flex flex-col gap-2">
                    {processData.map((item, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(1)}
                        >
                            <ProcessStep
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                isHovered={hoveredIndex === index}
                                isEven={index % 2 === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
