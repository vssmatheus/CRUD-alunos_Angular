import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AlunosService } from './alunos.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [AlunosService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
