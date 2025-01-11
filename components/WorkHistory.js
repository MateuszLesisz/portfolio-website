import SectionWrapper from "@/components/SectionWrapper";
import Heading from "@/components/Heading";
import data from "@/data/work";
import SkillComponent from "@/components/SkillComponent";
import CompanyLogo from "@/components/work_history_components/CompanyLogo";
import JobInformation from "@/components/work_history_components/JobInformation";
import KeyResponsibilities from "@/components/work_history_components/KeyResponsibilities";
import ProjectDescription from "@/components/work_history_components/ProjectDescription";

const WorkHistory = () => {
    return (
        <SectionWrapper>
            <Heading>
                work history
            </Heading>
            {data.map((work) => (
                <div className="mt-6 flex gap-x-6" key={work.id}>

                    {/* Company Logo */}
                    <CompanyLogo
                        src={work.image}
                        alt={`Icon for ${work.company}`}
                    />

                    {/* Job information */}
                    <div className="flex-1">
                        <JobInformation
                            role={work.role}
                            company={work.company}
                            type={work.type}
                            date={work.date}
                        />

                        {/* Skills */}
                        {work.skills && (
                            <div className="flex gap-2 flex-wrap my-2">
                                {work.skills.map((skill) => (
                                    <SkillComponent skill={skill} key={skill.id}/>
                                ))}
                            </div>
                        )}

                        {/* Projects */}
                        {work.projects && (
                            <div className="mt-4">
                                <h3 className="text-black dark:text-white capitalize font-bold text-base">
                                    Projects:
                                </h3>
                                <div className="flex flex-col gap-4">
                                    {work.projects.map((project) => (
                                        <div key={project.id}>
                                            {/* Projects name */}
                                            <h4 className="text-black dark:text-white font-bold text-lg">
                                                {project.name}
                                            </h4>
                                            {/* Projects desc */}
                                                <ProjectDescription name={project.name} description={project.description} />
                                            {/* Key responsibilities */}
                                            {project.keyResponsibilities && (
                                                <KeyResponsibilities keyResponsibilities={project.keyResponsibilities} />
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
