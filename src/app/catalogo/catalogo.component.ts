import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.models';
import { ListaProdutosComponent } from '../lista-produtos/lista-produtos.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, ListaProdutosComponent],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  categoriaSelecionada: string = 'Todas';

  produtos: Product[] = [
    {
      nome: 'Camiseta Itubers',
      imagem: 'assets/images/camiseta_itubers.png',
      preco: 79.90,
      categoria: 'Roupas'
    },
    {
      nome: 'Agenda Itubers  2025',
      imagem: 'assets/images/agenda_itubers.png',
      preco: 59.90,
      categoria: 'Papelaria'
    },
    {
      nome: 'Relógio Digital',
      imagem: 'assets/images/relogio.png',
      preco: 249.99,
      categoria: 'Acessórios'
    },
    {
      nome: 'Garrafa Itaú',
      imagem: 'assets/images/garrafa_ituber.png',
      preco: 149.99,
      categoria: 'Acessórios'
    },
    {
      nome: 'Camiseta Itubers 2',
      imagem: 'assets/images/camiseta_itubers.png',
      preco: 69.90,
      categoria: 'Roupas'
    },
    {
      nome: 'Agenda Itubers 2',
      imagem: 'assets/images/agenda_itubers.png',
      preco: 49.90,
      categoria: 'Papelaria'
    },
    {
      nome: 'Relógio Digital 2',
      imagem: 'assets/images/relogio.png',
      preco: 199.99,
      categoria: 'Acessórios'
    },
    {
      nome: 'Garrafa Itaú 2',
      imagem: 'assets/images/garrafa_ituber.png',
      preco: 129.99,
      categoria: 'Acessórios'
    }
  ];

  get categorias(): string[] {
    const unicas = this.produtos.map(p => p.categoria);
    return ['Todas', ...new Set(unicas)];
  }

  get produtosFiltrados(): Product[] {
    if (this.categoriaSelecionada === 'Todas') {
      return this.produtos;
    }
    return this.produtos.filter(p => p.categoria === this.categoriaSelecionada);
  }
}