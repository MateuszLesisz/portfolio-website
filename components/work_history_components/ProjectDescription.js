const ProjectDescription = ({ name, description }) => {
    if (name === "betterjobs.it") {
        const parts = description.split("betterjobs.it");
        const lastPartIndex = parts.length - 1;

        return (
            <p className="text-black dark:text-zinc-400 text-sm mt-1">
                {parts.slice(0, lastPartIndex).join("betterjobs.it")}
                <a
                    href="https://betterjobs.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >
                    betterjobs.it
                </a>
                {parts[lastPartIndex]}
            </p>
        );
    }

    return (
        <p className="text-black dark:text-zinc-400 text-sm mt-1">
            {description}
        </p>
    );
};

export default ProjectDescription;
