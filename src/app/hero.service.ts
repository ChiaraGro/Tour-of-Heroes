import { MessageService } from './message.service';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
//This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent.



  //metodo per ritornare il mock di eroi
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    //to send a message when the heroes are fetched.
    return heroes;
  }
}





//The HeroService.getHeroes() method has a synchronous signature, which implies that the HeroService can fetch heroes synchronously.
//The HeroesComponent consumes the getHeroes() result as if heroes could be fetched synchronously. This will not work in a real application. You're getting away with it now because the service currently returns mock heroes. But soon the application will fetch heroes from a remote server, which is an inherently asynchronous operation.
// The HeroService must wait for the server to respond, getHeroes() cannot return immediately with hero data, and the browser will not block while the service waits.
// HeroService.getHeroes() must have an asynchronous signature of some kind. In this tutorial, HeroService.getHeroes() will return an Observable because it will eventually use the Angular HttpClient.get method to fetch the heroes and HttpClient.get() returns an Observable.
