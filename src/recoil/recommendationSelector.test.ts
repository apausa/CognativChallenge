import { snapshot_UNSTABLE } from "recoil";
import renderRecommendation from './recommendationSelector';

jest.mock('../services/recommendationService.ts');

describe("Given a recommendation selector", () => {
  describe("When is invoked", () => {
    test("Then undefined is returned", () => {
      const initialSnapshot = snapshot_UNSTABLE();
      expect(initialSnapshot.getLoadable(renderRecommendation).valueOrThrow()).toBe(undefined);
    })
  })
})