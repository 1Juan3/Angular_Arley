import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interface/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroes: any []=[];

  constructor(private htpp:HttpClient) { 
    this.cargarHeroes();

  }

  detalles(id:string ){
    return this.htpp.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);

  }

  cargarHeroes(){
    return this.htpp.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .subscribe( (res: any)=>{
      this.heroes=res;
      console.log(this.heroes);
    })
  }
}
