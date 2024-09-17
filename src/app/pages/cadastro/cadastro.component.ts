import { Component } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

}
