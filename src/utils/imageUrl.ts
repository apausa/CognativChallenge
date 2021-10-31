import PLACEHOLDER from "../constants/placeholder";
import { RecipeInterface } from "../types/interface";

const imageURL = (item: RecipeInterface) => 
  (item.photo) ? item.photo : PLACEHOLDER;
export default imageURL;