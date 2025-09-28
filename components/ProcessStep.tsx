// components/ExecutionProcess/ProcessStep.tsx
import styles from "./execution-process.module.css";
import { IconType } from "react-icons";

interface ProcessStepProps {
    icon: IconType;
    title: string;
    description: string;
    isHovered: boolean;
    isEven: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
    icon: Icon,
    title,
    description,
    // isHovered,
    isEven,
}) => {
    return (
        <div
            className={`group flex items-center w-full relative ${
                isEven ? styles.even : styles.odd
            }`}
        >
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-md lg:w-[calc(50%-60px)]">
                <h3 className="text-xl mt-0 mb-2.5">{title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
            <div
                className="absolute left-1/2 -translate-x-1/2 z-10 w-25 h-25 rounded-full flex items-center justify-center
                bg-white border-2 border-dashed border-leolab-red text-leolab-red transition-all duration-300 ease-in-out
                group-hover:bg-leolab-red group-hover:text-white group-hover:border-solid group-hover:scale-110 group-hover:-translate-x-1/2"
            >
                <Icon size={50} />
            </div>
        </div>
    );
};

export default ProcessStep;
