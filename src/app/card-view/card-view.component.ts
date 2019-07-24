import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-card-view',
  template: `<div class="container"><div class="card ml-3 mt-3 mr-3 mb-3">      
  <h2 class="d-flex justify-content-center">{{product.name}}</h2>
  <h4 class="d-flex justify-content-center">Price : {{product.price}}</h4>
  <h4 class="d-flex justify-content-center">Brand : {{product.company}}</h4>
  <div class="row ">
      <div *ngIf="product.status then iff; else elsee"></div>
      <ng-template #iff>
        <div class="col-lg-12">
         <button (click)="onclick(product.id)" class="btn btn-warning ml-5 mb-3">Add to cart</button>
        </div>
      </ng-template>
      <ng-template #elsee>
        <button class="btn btn-success ml-5 lg-3 mr-2 md-6 mb-3">Added to cart</button>
        <button class="btn btn-danger ml-2 mr-3 lg-3 md-6 mb-3" (click)="rclick(product.id)">Remove</button>
      </ng-template>          
  </div>
</div></div>`,
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  @Input()public product;
  public cart = []  
  constructor(private _commonservice : CommonService ) { }
  public rclick(item)
  {  
    this.product.status=true        
  }
  public onclick(item)
  { 
    this.product.status=false
    this.cart.push(item)    
  }  
  ngOnInit() {
  
  this.cart = this._commonservice.cart
  }
}
