import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  // Este arquivo (.ts) é a parte lógica do componente.
  // Aqui definimos:
  // - As informações do decorator @Component (selector, template, estilos, imports, etc.)
  // - As propriedades, estados e sinais usados no template
  // - Métodos e comportamentos que o componente executa
  //
  // Em resumo: o arquivo TypeScript é o “cérebro” do componente,
  // controlando dados, eventos e regras de funcionamento.
}
