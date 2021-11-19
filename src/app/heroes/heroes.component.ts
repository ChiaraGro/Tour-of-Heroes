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

  // getHeroes(): void{
  //   this.heroes = this.heroService.getHeroes();
  // }
//metodo per recuperare gli eroi dal service



getHeroes():void{
  this.heroService.getHeroes()
  .subscribe(heroes => this.heroes = heroes);
}


//Observable.subscribe() is the critical difference. The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.
//The new version waits for the Observable to emit the array of heroes. he subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
