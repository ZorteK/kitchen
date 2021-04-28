import {Ingredient} from './Ingredient';

export interface Stock {
  id?: number;
  quantity?: number | null;
  available?: boolean | null;
  toBuy?: boolean | null;
  ingredient?: Ingredient | null;
}
