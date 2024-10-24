
export const getAbility = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/ability`)
    .then((response) => response.json())

    return data
}