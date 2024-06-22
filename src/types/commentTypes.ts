export interface RadioType {
  persistence?: string;
  residualScent?: string;
  gender?: string;
}

export interface FieldDefinitionsType {
  rating?: string;
  textReview?: string;
  persistence?: string;
  residualScent: string;
  season?: string;
  gender: string;
  mood?: string;
}

export interface RadioRulesType {
  required?: string | { value: boolean; message: string };
}
