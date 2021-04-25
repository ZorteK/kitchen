import {Ingredient} from './Ingredient';

export interface Stock {
  id?: number;
  quantity?: number | null;
  ingredient?: Ingredient | null;
}
