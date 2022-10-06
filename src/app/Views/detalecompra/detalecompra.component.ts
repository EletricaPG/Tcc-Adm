import { Component, OnInit } from '@angular/core';
import {HttpBackend, HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-detalecompra',
  templateUrl: './detalecompra.component.html',
  styleUrls: ['./detalecompra.component.css']
})
export class DetalecompraComponent implements OnInit {
  categories: any;
  compra:any;
  produto:any;
  quantidade:any;
  valorunit:any;
  subtotal:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getCategories();
  }
  
  postCategories() {
    var buydetails = {idBuy: this.compra, idProduct: this.produto, amountBuy: this.quantidade, valueUni: this.valorunit, subTotal: this.subtotal} ;

      this.http.post('https://localhost:7098/api/BuyDetails',buydetails)
      .subscribe(
        resultado => {
          console.log(resultado);
          this.getCategories();
          this.compra='';
          this.produto='';
          this.quantidade='';
          this.valorunit='';
          this.subtotal='';
        },
        erro => {
          if(erro.status == 400) {
            console.log(erro);
          }
        }
      );
  }

  getCategories(){
    this.http.get('https://localhost:7098/api/BuyDetails')
    .subscribe(response => {
      this.categories = response
      console.log(this.categories)

    });
  }

}
