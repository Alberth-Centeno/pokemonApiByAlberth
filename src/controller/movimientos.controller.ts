
export const getMove = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/move`)
    .then((response) => response.json())

    return data
}