import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name: string = "Ironman";
  age: number = 45;
 
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }
  changeHero():void{
    this.name="spiderman";
  }
  changeAge(){
    this.age=16;
  }
  resetForm():void{
    this.name = "Ironman";
    this.age = 45;
    document.querySelector('h1')!.innerHTML = '<h1>Desde angular</h1>'
  }
}
