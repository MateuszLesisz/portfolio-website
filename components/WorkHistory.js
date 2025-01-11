import SectionWrapper from "@/components/SectionWrapper";
import Heading from "@/components/Heading";
import data from "@/data/work";
import Image from "next/image";
import SkillComponent from "@/components/SkillComponent";

const WorkHistory = () => {
    return (
        <SectionWrapper>
            <Heading>
                work history
            </Heading>
            {data.map((work) => (
                <div className="mt-6 flex gap-x-6" key={work.id}>
                    {/* Company Logo */}
                    <div
                        className="relative w-[50px] h-[50px] rounded-full overflow-hidden border dark:border-zinc-700">
                        <Image
                            src={work.image}
                            fill
                            className="w-full h-full object-cover"
                            alt={`Icon for ${work.company}`}
                        />
                    </div>

                    {/* Job information */}
                    <div className="flex-1">
                        <h2 className="text-black dark:text-white capitalize font-bold text-base">
                            {work.role}
                        </h2>
                        <span className="capitalize text-sm font-bold text-zinc-500">
                            {work.company}
                        </span>
                        <div className="flex items-center gap-x-1">
                            <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]">
                                {work.type}
                            </span>
                            <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]"></span>
                            <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]">
                                {work.date}
                            </span>
                        </div>

                        {/* Skills */}
                        {work.skills && (
                            <div className="flex gap-2 flex-wrap my-2">
                                {work.skills.map((skill) => (
                                    <SkillComponent skill={skill} key={skill.id}/>
                                ))}
                            </div>
                        )}

                        {/* Projekty */}
                        {work.projects && (
                            <div className="mt-4">
                                <h3 className="text-black dark:text-white capitalize font-bold text-base">
                                    Projects:
                                </h3>
                                <div className="flex flex-col gap-4">
                                    {work.projects.map((project) => (
                                        <div key={project.id}>
                                            {/* Nazwa projektu */}
                                            <h4 className="text-black dark:text-white font-bold text-lg">
                                                {project.name}
                                            </h4>
                                            {/* Opis projektu */}
                                            <p className="text-black dark:text-zinc-400 text-sm mt-1">
                                                {project.name === "betterjobs.it" ? (
                                                    (() => {
                                                        const parts = project.description.split("betterjobs.it");
                                                        const lastPartIndex = parts.length - 1;

                                                        return (
                                                            <>
                                                                {parts.slice(0, lastPartIndex).join("betterjobs.it")}
                                                                <a
                                                                    href="https://betterjobs.it"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-blue-500 hover:underline"
                                                                >
                                                                    betterjobs.it
                                                                </a>
                                                                {parts[lastPartIndex]}
                                                            </>
                                                        );
                                                    })()
                                                ) : (
                                                    project.description
                                                )}
                                            </p>
                                            {/* Kluczowe odpowiedzialności */}
                                            {project.keyResponsibilities && (
                                                <div className="mt-4">
                                                    <h5 className="text-black dark:text-white font-bold text-sm mb-2">
                                                        Key Responsibilities:
                                                    </h5>
                                                    <ul className="list-disc list-inside text-black dark:text-zinc-400 text-sm space-y-2">
                                                        {project.keyResponsibilities[0].project.map((task, idx) => (
                                                            <li key={idx}>
                                                                {task.info}
                                                                {task.desc && (
                                                                    <ul className="list-none ml-4 space-y-2 mt-2">
                                                                        {task.desc.map((subTask, subIdx) => (
                                                                            <li key={subIdx}>
                                                        <span className="before:content-['-'] before:mr-2">
                                                            {subTask.info}
                                                        </span>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </SectionWrapper>
    );
};

export default WorkHistory;
