import axios from 'axios';

async function recipeService() {
  try {
    const { data: { data }} = await axios.get('https://virated-api.herokuapp.com/recipes');
    return data;
  } catch(error) {return error}
}

export default recipeService;