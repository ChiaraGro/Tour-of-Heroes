import { HeroService } from './../hero.service';

// import { HEROES } from './../mock-heroes';
//non serve più l'import, si sostituisce con il service

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
// heroes = HEROES;
//non serve più si sostituisce con quelo sotto

  heroes: Hero[] = [];


  hero : Hero = {
    id: 1,
    name:'Windstorm'}



  selectedHero?: Hero;

  onSelect(hero:Hero){
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }
//metodo per recuperare gli eroi dal service



  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
