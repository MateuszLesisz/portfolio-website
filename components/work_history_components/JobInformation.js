const JobInformation = ({ role, company, type, date }) => {
    return (
        <div>
            <h2 className="text-black dark:text-white capitalize font-bold text-base">
                {role}
            </h2>
            <span className="capitalize text-sm font-bold text-zinc-500">
                {company}
            </span>
            <div className="flex items-center gap-x-1">
                <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]">
                    {type}
                </span>
                <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]"></span>
                <span className="text-black dark:text-white capitalize text-sm font-bold mt-[2px]">
                    {date}
                </span>
            </div>
        </div>
    );
};

export default JobInformation;
