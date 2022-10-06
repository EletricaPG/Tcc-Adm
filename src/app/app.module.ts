import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroAdmComponent } from './Views/cadastro-adm/cadastro-adm.component';
import { CategoriaComponent } from './Views/categoria/categoria.component';
import { ClienteComponent } from './Views/cliente/cliente.component';
import { CompraComponent } from './Views/compra/compra.component';
import { DetalecompraComponent } from './Views/detalecompra/detalecompra.component';
import { DetalepedidoComponent } from './Views/detalepedido/detalepedido.component';
import { FornecedorComponent } from './Views/fornecedor/fornecedor.component';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/login/login.component';
import { PagamentoComponent } from './Views/pagamento/pagamento.component';
import { PedidoComponent } from './Views/pedido/pedido.component';
import { ProdutoComponent } from './Views/produto/produto.component';
import { MenuComponent } from './Views/menu/menu.component';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    CadastroAdmComponent,
    CategoriaComponent,
    ClienteComponent,
    CompraComponent,
    DetalecompraComponent,
    DetalepedidoComponent,
    FornecedorComponent,
    HomeComponent,
    LoginComponent,
    PagamentoComponent,
    PedidoComponent,
    ProdutoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
