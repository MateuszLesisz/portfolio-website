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
                    <div className="relative w-full md:w-[120px] pt-[56.25%] md:pt-0 md:h-20 rounded-lg overflow-hidden">
                        <Image src={project.image} fill className="w-full h-full absolute top-0 lef-0 bottom-0 right-0" alt="project image"/>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg md:text-x1 font-bold text-zinc-700 dark:text-zinc-400 leading-[25px]">
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