import Heading from "@/components/Heading";
import SectionWrapper from "@/components/SectionWrapper";
import data from "@/data/skills";
import SkillComponent from "@/components/SkillComponent";

const Skills = () => {
    return (
        <SectionWrapper>
        <Heading>Skills</Heading>
            <div className="flex flex-wrap items-center gap-5">
                {data.map(skill => (
                    <SkillComponent skill={skill} key={skill.id}/>
                ))}
            </div>
        </SectionWrapper>
    )
}
export default Skills;