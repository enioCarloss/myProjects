import { generateId, recipeDataBase } from "../database/recipeDataBase";
import { IeditRecipeBody, Irecipe, TrecipeCreateBody } from "../interface/recipeInterface";

export class RecipeServices {
    searchNameRecipe(search?: string) {
        if (search) {
            const searchResult = recipeDataBase.filter(recipe => recipe.title.toLowerCase().includes(search.toLowerCase()));
            return searchResult;
        } else {
            return recipeDataBase;
        }
    }

    getOneRecipe(id: number): Irecipe {

        const recipeFound: Irecipe = recipeDataBase.find(recipe => recipe.id === id) as Irecipe;
        return recipeFound;
    }
    getRecipes(): Irecipe[] {
        return recipeDataBase;
    }
    createRecipe(body: TrecipeCreateBody): Irecipe {
        const newRecipe: Irecipe = {
            id: generateId(),
            title: body.title,
            content: body.content,
            steps: body.steps
        }
        recipeDataBase.push(newRecipe);
        return newRecipe;
    }
    updateRecipeData(id: number, body: IeditRecipeBody): Irecipe {
        const recipeFound: Irecipe = recipeDataBase.find(recipe => recipe.id === id) as Irecipe;
        const updatedRecipe = { ...recipeFound, ...body }
        const index = recipeDataBase.findIndex((recipe) => recipe.id === id)
        recipeDataBase.splice(index, 1, updatedRecipe)
        return updatedRecipe;


    }
    deleteRecipe(id: number): void {
        const index = recipeDataBase.findIndex((recipe) => recipe.id === id)
        recipeDataBase.splice(index, 1)

    }


}