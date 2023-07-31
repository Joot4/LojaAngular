import { Produtos } from './../produtos';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  id!: string;
  produto!: Produtos

  nome: string = '';
  descricao:string = '';
  preco:string = '';
  imagemUrl: string = ''
  estoque:number = 0;

  constructor(private produtoService: ProdutoService,
     private activateRoute:ActivatedRoute,
     ){
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.url[1].path;

    this.produtoService.getProdutoId(this.id).subscribe((produto: Produtos)=>{
      this.produto = produto;
      this.nome = produto.nome
      this.descricao = produto.descricao
      this.preco = produto.preco
      this.estoque = produto.estoque
    })
  }


  salvarProduto(){
    const salvarProduto = {
      id: parseInt(this.id),
      nome: this.nome,
      preco: this.preco,
      imagemUrl: this.produto.imagemUrl,
      descricao: this.descricao,
      estoque: this.estoque,
    }
    console.log(salvarProduto)

    this.produtoService.atualizarProduto(salvarProduto).subscribe(response =>{
      console.log('deu ok')

    })
  }


}
