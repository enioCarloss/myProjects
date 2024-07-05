import { Router } from "express";
import { RecipeControllers } from "../controllers/recipeControllers";

export const recipeRoutes = Router();
const recipeControllers = new RecipeControllers();
recipeRoutes.get("/", recipeControllers.searchNameRecipe);
recipeRoutes.get("/", recipeControllers.getRecipes);
recipeRoutes.get("/:id", recipeControllers.getOneRecipe);
recipeRoutes.post("/", recipeControllers.createRecipe);
recipeRoutes.patch("/:id", recipeControllers.updateRecipeData);
recipeRoutes.delete("/:id", recipeControllers.deleteRecipe);