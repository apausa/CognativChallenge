export interface RecipeInterface {
    _id: string,
    name: string,
    categoryId: string,
    categoryName: string,
    duration: number,
    complexity: string,
    people: number,
    ingredients: string,
    description: string,
    photo: string,
    recommended?: number,
    favorite?: number,
}

export interface RenderColumnInterface {
    item: RecipeInterface,
}

export interface ColumnInterface {
    item: RecipeInterface,
    navigation: any, 
}

export interface RecommendedInterface {
    recommendations: RecipeInterface[],
}

export interface DetailsInterface {
    route: {
        params: {
            itemId: string,
        }
    }
}