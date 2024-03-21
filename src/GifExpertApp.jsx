import { useState } from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

    const onAddCategory = () => {

        //Categories
        // console.log('Valorant');
        setCategories( [ 'Valorant' ,...categories ] );
        // setCategories( cat => [...cat, 'Valorant']); 
    }

    console.log(categories);
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map((category) => {
                  return <li key={ category }>{category}</li>
                })}
            </ol>
            {/* Gif Item */}
        </>
    );
};
