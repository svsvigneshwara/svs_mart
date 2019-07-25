import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-firstpage',
  template: `   
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button  class="btn btn-outline-success my-2 my-sm-0" routerLink = "/cart"  >Cart Items : </button>
            </form>
        </div>
    </nav>
    <h1 class="d-flex justify-content-center"> Welcome to SVS Shopping Mart !!! </h1>
<div class="row">
  <div *ngFor="let prod of products" class="col-lg-3">
      <app-card-view [product]="prod"></app-card-view>
  </div>
</div> `,
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit{
  public products = []  
  constructor(private _commonservice : CommonService) { }
  
  ngOnInit() {
    this._commonservice.getEmployees()
      .subscribe(data => this.products=data)    
  }
}
