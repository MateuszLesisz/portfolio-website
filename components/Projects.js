import SectionWrapper from "@/components/SectionWrapper";
import Heading from "@/components/Heading";
import data from "@/data/projects";
import Image from "next/image";

const Projects = () => {
    return (
        <SectionWrapper>
            <Heading>projects</Heading>
            {data.map((project) => (
                <div key={project.id} className="flex flex-grap gap-5 w-full lg:w=8/12 mb=10">
                    <div className="relative w-full md:w-[120px] h=[220px] md:h-20 rounded-lg overflow-hidden">
                        <Image src={project.image} fill className="w-full h-full" alt="project image"/>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-x1 font-bold text-zinc-700 dark:text-zinc-400 leading-[25px]">
                            {project.title}
                        </h2>
                        <p className="text-base font-semibold text-zinc-500 dark:text-zinc-400 mt-2"
                        >{project.description.length > 100 ? (
                            <span>{project.description.slice(0,100)}...</span>
                        ) : (
                            project.description
                        )}</p>
                    </div>
                </div>
            ))}
        </SectionWrapper>
    )
}
export default Projects;