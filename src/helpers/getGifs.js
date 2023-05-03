
// eslint-disable-next-line no-unused-vars
export const getGifs = async (category) => {
    // eslint-disable-next-line no-unused-vars
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5FYVaif4zBprBkZ6WxS8uGsJNUmaLfZu&q=${ category }&limit=20`
    // aqui obtengo la respuesta
    const resp = await fetch( url );
    const { data } = await resp.json();
    // eslint-disable-next-line no-unused-vars
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }))

    //console.log(gifs)    
    return gifs;
}
