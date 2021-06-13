import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {
  title:string = 'Noleggia un film'

  quantity:number = 0;
  price:number = 14.99;
  discount:number = 20;
  valore:number = 0;
  totUSD: number = 0;
  total:number = 0;
  totalUSD:number = 0;
  dollars:number = 0;
  constructor() { }

  calculate(q:any){
    let subtotal = q * this.price
    let totaldiscount = subtotal * 20/100
    this.total = subtotal - totaldiscount;
    this.totUSD = this.total * 1.22;
  }



  ngOnInit(): void {
  }

}
