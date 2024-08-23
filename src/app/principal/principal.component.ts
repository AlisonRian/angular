import {Component, OnInit} from '@angular/core';
import {Endereco} from "../modelo/Endereco";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {EnderecoService} from "../services/endereco.service";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    NgForOf,
    KeyValuePipe,
    NgIf
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{

 enderecos:Endereco[] = [];

  constructor(private enderecoService: EnderecoService) {}
  ngOnInit(): void{
    this.enderecoService.getEnderecos().subscribe((dado)=>{
      this.enderecos = dado;
    })
  }
  onDelete(endereco:Endereco){
      this.enderecoService.deleteEnderecos(endereco).subscribe();
  }
}
