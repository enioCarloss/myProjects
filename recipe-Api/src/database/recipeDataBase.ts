import { Irecipe } from "../interface/recipeInterface";

export const recipeDataBase: Irecipe[] = []
let id = 0;
export const generateId = () => {
    id++;
    return id;
}