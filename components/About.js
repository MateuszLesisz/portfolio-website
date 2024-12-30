import Heading from "@/components/Heading";
import data from "@/data/about";
import SectionWrapper from "@/components/SectionWrapper";

const About = () => {
    return (
        <SectionWrapper>
            <Heading></Heading>
            <h3 className="text-xl md:text-2x1 font-semibold capitalize text-black dark:text-white">
                {data.heading} 👋</h3>
            <p className="mt-3 text-base md:text-lg font-semibold text-black dark:text-zinc-400">
                {data.bio}</p>
        </SectionWrapper>
    );
};
export default About;