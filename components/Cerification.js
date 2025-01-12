'use client';
import SectionWrapper from "@/components/SectionWrapper";
import Heading from "@/components/Heading";
import data from "@/data/certification"; // Import pliku danych
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useState } from "react";
import CertViewerModel from "@/components/CertViewerModel"; // Import komponentu do podglądu PDF

const Certification = () => {
    const [state, setState] = useState(false); // Kontroluje widoczność modala
    const [filePath, setFilePath] = useState(""); // Przechowuje ścieżkę do PDF

    const toggleModel = () => {
        setState(!state);
    };

    return (
        <section>
            <SectionWrapper>
                <Heading>Certifications</Heading>
                {data.map((certification) => (
                    <div key={certification.id} className="flex gap-5 w-full lg:w-8/12 mb-10">
                        {/* Obraz certyfikatu */}
                        <div className="relative w-[150px] h-[150px] rounded-lg overflow-hidden">
                            <Image
                                src={certification.image} // Obraz pobierany z danych
                                width={150}
                                height={150}
                                className="object-contain"
                                alt={`${certification.title} image`}
                            />
                        </div>
                        {/* Nazwa certyfikatu i strzałka */}
                        <div className="flex items-center">
                            <div className="flex space-x-3 items-center">
                                <h2 className="text-lg font-bold text-zinc-700 dark:text-zinc-400">
                                    {certification.title} {/* Tytuł pobierany z danych */}
                                </h2>
                                <FaArrowTrendUp
                                    className="text-[20px] test-zinc-900 dark:text-white cursor-pointer"
                                    onClick={() => {
                                        setFilePath(certification.filePath); // Ustawienie ścieżki do PDF
                                        toggleModel(); // Otwórz modal
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </SectionWrapper>

            {/* Modal do podglądu PDF */}
            <CertViewerModel state={state} filePath={filePath} toggleModal={toggleModel} />
        </section>
    );
};

export default Certification;
