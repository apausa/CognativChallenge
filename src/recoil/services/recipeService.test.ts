import axios from 'axios';
import recipeService from './recipeService';
import itemMock from '../../mocks/itemMock';

jest.mock("axios");

describe('Given the "recipeService" function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then returns a recipe', async () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: { data: itemMock }});
        const result = await recipeService();
        expect(result).toEqual(itemMock)
      })
    }),
    describe('And rejectes', () => {
      test('Then returns an error', async () => {
        (axios.get as jest.Mock).mockRejectedValue(new Error());
        const result = await recipeService();
        expect(result).toEqual(new Error())
      })
    })
  })
})
