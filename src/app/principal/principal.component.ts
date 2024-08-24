import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Endereco} from "../modelo/Endereco";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {EnderecoService} from "../services/endereco.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    NgForOf,
    KeyValuePipe,
    NgIf,
    FormsModule
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit{
   enderecos:Endereco[] = [];
   numero:number = 0;
   rua:string = '';
   bairro:string = '';
   cidade:string = '';
   cep: string = '';
   estado: string = '';

  constructor(private enderecoService: EnderecoService) {}
  ngOnInit(): void{
    this.enderecoService.getEnderecos().subscribe((dado)=>{
      this.enderecos = dado;
    })
  }
  onDelete(endereco:Endereco){
      this.enderecoService.deleteEnderecos(endereco).subscribe();
      window.location.reload();
  }
  onSubmit(){
    let novoEndereco = {
      numero: this.numero,
      rua: this.rua,
      bairro: this.bairro,
      cidade: this.cidade,
      cep: this.cep,
      estado: this.estado
    }
    this.onSave(novoEndereco);
  }

  onSave(endereco:Endereco){
    this.enderecoService.saveEndereco(endereco).subscribe();
    window.location.reload();
  }

}
