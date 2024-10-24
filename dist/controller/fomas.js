"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getForms = void 0;
const getForms = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon-form`)
        .then((response) => response.json());
    return data;
};
exports.getForms = getForms;
