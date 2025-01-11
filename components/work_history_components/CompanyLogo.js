import Image from 'next/image';

const CompanyLogo = ({ src, alt }) => {
    return (
        <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border dark:border-zinc-700">
            <Image
                src={src}
                fill
                className="w-full h-full object-cover"
                alt={alt}
            />
        </div>
    );
};

export default CompanyLogo;
