import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculdora';
  aparecer ='0'
  valorAtual=''

  public aparecerInput(value: string){
    this.valorAtual = this.valorAtual + value
    this.aparecer = this.valorAtual
  }

  public botaoIgual(){
    this.aparecer = eval(this.valorAtual)
    this.valorAtual = this.aparecer
  }

  public botaoLimpar(){
    this.valorAtual = '';
    this.aparecer = '0'
  }
}
