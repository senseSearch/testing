import { Component, OnInit } from '@angular/core';
import { printProduct } from '../../../model/stockProducts/printProduct.interface';
import { ProductService } from '../../../services/product.service';


// importando modulos necesarios

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})


export class ListProductsComponent implements OnInit {

  producto: printProduct[] = [];
  clickedRow?: printProduct;
  public txtValue: string = "";
  productList: any[] = [];

  clicked(row: any) {
    this.clickedRow = row;
  }

  constructor(private prodService: ProductService) {
    /* this.prodService.getProducts().subscribe((datas: printProduct[]) => {
      this.producto = datas;
      console.log('------- Products -------', this.producto);
    }); */
  }

  ngOnInit(): void {

    this.prodService.getProductList().subscribe((res: any) => {
      this.productList = res;
      console.log('v4 response : ', res);
    });
  }
}


//definiendo datos pa mostrar en la tabla
export interface ProductElement {
  posicion: number;
  nombre: string;
  precio: number;
}

const element_data: ProductElement[] = [
  {
    posicion: 1,
    nombre: 'juan alberto alanes',
    precio: 1.75,
  },
  {
    posicion: 1,
    nombre: 'juan alberto alanes',
    precio: 1.75,
  },
];