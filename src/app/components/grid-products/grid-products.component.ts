import { Component, OnInit } from '@angular/core';
import { ModelState, States } from 'src/app/models/Constants';
import { Product } from 'src/app/models/Product';
import { State } from 'src/app/models/State';
import { ProductService } from 'src/app/services/Product.service';

@Component({
  selector: 'app-grid-products',
  templateUrl: './grid-products.component.html',
  styleUrls: ['./grid-products.component.css']
})
export class GridProductsComponent implements OnInit {


  products: Product[] = [];
  state: number = ModelState.stock;
  stock: number = ModelState.stock;
  states: State[] = States;
  val: string = "Disponible"

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts(state: number = this.state) {
    this.service.Consult(this.state).subscribe(data => {
      this.products = data;
    })
  }
  MarkFaulty(id: string | undefined) {
    this.service.MarkFaulty(id).subscribe(data => {
      alert(data.message)
      this.listProducts();
    })
  }

  MarkOutlet(id: string | undefined) {
    this.service.MarkOutlet(id).subscribe(data => {
      alert(data.message)
      this.listProducts();
    })
  }

  stateString(c: Product): string {
    switch (c.state) {
      case ModelState.stock: return "Disponible";
      case ModelState.faulty: return "Defectuso";
      case ModelState.outlet: return "Salida";
    }
    return ""
  }
}
