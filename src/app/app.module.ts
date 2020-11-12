import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Config } from './app.config';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SaidaComponent } from './components/saida/saida.component';
import { SolicitarDispensaComponent } from './components/solicitar-dispensa/solicitar-dispensa.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeLogadoComponent } from './components/home-logado/home-logado.component';
import { AuthComponent } from './components/auth/auth.component';
import { MaterialModule } from './services/material.module';
import { HttpClientModule } from '@angular/common/http';


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
    SolicitarDispensaComponent,
  ],
  imports: [
    AppRoutingModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule, 
    MaterialModule // <-- this!
    ],
  providers: [Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
