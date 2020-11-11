import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core/meta.guard';
import { AuthComponent } from './components/auth/auth.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { HomeLogadoComponent } from './components/home-logado/home-logado.component';
import { RegisterComponent } from './components/register/register.component';
import { SaidaComponent } from './components/saida/saida.component';
import { SolicitarDispensaComponent } from './components/solicitar-dispensa/solicitar-dispensa.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeLogadoComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'entrada',
    component: EntradaComponent
  }, 
  {
    path: 'saida',
    component: SaidaComponent
  },
  {
    path: 'solicitar-dispensa',
    component: SolicitarDispensaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
