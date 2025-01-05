import { ReactNode } from "react";

export interface GhibliType {
    id:                       string | undefined;
    title:                    string;
    original_title:           string;
    original_title_romanised: string;
    image:                    string;
    movie_banner:             string;
    description:              string;
    director:                 string;
    producer:                 string;
    release_date:             string;
    running_time:             string;
    rt_score:                 string;
    people:                   string[];
    species:                  string[];
    locations:                string[];
    vehicles:                 string[];
    url:                      string;
   }

   export interface GhibliDirectorType{
    name: string;
    movies: GhibliType[];
   }

   export interface GhibliContextProviderProps{
    children: ReactNode;
   }