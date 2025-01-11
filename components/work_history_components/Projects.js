import ProjectDescription from "@/components/work_history_components/ProjectDescription";
import KeyResponsibilities from "@/components/work_history_components/KeyResponsibilities";
import ProjectName from "@/components/work_history_components/ProjectName";

const ProjectsSection = ({projects}) => {
    if (!projects || projects.length === 0) {
        return null;
    }

    return (
        <div className="mt-4">
            <h3 className="text-black dark:text-white capitalize font-bold text-base">
                Projects:
            </h3>
            <div className="flex flex-col gap-4">
                {projects.map((project) => (
                    <div key={project.id}>
                        <ProjectName name={project.name}/>
                        <ProjectDescription name={project.name} description={project.description}/>
                        <KeyResponsibilities keyResponsibilities={project.keyResponsibilities}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;
