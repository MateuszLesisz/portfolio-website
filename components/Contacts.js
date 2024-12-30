import Heading from "@/components/Heading";
import data from "@/data/contacts";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contacts = () => {
    const formatLabel = (label) => {
        const words = label.split(" ");
        if (words.length > 1) {
            return (
                <>
                    <span className="capitalize">{words[0]}</span>{" "}
                    <span className="uppercase">{words[1]}</span>
                </>
            );
        }
        return <span className="capitalize">{label}</span>;
    };
    return (
        <section className="border-t py-7 border-zinc-100 dark:border-zinc-800">
            <Heading>contacts</Heading>
            <div className="flex flex-wrap items-center gap-5">
                {data.map(contact => (
                    contact.name === 'cv' ? (
                        <a
                            href={contact.link}
                            key={contact.id}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2">
                            <FaRegUserCircle size={18} className="text-black dark:text-white" />
                            <span className="text-base capitalize text-zinc-700 dark:text-white font-bold">
                                {formatLabel(contact.label)}
                            </span>
                        </a>
                    ) : contact.name === 'phone' ? (
                        <div
                            key={contact.id}
                            className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2">
                            <FaPhone size={18} className="text-black dark:text-white" />
                            <span className="text-base capitalize text-zinc-700 dark:text-white font-bold">
                                {contact.label}
                            </span>
                        </div>
                    ) : (
                        <Link
                            href={contact.link}
                            key={contact.id}
                            target="_blank"
                            className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-800 px-3 py-2">
                            {contact.name === 'github' && <FaGithub size={18} className="text-black dark:text-white" />}
                            {contact.name === 'linkedin' && <FaLinkedin size={18} className="text-[#0a66c2] dark:text-white" />}
                            {contact.name === 'email' && <MdEmail size={18} className="text-black dark:text-white" />}
                            <span className="text-base capitalize text-zinc-700 dark:text-white font-bold">
                                {contact.label}
                            </span>
                        </Link>
                    )
                ))}
            </div>
        </section>
    );
};

export default Contacts;
