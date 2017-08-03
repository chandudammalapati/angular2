import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
    selector:'app-recipeList',
    templateUrl: 'recipeList.component.html'
})
export class recipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Egg Sandwich','this is to boil eggs and ','http://tritontimes.com/wp-content/uploads/2015/11/tips.jpg'),
        new Recipe('Bacon Sandwich','Cut the bread and slice bacon','http://tritontimes.com/wp-content/uploads/2015/11/tips.jpg'),
    ];
    constructor(){

    }
    ngOnInit(){

    }
}
