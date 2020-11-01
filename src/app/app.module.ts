import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeLogadoComponent } from './components/home-logado/home-logado.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SaidaComponent } from './components/saida/saida.component';
import { SolicitarDispensaComponent } from './components/solicitar-dispensa/solicitar-dispensa.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeLogadoComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    EntradaComponent,
    SaidaComponent,
    SolicitarDispensaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
