"use client";

import Image from "next/image";
import classNames from "classnames";
import { useTheme } from "next-themes";

const SkillComponent = ({ skill }) => {
    const { theme } = useTheme();
    const isDarkModeIcon = ["kafka", "gradle", "mysql", "postman", "github", "postgres"].includes(skill.name) && theme === "dark";

    return (
        <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2">
            <div
                className={classNames("relative w-[25px] h-[25px]")}
                style={{filter: isDarkModeIcon ? "invert(1)" : "none",}}>
                <Image src={skill.image} fill className="w-full h-full object-cover" alt={`Icon for ${skill.name}`}/>
            </div>
            <span className="text-zinc-700 dark:text-white capitalize text-sm md:text-base font-bold">
                {skill.name}
            </span>
        </div>
    );
};

export default SkillComponent;
