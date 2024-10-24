"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMove = void 0;
const getMove = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/move`)
        .then((response) => response.json());
    return data;
};
exports.getMove = getMove;
