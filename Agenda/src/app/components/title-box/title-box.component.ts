import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CdkAccordionItem } from '@angular/cdk/accordion';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent implements OnInit {
  contacts = [
    {"id": 1,"nome": "Luiz", "sobrenome": "Sousa", "empresa": "AAA", "cargo": "Atendente", "apelido": "", "telefone": "", "email": "", "aniversario": "", "observacao": ""},
    {"id": 2,"nome":"Sonia", "sobrenome": "Pereira da Silva", "empresa": "BBB", "cargo": "Gerente", "apelido": "", "telefone": "", "email": "", "aniversario": "", "observacao": ""},
    {"id": 3,"nome":"João", "sobrenome": "Carvalho", "empresa": "AAA", "cargo": "Vendedor", "apelido": "", "telefone": "", "email": "", "aniversario": "", "observacao": ""},
    //{"id": 4,"nome":"Ana Maria", "sobrenome": "Silva", "empresa": "ABC", "cargo": "Atendente", "apelido": "", "telefone": "", "email": "", "aniversario": "", "observacao": ""},
    {"id": 5,"nome":"Heitor", "sobrenome": "Sousa", "empresa": "CCC", "cargo": "Gestor", "apelido": "", "telefone": "", "email": "", "aniversario": "", "observacao": ""}
];

  mode = 'view';
  numID = -1;
  
  newContact: any;
  constructor() {
  }

  ngOnInit(): void {
    //const a = fs.readFile('../../data/contacts.json');
    const a = require('../../data/contacts.json');
    //console.log(a);
    this.contacts = a.contacts.sort(this.sortArrayByName);
    this.numID = a.nextId;
  }

  addContact(): void {
    this.mode = 'create';
    this.newContact = {
      id: null,
      nome:'', 
      sobrenome: '', 
      empresa: '', 
      cargo: '', 
      apelido: '', 
      telefone: '', 
      email: '', 
      aniversario: '', 
      observacao: ''}
  }
  cancelAddContact(){
    this.mode = 'view';
    //console.log("criação do contato cancelada")

  }
  confirmAddContact(){
    this.newContact.id = this.numID;
    this.numID++;
    this.contacts.push(this.newContact)
    this.contacts = this.contacts.sort(this.sortArrayByName);
    this.mode = 'view';
    //console.log(this.contacts)
  }

  editContact(contact:any) {
    this.mode = 'edit';
  }
  confirmEditContact(contact:any){
    this.contacts.forEach(data => {
      if(data.id === contact.id){
        this.contacts[(this.contacts.indexOf(data))] = contact;
      }
    })
    this.contacts = this.contacts.sort(this.sortArrayByName);
    this.mode = 'view';
  }
  cancelEditContact(){
    this.mode = 'view';
    //console.log("edição do contato cancelada")
  }

  deleteContact(contact:any){
    this.contacts.forEach(data => {
      if(data.id === contact.id){
        this.contacts.splice(this.contacts.indexOf(data), 1);
      }
    })
    this.mode = 'view';
    //console.log(this.contacts)
  }

  sortArrayByName(a:any, b:any) {
    if ( a.nome < b.nome ){
      return -1;
    }
    if ( a.nome > b.nome ){
      return 1;
    }
    return 0;
  }
  
}
