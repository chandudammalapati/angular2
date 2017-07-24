import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-shoppingList',
    templateUrl: 'shoppingList.component.html',
    styleUrls: ['shoppingList.component.css']
})

export class shoppingListComponent implements OnInit {
    ingredients = [];

    constructor(){}
    
    ngOnInit(){

    }
}