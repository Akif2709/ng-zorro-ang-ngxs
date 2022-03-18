export interface Instructor {
  id: string;
  name: string;
  surname: string;
  companyName: string;
  rating: number;
  deliviries: number;
  startRate: number;
  dailyRate: number;
  title: string;
  country: string;
  languages: Array<string>;
  skills: Array<string>;
  reviews: number;
  img_url: string;
}

export interface InstructorDetails {
  id: string;
  name: string;
  surname: string;
  companyName: string;
  rating: number;
  deliviries: number;
  title: string;
  startRate: number;
  dailyRate: number;
  country: string;
  languages: Array<string>;
  skills: Array<string>;
  reviews: number;
  img_url: string;
}

export enum SortingKinds {
  AlphabeticalASC ='Alphabetical ASC',
  AlphabeticalDESC ='Alphabetical DESC',
  StartRateASC ='StartRate ASC',
  StartRateDESC ='StartRate DESC',
  RatingASC ='Rating ASC',
  RatingDESC ='Rating DESC',
}
