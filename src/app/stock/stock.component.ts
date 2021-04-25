import { Component, OnInit } from '@angular/core';
import {Stock} from '../recette/Stock';
import {RecipeService} from '../recipe.service';
import {StockService} from '../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stocks: Stock[];
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.getStocks();
  }


  getStocks(): void {
    // @ts-ignore
    this.stockService.getStocks()
      .subscribe(result => this.stocks = result);
  }
}
