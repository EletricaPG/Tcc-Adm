import { Component, OnInit } from '@angular/core';
import {HttpBackend, HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categories: any;
  desc:any;
  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getCategories();
  }
  
  postCategories() {
    var category = {description: this.desc} ;

      this.http.post('https://localhost:7098/api/Category', category)
      .subscribe(
        resultado => {
          console.log(resultado);
          this.getCategories();
          this.desc='';
          
          
        },
        erro => {
          if(erro.status == 400) {
            console.log(erro);
          }
        }
      );
  }

  getCategories(){
    this.http.get('https://localhost:7098/api/Category')
    .subscribe(response => {
      this.categories = response
      console.log(this.categories)

    });
  }


}
