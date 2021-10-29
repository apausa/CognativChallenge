import PLACEHOLDER from "../constants/placeholder";
import { Recipe } from "../types/interface";

const imageURL = (item: Recipe) => 
  (item.photo) ? item.photo : PLACEHOLDER;
export default imageURL;