import { Component, OnInit } from '@angular/core';
import {HttpBackend, HttpClient, HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  categories: any;
  valortotal:any;
  date:any;
  produto:any;
  fornecedor:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getCategories();
  }
  
  postCategories() {
    var buy = {date: this.date, valueTotal: this.valortotal, idProduct: this.produto, idProvider: this.fornecedor } ;

      this.http.post('https://localhost:7098/api/Buy', buy)
      .subscribe(
        resultado => {
          console.log(resultado);
          this.getCategories();
          this.valortotal='';
          this.date='';
          this.produto='';
          this.fornecedor='';
          
        },
        erro => {
          if(erro.status == 400) {
            console.log(erro);
          }
        }
      );
  }

  getCategories(){
    this.http.get('https://localhost:7098/api/Buy')
    .subscribe(response => {
      this.categories = response
      console.log(this.categories)

    });
  }

}


