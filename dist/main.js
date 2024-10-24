"use strict";
/*Desarrolle una aplicación con TypeScript que realice las siguientes tareas:

La aplicación debe hacer Fetch al APi de Pokemon descrita en los recursos de la clase anterior en esta plataforma
Minimo debe hacer tres fetch a tres EndPoint distintos
Debe usar una interfaz para recibir los datos de los pokémon
Al Menos debe hacer uso de una interfaz  */
Object.defineProperty(exports, "__esModule", { value: true });
const fomas_controller_1 = require("./controller/fomas.controller");
const habilidad_controller_1 = require("./controller/habilidad.controller");
const movimientos_controller_1 = require("./controller/movimientos.controller");
const viewData = async () => {
    const forms = await (0, fomas_controller_1.getForms)();
    const ability = await (0, habilidad_controller_1.getAbility)();
    const move = await (0, movimientos_controller_1.getMove)();
    console.log(forms, move, ability);
};
viewData();
