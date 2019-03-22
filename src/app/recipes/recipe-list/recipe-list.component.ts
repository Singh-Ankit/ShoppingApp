import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  recipes : Recipe[] = [
    new Recipe('Pizza','decription about pizza','https://img.bestrecipes.com.au/B05gGuy3/w643-h428-cfill-q90/br/2017/05/super-easy-pizza-dough-recipe-520771-1.jpg'),
    new Recipe('Pizza','decription about pizza','https://img.bestrecipes.com.au/B05gGuy3/w643-h428-cfill-q90/br/2017/05/super-easy-pizza-dough-recipe-520771-1.jpg')
  ];

  ngOnInit() {
  }

}
