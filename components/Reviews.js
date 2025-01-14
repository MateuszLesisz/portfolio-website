import SectionWrapper from "@/components/SectionWrapper";
import data from "@/data/reviews";
import Heading from "@/components/Heading";

const Reviews = () => {
    return (
        <SectionWrapper>
            <Heading>
                Testimonials
            </Heading>
            <h1 className="text-3xl md:text-5xl font-bold capitalize mt-5">
                what {" "}
                <strong className="text-violet-600 dark:text-zinc-400">
                    peaople say
                </strong>
            </h1>
            <p className="text-lg font-medium w-full lg:w-6/12 mb-10 mt-5]">I developed products that are more than pretty. I make them shippable and usable.</p>
        </SectionWrapper>
    )
}
export default Reviews;