import { Request, Response, response } from "express";
import { RecipeServices } from "../services/recipeServices";

export class RecipeControllers {

    searchNameRecipe(req: Request, res: Response) {
        const recipeService = new RecipeServices;
        const search = req.query.search
        const response = recipeService.searchNameRecipe(search as string)
        return res.status(200).json(response)


    }
    getRecipes(req: Request, res: Response) {
        const recipeService = new RecipeServices;
        const response = recipeService.getRecipes()
        return res.status(200).json(response)
    }
    getOneRecipe(req: Request, res: Response) {
        const recipeService = new RecipeServices;
        const id = req.params.id;
        const response = recipeService.getOneRecipe(Number(id))
        return res.status(200).json(response)
    }
    createRecipe(req: Request, res: Response) {
        const recipeService = new RecipeServices;
        const body = req.body;
        const response = recipeService.createRecipe(body)
        return res.status(201).json(response)

    }
    updateRecipeData(req: Request, res: Response) {

        const recipeService = new RecipeServices;
        const id = req.params.id;
        const body = req.body;
        const response = recipeService.updateRecipeData(Number(id), body)
        return res.status(200).json(response)
    }

    deleteRecipe(req: Request, res: Response) {
        const recipeService = new RecipeServices;
        const id = req.params.id;
        recipeService.deleteRecipe(Number(id))
        return res.status(204).json()
    }
}