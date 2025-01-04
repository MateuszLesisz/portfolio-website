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
                    <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border
                      dark:border-zinc-700">
                        <Image src={work.image}
                               fill
                               className="w-full h-full object-covera"
                               alt={`Icon for ${work.name}` }/>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-black dark:text-white capitalize font-bold text-base">
                            {work.role}
                        </h2>
                        <span className="capitalize text-sm font-bold text-zinc-500">
                            {work.company}
                        </span>
                        <div className="flex items-center gap-x-1 ">
                            <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]">
                                {work.type}
                            </span>
                            <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]">
                                -
                            </span>
                            <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]">
                                {work.date}
                            </span>
                        </div>
                        {work.skills && <div className="flex gap-2 flex-wrap my-2">
                            {work?.skills?.map(skill => (
                                <SkillComponent skill={skill} key={skill.id}/>
                            ))}
                        </div>}
                    </div>
                </div>
            ))}
        </SectionWrapper>
    )
}
export default WorkHistory;