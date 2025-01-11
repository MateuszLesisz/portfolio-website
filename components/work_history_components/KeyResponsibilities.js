const KeyResponsibilities = ({ keyResponsibilities }) => {
    if (!keyResponsibilities || keyResponsibilities.length === 0) {
        return null;
    }

    return (
        <div className="mt-4">
            <h5 className="text-black dark:text-white font-bold text-sm mb-2">
                Key Responsibilities:
            </h5>
            <ul className="list-disc list-inside text-black dark:text-zinc-400 text-sm space-y-2">
                {keyResponsibilities[0].project.map((task, idx) => (
                    <li key={idx}>
                        {task.info}
                        {task.desc && (
                            <ul className="list-none ml-4 space-y-2 mt-2">
                                {task.desc.map((subTask, subIdx) => (
                                    <li key={subIdx}>
                                        <span className="before:content-['-'] before:mr-2">
                                            {subTask.info}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default KeyResponsibilities;
