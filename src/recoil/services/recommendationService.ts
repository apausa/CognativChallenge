import axios from 'axios';

async function recommendationService() {
  try {
    const { data: { data }} = await axios.get('https://virated-api.herokuapp.com/recipes?recommended=1');
    return data;
  } catch(error) {return error}
}

export default recommendationService;