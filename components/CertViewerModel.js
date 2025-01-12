import { useState } from "react";
import { MdClose } from "react-icons/md";

const CertViewerModel = ({ state, filePath, toggleModal }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const handleImageLoad = (e) => {
        const { naturalWidth, naturalHeight } = e.target;
        setDimensions({ width: naturalWidth, height: naturalHeight });
    };

    return state ? (
        <div
            className="fixed inset-0 bg-black-25 p-4 backdrop-blur z-[99999999999] flex items-center justify-center"
        >
            <MdClose
                onClick={toggleModal}
                className="cursor-pointer text-[25px] absolute top-6 right-6 text-black dark:text-white"
            />
            <div
                className="bg-white dark:bg-zinc-900 p-4 rounded-lg border border-zinc-100 dark:border-zinc-700"
                style={{
                    width: `${dimensions.width || 500}px`,
                    height: `${dimensions.height || 500}px`,
                }}
            >
                <img
                    src={filePath}
                    alt="Certificate Preview"
                    className="w-full h-full object-contain rounded-lg"
                    onLoad={handleImageLoad}
                />
            </div>
        </div>
    ) : null;
};

export default CertViewerModel;
