import { Component, OnInit, Input } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  customers: Customer[] = []

  selectedCustomer:Customer;

  @Input() city:string //app.component.ts 'den parametre olarak alacağım anlamına geliyor.
  @Input() customer:string

  ngOnInit() {
    this.customers = [
      { id: 2, firstName: "batuhan", lastName: "bakar", age: 23 },
      { id: 3, firstName: "cetin", lastName: "bozkus", age: 24 },
      { id: 4, firstName: "cengiz", lastName: "yilmaz", age: 32 }
    ]
  }

  selectCustomer(customer:Customer){

//  alert(customer.firstName)

  this.selectedCustomer = customer;

}

}
