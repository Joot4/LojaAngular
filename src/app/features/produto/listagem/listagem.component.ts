import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produtos } from '../produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit{

  produtos: Produtos[] = [];

  constructor(private produtoService: ProdutoService,
    private router: Router){

  }

  // RXJS
  // Javascript axios axios.get() requisicao assincrona
  // async return await === Promisse
  // Angular usa RXJS e o RXJS nao usa Promisse
  // Angular usa Observable === Cano
  ngOnInit(): void {
    this.produtoService.getProdutos()
    .subscribe(produtos => {
      this.produtos = produtos;
      console.log(produtos)
    })

  }

  selecionarProduto(produto: Produtos){
   this.router.navigate(['produto', 'editar-produto', produto.id])
  }


}
