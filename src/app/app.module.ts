import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { headerComponent } from './header/header.component';
import { recipesComponent } from './recipes/recipes.component';
import { recipeListComponent } from './recipes/recipeList/recipeList.component'
@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    recipesComponent,
    recipeListComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
