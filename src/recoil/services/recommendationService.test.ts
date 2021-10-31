import axios from 'axios';
import recommendationService from './recommendationService';
import itemMock from '../../__mocks__/itemMock';

jest.mock("axios");

describe('Given the "recommendationService" function', () => {
  describe('When is invoked', () => {
    describe('And resolves', () => {
      test('Then returns a recommendation', async () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: { data: itemMock }});
        const result = await recommendationService();
        expect(result).toEqual(itemMock)
      })
    }),
    describe('And rejectes', () => {
      test('Then returns an error', async () => {
        (axios.get as jest.Mock).mockRejectedValue(new Error());
        const result = await recommendationService();
        expect(result).toEqual(new Error())
      })
    })
  })
})
