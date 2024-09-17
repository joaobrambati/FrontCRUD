import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{
  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      id: new FormControl(0),
      nomeCompleto: new FormControl(''),
      email: new FormControl(''),
      cargo: new FormControl(''),
      salario: new FormControl(0),
      cpf: new FormControl(''),
      situacao: new FormControl(true),
      senha: new FormControl('')
    })
  }

  usuarioForm! : FormGroup;
}
