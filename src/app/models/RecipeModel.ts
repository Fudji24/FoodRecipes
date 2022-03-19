import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface Recipes{
    id: number,
    image: string,
    img_type: string,
    title: string,
    summary: string,
    instructions: StringMap,
    readyInMinutes: number,
    servings: number,
    dishTypes: Array<DishTypes>,
    spoonacularScore: number,
}

export interface APIRes<T>{
    results: Array<T>;
}

interface DishTypes{
    name: string;
}

