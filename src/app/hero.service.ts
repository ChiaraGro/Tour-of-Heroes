import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

//metodo per ritornare il mock di eroi
  getHeroes(): Hero[]{
    return HEROES;
  }
}
