import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template:  `
    <hr>
    <h1>Counter: {{counter}}</h1>
    <button (click)="increaseBy(+1)">+</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-</button>
    
` 
})

export class CounterComponent  {
    counter: number = 10;

    increaseBy(n:number):void {
    this.counter +=n;    
    }

    reset():void{
        this.counter=10;
    }
}