import { Component, OnInit } from '@angular/core';
@Component({
    selector:'app-recipeList',
    templateUrl: 'recipeList.component.html'
})
export class recipeListComponent implements OnInit {
    recipes = [];
    constructor(){

    }
    ngOnInit(){

    }
}
