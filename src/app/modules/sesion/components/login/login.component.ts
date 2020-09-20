import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioRequest } from "../../dto/request/usuario.request";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioRequest = new UsuarioRequest();
  formularioGrp: FormGroup;

  messages = {
    'usuario': {
      'required': 'El campo es obligatorio'
    },
    'contrasenia': {
      'required': 'El campo es obligatorio'
    }
  };
  formErrors = {
    'usuario': '',
    'contrasenia': '',
  };

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formularioGrp = this.fb.group({
      usuario: ['', [Validators.required]],
      contrasenia: ['', [Validators.required]],
    });

    this.formularioGrp.get('usuario').setValue('admin');
    this.formularioGrp.get('contrasenia').setValue('1234');
  }

  autenticar() {
    this.usuario.usuario = this.formularioGrp.get('usuario').value;
    this.usuario.contrasenia = this.formularioGrp.get('contrasenia').value;

    localStorage.setItem('user', JSON.stringify(this.usuario));

    this.router.navigate(['/intranet/home']);
  }

}
