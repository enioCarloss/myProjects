export interface Irecipe {
    id: number;
    title: string;
    content: string;
    steps: string[]
}
export type TrecipeCreateBody = Omit<Irecipe, "id">
export type IeditRecipeBody = Partial<TrecipeCreateBody>