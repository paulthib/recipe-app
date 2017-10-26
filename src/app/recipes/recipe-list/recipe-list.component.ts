import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Chocolate Cake', 'this is a test', 'http://birmingham.livingmag.co.uk/assets/recipe-image-Dark-chocolate-delice.jpg')
    ,new Recipe('Roasted Chicken', 'this is a test', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/9/1/0/PB0709_easy-after-work-bbq-chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371600084254.jpeg')
  ];


  constructor() { }

  ngOnInit() {
  }

}
