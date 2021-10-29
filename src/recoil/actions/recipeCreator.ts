/* eslint-disable no-console */

import { selector } from 'recoil';
import recipeService from '../../services/recipeService';

const renderRecipe = selector({
  key: 'RENDER_RECIPE',
  get: () => recipeService(),
})

export default renderRecipe;