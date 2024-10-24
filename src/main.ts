/*Desarrolle una aplicación con TypeScript que realice las siguientes tareas:

La aplicación debe hacer Fetch al APi de Pokemon descrita en los recursos de la clase anterior en esta plataforma
Minimo debe hacer tres fetch a tres EndPoint distintos 
Debe usar una interfaz para recibir los datos de los pokémon
Al Menos debe hacer uso de una interfaz  */


import { getForms } from "./controller/fomas.controller";
import { getAbility } from "./controller/habilidad.controller";
import { getMove } from "./controller/movimientos.controller";
import { Forms } from "./interfaces/formas.interface";
import { Ability } from "./interfaces/habilidad.interface";
import { Move } from "./interfaces/movimientos.interface";

const viewData = async () => {
    const forms:Forms [] =await getForms();
    const ability:Ability [] = await getAbility()
    const move:Move [] = await getMove()

    console.log(forms, move, ability);
}

viewData()
