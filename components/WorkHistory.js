import SectionWrapper from "@/components/SectionWrapper";
import Heading from "@/components/Heading";
import data from "@/data/work";
import SkillComponent from "@/components/SkillComponent";
import CompanyLogo from "@/components/work_history_components/CompanyLogo";
import JobInformation from "@/components/work_history_components/JobInformation";
import ProjectsSection from "@/components/work_history_components/Projects";
import Skills from "@/components/Skills";

const WorkHistory = () => {
    return (
        <SectionWrapper>
            <Heading>work history</Heading>
            {data.map((work) => (
                <div className="mt-6 flex gap-x-6" key={work.id}>
                    <CompanyLogo src={work.image} alt={`Icon for ${work.company}`}/>
                    <div className="flex-1">
                        <JobInformation role={work.role} company={work.company} type={work.type} date={work.date}/>
                        <Skills skills={work.skills} className="gap-2 flex-wrap my-2" />
                        <ProjectsSection projects={work.projects}/>
                    </div>
                </div>
            ))}
        </SectionWrapper>
    );
};

export default WorkHistory;
