const gifEmpety = () => {
    return [
        {
            id: 0,
            title: "Hola",
            url: "Without Image",
        },
    ];
};

export const getGifs = async (category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fpUozhgZO4O69AFi0Q7pgSBsOBeA7EJm&q=${category}&limit=10`;
    const resp = await fetch(url);

    if (resp.status === 429) {
        return gifEmpety();
    }
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
};
