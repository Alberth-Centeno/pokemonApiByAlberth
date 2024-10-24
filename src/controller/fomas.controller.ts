
export const getForms = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon-form`)
    .then((response) => response.json())

    return data
}