import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  id: number;
  usuario: string;
  contrasenia: string;
  idCargo: number;
  cargo: string;
  idDependencia: number;
  dependencia: string;

  constructor() {}

  set setId(id: number) {
    this.id = id;
  }
  set setUsuario(usuario: string) {
    this.usuario = usuario;
  }
  set setContrasenia(contrasenia: string) {
    this.contrasenia = contrasenia;
  }
  set setIdCargo(idCargo: number) {
    this.idCargo = idCargo;
  }
  set setCargo(cargo: string) {
    this.cargo = cargo;
  }
  set setIdDependencia(idDependencia: number) {
    this.idDependencia = idDependencia;
  }
  set setDependencia(dependencia: string) {
    this.dependencia = dependencia;
  }

  get getId() {
    return this.id;
  }
  get getUsuario() {
    return this.usuario;
  }
  get getContrasenia() {
    return this.contrasenia;
  }
  get getIdCargo() {
    return this.idCargo;
  }
  get getCargo() {
    return this.cargo;
  }
  get getIdDependencia() {
    return this.idDependencia;
  }
  get getDependencia() {
    return this.dependencia;
  }

  public limpiarRegistro(): void {
    this.id = null;
    this.usuario = null;
    this.contrasenia = null;
    this.idCargo = null;
    this.cargo = null;
    this.idDependencia = null;
    this.dependencia = null;
    return null;
  }
}
