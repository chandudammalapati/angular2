import { Component, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';
@Component({
    selector: 'app-shoppingList',
    templateUrl: 'shoppingList.component.html',
    styleUrls: ['shoppingList.component.scss']
})

export class shoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10)
    ];
    
    constructor(){}
    
    ngOnInit(){

    }
}