import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModelState } from 'src/app/models/Constants';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/Product.service';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  @Input() products: Product[] = [];
  product: Product = new Product("");

  constructor(private service: ProductService) { }

  ngOnInit() {
  }

  save(e: any) {
    e.preventDefault()
    if (this.product.name == "") { alert("Llene el formulario "); return }
    this.service.Incoming(this.product).subscribe(data => {
      if (data) {
        this.products.push(data)
        this.product = new Product("")
        alert("Guardado")
      }
    })
  }

}
