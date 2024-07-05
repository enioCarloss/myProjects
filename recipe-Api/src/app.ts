import express, { json } from "express"
import { recipeRoutes } from "./router/recipeRoutes"
export const app = express()
app.use(json())
app.use("/recipes", recipeRoutes)