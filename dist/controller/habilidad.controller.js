"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbility = void 0;
const getAbility = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/ability`)
        .then((response) => response.json());
    return data;
};
exports.getAbility = getAbility;
