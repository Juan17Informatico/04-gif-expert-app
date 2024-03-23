import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImg = await getGifs(category);
        setImages(newImg);
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                {/*images.map*/}
                {images.map(( image ) => (
                    <GifItem 
                        key={image.id} 
                        {...image}
                    />
                ))}
            </div>
        </>
    );
};
