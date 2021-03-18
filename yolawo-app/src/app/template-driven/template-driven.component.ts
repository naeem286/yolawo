import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  countryList:country[] = [
    new country("1", "Pakistan"),
    new country('2', 'Germany'),
    new country('3', 'USA')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }

}

export class country {
  id:string;
  name:string;

  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}

