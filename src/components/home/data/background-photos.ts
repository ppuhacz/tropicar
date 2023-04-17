import backgroundPhoto1 from "../../../img/cars/mercedes-c63-amg/mercedes-background.avif";
import backgroundPhoto2 from "../../../img/cars/porsche-panamera-turbo-s/panamera-background.avif";
import backgroundPhoto3 from '../../../img/cars/bmw-m4-coupe/bmw-m4-coupe.avif';

// importing interface
import { BackgroundPhotos } from "../types/background-photos.-interface";

export const backgroundPhotos: BackgroundPhotos = [
  {
    id: 1,
    name: 'mercedes-c63-amg',
    url: backgroundPhoto1
  },
  {
    id: 2,
    name: 'porsche-panamera-turbo-s',
    url: backgroundPhoto2
  },
  {
    id: 3,
    name: 'bmw-m4-coupe',
    url: backgroundPhoto3
  }
]