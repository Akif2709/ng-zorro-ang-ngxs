export interface Instructor {
  id: string;
  name: string;
  surname: string;
  companyName: string;
  rating: number;
  deliviries: number;
  startRate: number;
  dailyRate: number;
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
  startRate: number;
  dailyRate: number;
  country: string;
  languages: Array<string>;
  skills: Array<string>;
  reviews: number;
  img_url: string;
}
