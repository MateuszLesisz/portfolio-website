import SkillComponent from "@/components/SkillComponent";

const Skills = ({ skills, className }) => {
    if (!skills || skills.length === 0) {
        return null;
    }

    return (
        <div className={`flex gap-2 flex-wrap my-2 ${className}`}>
            {skills.map(skill => (
                <SkillComponent skill={skill} key={skill.id} />
            ))}
        </div>
    );
};

export default Skills;
