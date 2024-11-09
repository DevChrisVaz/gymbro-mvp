import { ImageOff, Upload } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export interface SimpleImageInputProps {
    currentImage?: File;
    updatePictureCb: (file: File) => void;
    maxFileSizeInBytes?: number;
    [x: string]: any;
};

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 5242880;

// const BYTES_PER_KILO_BYTE = 1024;

// const convertBytesToKB = (bytes) => Math.round(bytes / BYTES_PER_KILO_BYTE);

const SimpleImageInput: React.FC<SimpleImageInputProps> = ({
    updatePictureCb,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    currentImage,
    ...otherProps
}) => {

    const [image, setImage] = useState<File>();

    const handleNewFileUpload = (e: any) => {
        const [file] = e.target.files;
        if (file.size <= maxFileSizeInBytes) {
            setImage(file);
            updatePictureCb(file);
        }
    }

    // const removeFile = (fileName) => {
    //     delete files[fileName];
    //     setFiles({ ...files });
    //     callUpdateFilesCb({ ...files });
    // };

    useEffect(() => {
        if(currentImage) {
            setImage(currentImage);
        }
    }, [currentImage]);
    

    return (
        <div className='w-full aspect-square border border-primary-500 rounded-lg overflow-hidden'>
            <div className="relative w-full h-full">
                {
                    image ?
                        <div className="w-full h-full overflow-hidden">
                            <img 
                                className="w-full h-full object-cover"
                                src={URL.createObjectURL(image)} 
                                alt="Equipment"
                            />
                        </div> :
                        <div className="w-full h-full rounded-lg bg-dark-gray-soft flex items-center justify-center">
                            <ImageOff className=' text-primary' size={96} />
                        </div>
                }
                <div className="absolute p-2 bg-primary flex items-center justify-between bottom-[15px] right-[15px] rounded-md duration-300 cursor-pointer hover:scale-[1.1]">
                    <Upload className="mr-2 text-white" size={16} />
                    <p className='m-0 text-white'>Subir foto</p>
                    <input 
                        type="file" 
                        className="absolute top-0 bottom-0 left-0 right-0 block w-full h-full border-none opacity-0 cursor-pointer" 
                        onChange={handleNewFileUpload} 
                        name="file" 
                        title='' 
                        value='' 
                        {...otherProps} 
                    />
                </div>
            </div>
        </div>
    );
};

export default SimpleImageInput;