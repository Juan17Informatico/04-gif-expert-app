import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        //Categories
        setCategories([newCategory, ...categories]);
        // setCategories( cat => [...cat, 'Valorant']);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
        
            {
                categories.map((category) => (
                <GifGrid key={category} category={category} />
                ))
            }
        </>
    );
};
