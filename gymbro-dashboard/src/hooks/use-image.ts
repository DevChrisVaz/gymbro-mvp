import { useState } from 'react';

const useImage = () => {
    const [img, setImg] = useState<string>('');
    const [exists, setExists] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    return (data: string) => {
        const image = new Image();
        image.onload = function () {
            setImg(data);
            setExists(true);
            setWidth(image.width);
            setHeight(image.height);
        }
        image.onerror = function () {
            setImg('/assets/user-not-found.png');
            setExists(false);
        }
        image.src = data;


        return { img, exists, width, height };
    }
}

export default useImage;