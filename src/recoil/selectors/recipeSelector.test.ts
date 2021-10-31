import { snapshot_UNSTABLE } from "recoil";
import renderRecipe from './recipeSelector';

jest.mock('../services/recipeService.ts');

describe("Given a recipe selector", () => {
  describe("When is invoked", () => {
    test("Then undefined is returned", () => {
      const initialSnapshot = snapshot_UNSTABLE();
      expect(initialSnapshot.getLoadable(renderRecipe).valueOrThrow()).toBe(undefined);
    })
  })
})