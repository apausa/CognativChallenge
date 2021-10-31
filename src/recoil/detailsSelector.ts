import { selectorFamily } from 'recoil';

import renderRecipe from './recipeSelector';
import { RecipeInterface } from "../types/interface";

const renderDetails = selectorFamily({
  key: 'RENDER_DETAILS',
  get: (itemId) => ({ get }) => {
    const realRecipes = get(renderRecipe);
    const recipe = realRecipes.find((item: RecipeInterface) => (item._id === itemId));
    return recipe;
  },
})

export default renderDetails;