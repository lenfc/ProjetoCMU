import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    {nome:'Luiz', sobrenome: 'Sousa', empresa: 'AAA', cargo: 'Atendente'},
    {nome:'Sonia', sobrenome: 'Pereira da Silva', empresa: 'BBB', cargo: 'Gerente'},
    {nome:'João', sobrenome: 'Carvalho', empresa: 'AAA', cargo: 'Vendedor'},
    {nome:'Ana Maria', sobrenome: 'Silva', empresa: 'ABC', cargo: 'Atendente'},
    {nome:'Heitor', sobrenome: 'Sousa', empresa: 'CCC', cargo: 'Gestor'}
  ];
  expandedIndex = 0;
}
