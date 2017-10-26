import {Component} from "@angular/core";
import {Hero} from "../model/Hero";


@Component({
    selector : 'track-by',
    template : `
        <h1>TrackBy Component</h1>
        <span>all DOM reloaded {{reloadCount}}</span> 
        <span>trackByName reloaded {{reloadCountHeroesName}} </span> <br/>
        <button (click) = "changeUpdate()">Reset Item</button>
        <button (click) = "changeName()">Update Name</button><br/>
        <ul *ngFor = "let hero of heroes; trackBy : trackByHeroes">
            <li>id({{hero.id}}) , name({{hero.name}})</li>
        </ul>
    `
})
export class TrackBy {
    reloadCount : number = 0;
    reloadCountHeroesName : number = 0;
    heroes = [
        new Hero(1,'Oreo'),
        new Hero(2,'Nougat'),
        new Hero(3,'Donut'),
        new Hero(4,'Froyo')
    ];

    trackByHeroes(idx : number , hero : Hero){
        console.log('trackBy Heroes Name');
        return hero;
    }
    reloadAllDOM(){
        this.heroes = [
            new Hero(1,'Oreo'),
            new Hero(2,'Nougat'),
            new Hero(3,'Donut'),
            new Hero(4,'Froyo')
        ];  
    }
    reloadHeroOnlyName(){
        this.heroes = [
            new Hero(10,'Oreo'),
            new Hero(20,'Nougat'),
            new Hero(30,'Donut'),
            new Hero(40,'Froyo'),
            new Hero(50,'Lollipop')
        ];
    }
    changeName(){
        this.reloadHeroOnlyName();
        ++this.reloadCountHeroesName;
    }
    changeUpdate(){
        this.reloadAllDOM();
        ++this.reloadCount;
    }
}