import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './Views/categoria/categoria.component';
import { HomeComponent } from './Views/home/home.component';
import { LoginComponent } from './Views/login/login.component';
import { PedidoComponent } from './Views/pedido/pedido.component';
import { ProdutoComponent } from './Views/produto/produto.component';
import { CompraComponent } from './Views/compra/compra.component';
import { DetalecompraComponent } from './Views/detalecompra/detalecompra.component';
import { ClienteComponent } from './Views/cliente/cliente.component';
import { DetalepedidoComponent } from './Views/detalepedido/detalepedido.component';
import { PagamentoComponent } from './Views/pagamento/pagamento.component';
import { CadastroAdmComponent } from './Views/cadastro-adm/cadastro-adm.component';
import { FornecedorComponent } from './Views/fornecedor/fornecedor.component';

const routes: Routes = [
  {path:'',
component: HomeComponent
  },
  {path:'login',
component: LoginComponent
  },
  {path:'cadastro-adm',
component: CadastroAdmComponent
  },
  {path:'categoria',
  component: CategoriaComponent
  },
  {path:'produto',
  component: ProdutoComponent},
  {path:'pedido',
  component: PedidoComponent},
  {path:'fornecedor',
  component: FornecedorComponent},
  {path:'compra',
  component: CompraComponent},
  {path:'detalecompra',
  component: DetalecompraComponent},
  {path:'cliente',
  component: ClienteComponent},
  {path:'detalepedido',
  component: DetalepedidoComponent},
  {path:'pagamento',
  component: PagamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
