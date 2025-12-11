import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';

// O Angular Router organiza as rotas em um array de objetos.
// Cada objeto representa uma rota e define algumas propriedades importantes.
//
// - path: indica o caminho da URL.
//   * path: ''  → representa a rota raiz (ex.: localhost:4200)
//   * path: 'login' → representa localhost:4200/login
//
// - component: indica qual componente deve ser exibido quando o usuário
//   acessa aquele caminho.
//
// Em resumo: cada item do array é uma rota que mapeia uma URL para um componente.


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
];
 