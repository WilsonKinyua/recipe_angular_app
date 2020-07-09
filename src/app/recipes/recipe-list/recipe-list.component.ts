import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new  Recipe('My Test Recipe','This is a dummy description','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-145969396720.jpg'),
    new  Recipe('My Test Recipe 2','This is a dummy description 2','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-145969396720.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
