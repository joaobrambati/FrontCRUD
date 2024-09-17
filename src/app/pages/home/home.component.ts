import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioListar } from '../../models/Usuario';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  usuarios: UsuarioListar[] = [];
  usuariosPesquisa: UsuarioListar[] = [];

  constructor(private serviceUsuario:UsuarioService) {
    
  }

  ngOnInit(): void {
    this.serviceUsuario.GetUsuarios().subscribe(response =>{
      this.usuarios = response.dados;
      this.usuariosPesquisa= response.dados;
    })
  }

  search(event:Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLocaleLowerCase();

    this.usuarios = this.usuariosPesquisa.filter(usu => {
      return usu.nomeCompleto.toLowerCase().includes(value);
    })
  }

  deletar(id:number | undefined) {
    this.serviceUsuario.DeletarUsuario(id).subscribe(response =>{
      window.location.reload();
    })
  }

}
